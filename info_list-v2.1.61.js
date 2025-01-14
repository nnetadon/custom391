window.banSystem = {
    initialized: false,
    currentPage: 0,
    isLoading: false,
    currentServerId: '',
    itemsPerPage: 10,
    totalBans: 0
};

const serverNames = {
    '6364': 'Combat Arenas | Targets | Aimbot',
    '6367': 'Wartune #2 SOLO',
    '6369': 'Wartune #3 MAX 3'
};

function initBanSystem() {
    const API_URL = 'https://court.rustapp.io/public/bans';
    const SERVERS_API_URL = 'https://court.rustapp.io/public/servers';
    const API_KEY = 'f39428d5-3ee8-4ba9-84e9-6105fb10ea04';
    const PUBLIC_API_KEY = 'c2a2b5d6-13f7-4cc2-9c2c-122161d76e02';

    function loadServers() {
        $.ajax({
            url: SERVERS_API_URL,
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-api-key': API_KEY,
                'x-public-api-key': PUBLIC_API_KEY
            },
            success: function(response) {
                const serverSelector = $('#serverSelector');
                serverSelector.empty();
                
                serverSelector.append($('<option>', {
                    value: '',
                    text: 'Все сервера'
                }));

                response.forEach(server => {
                    if (server.id === '6266' || server.id === 6266) return;
                    
                    const serverName = serverNames[server.id] || server.name || `Сервер ${server.id}`;
                    const option = $('<option>', {
                        value: server.id,
                        text: serverName
                    });
                    
                    if (server.id.toString() === window.banSystem.currentServerId) {
                        option.prop('selected', true);
                    }
                    
                    serverSelector.append(option);
                });

                serverSelector.on('change', function() {
                    window.banSystem.currentServerId = this.value;
                    window.banSystem.currentPage = 0;
                    loadBans(0);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error loading servers:', error);
                $('#serverSelector').html('<option>Ошибка загрузки серверов</option>');
            }
        });
    }

    function loadBans(page, searchQuery = '') {
        if (window.banSystem.isLoading) {
            return;
        }

        window.banSystem.isLoading = true;
        window.banSystem.currentPage = page;
        
        $('#bansTableBody').html('<tr><td colspan="5" class="text-center">Загрузка данных...</td></tr>');
        
        // Формируем URL для получения банов
        let url = `${API_URL}?sort_by=created&page=${page}&limit=10`;
        if (window.banSystem.currentServerId) {
            url += `&for_server_id=${window.banSystem.currentServerId}`;
        }
        if (searchQuery) {
            if (/^\d+$/.test(searchQuery)) {
                url += `&steam_id=${encodeURIComponent(searchQuery)}`;
            } else {
                url += `&player_name=${encodeURIComponent(searchQuery)}`;
            }
        }

        // Получаем общее количество банов
        $.ajax({
            url: `${API_URL}/count`,
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-api-key': API_KEY,
                'x-public-api-key': PUBLIC_API_KEY
            },
            success: function(countResponse) {
                if (countResponse && typeof countResponse.count === 'number') {
                    window.banSystem.totalBans = countResponse.count;
                }
            },
            complete: function() {
                // Загружаем страницу банов
                $.ajax({
                    url: url,
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'x-api-key': API_KEY,
                        'x-public-api-key': PUBLIC_API_KEY
                    },
                    success: function(response) {
                        if (!response || !response.results || !Array.isArray(response.results)) {
                            $('#bansTableBody').html('<tr><td colspan="5" class="text-center text-danger">Ошибка формата данных</td></tr>');
                            return;
                        }
                        
                        if (response.results.length === 0) {
                            const searchMessage = searchQuery ? 
                                `Игрок "${searchQuery}" не найден в списке заблокированных` : 
                                'Нет активных банов';
                            $('#bansTableBody').html(`<tr><td colspan="5" class="text-center">${searchMessage}</td></tr>`);
                            $('#pagination').empty();
                            return;
                        }

                        displayBans(response.results);
                        
                        // Вычисляем количество страниц на основе общего количества банов
                        const totalPages = Math.max(1, Math.ceil(window.banSystem.totalBans / 10));
                        
                        updatePagination(page, totalPages);
                    },
                    error: function(xhr, status, error) {
                        $('#bansTableBody').html('<tr><td colspan="5" class="text-center text-danger">Ошибка загрузки данных</td></tr>');
                    },
                    complete: function() {
                        window.banSystem.isLoading = false;
                    }
                });
            }
        });
    }

    function displayBans(bans) {
        const tableBody = $('#bansTableBody');
        tableBody.empty();

        bans.forEach((ban, index) => {
            const player = ban.player;
            const row = $('<tr>');
            
            const playerCell = $('<td>').html(`
                <div class="d-flex align-items-center">
                    <a href="https://steamcommunity.com/profiles/${player.steam_id}" target="_blank" class="me-2">
                        <img src="${player.steam_avatar}" alt="Avatar" class="avatar-img">
                    </a>
                    <div>
                        <div class="fw-bold">
                            <a href="https://steamcommunity.com/profiles/${player.steam_id}" target="_blank" class="text-decoration-none">
                                ${player.steam_name}
                            </a>
                        </div>
                        <div class="text-muted small">${player.steam_id}</div>
                    </div>
                </div>
            `);

            const serverId = ban.server_id || ban.for_server_id;
            const serverName = serverNames[serverId] || (serverId ? `Сервер ${serverId}` : 'Все сервера');
            
            const reasonCell = $('<td>').html(`
                <div>${ban.reason}</div>
                ${ban.comment ? `<div class="text-muted small">${ban.comment}</div>` : ''}
                <div class="text-muted small">Сервер: ${serverName}</div>
            `);

            const locationCell = $('<td>').html(`
                <img src="https://flagcdn.com/w20/${player.ip_details.country_code.toLowerCase()}.png" 
                     class="country-flag" alt="${player.ip_details.country_code}">
                ${player.ip_details.city}, ${player.ip_details.country_name}
            `);

            const banDate = new Date(ban.created_at);
            const dateCell = $('<td>').text(banDate.toLocaleString('ru-RU'));

            const vacBans = player.steam_data?.ban_data?.vac_ban;
            const vacCell = $('<td>').html(`
                ${vacBans ? `
                    <span class="badge bg-danger">VAC: ${vacBans.count}</span>
                ` : 'Нет VAC банов'}
            `);

            row.append(playerCell, reasonCell, locationCell, dateCell, vacCell);
            tableBody.append(row);
        });
    }

    function updatePagination(currentPage, totalPages) {
        const pagination = $('#pagination');
        pagination.empty();

        currentPage = parseInt(currentPage);
        totalPages = parseInt(totalPages);

        // Контейнер с правильными отступами
        const container = $('<div>')
            .addClass('d-flex justify-content-between align-items-center w-100 mb-3');

        // Информация о банах
        const infoText = $('<div>')
            .addClass('me-3')
            .text(`Найдены ${window.banSystem.totalBans || '0'} бана`);

        // Правая часть с пагинацией
        const paginationRight = $('<div>')
            .addClass('d-flex align-items-center gap-3');

        // Текст страницы
        const pageText = $('<div>')
            .text(`Страница ${currentPage + 1} из ${totalPages}`);

        // Контейнер для кнопок
        const buttonsContainer = $('<div>')
            .addClass('d-flex gap-2');

        // Кнопки навигации
        const prevBtn = $('<button>')
            .addClass('btn btn-dark px-4')
            .prop('disabled', currentPage <= 0)
            .text('Назад')
            .click(() => loadBans(currentPage - 1));

        const nextBtn = $('<button>')
            .addClass('btn btn-dark px-4')
            .prop('disabled', currentPage >= totalPages - 1)
            .text('Вперед')
            .click(() => loadBans(currentPage + 1));

        // Собираем все вместе
        buttonsContainer.append(prevBtn, nextBtn);
        paginationRight.append(pageText, buttonsContainer);
        container.append(infoText, paginationRight);
        pagination.append(container);
    }

    function initSearch() {
        const searchInput = $('#playerSearch');
        const searchButton = $('#searchButton');

        function performSearch() {
            const query = searchInput.val().trim();
            loadBans(0, query);
        }

        searchButton.click(performSearch);

        searchInput.on('keypress', function(e) {
            if (e.which === 13) {
                performSearch();
            }
        });

        searchInput.on('input', function() {
            if ($(this).val().trim() === '') {
                loadBans(0);
            }
        });
    }

    loadServers();
    loadBans(window.banSystem.currentPage);
    initSearch();
}

function main() {
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    window.componentsManager.addListener('CUSTOM_PAGE', 'DID_MOUNT', () => {
        if ($('#bansTableBody').length) {
            initBanSystem();
        }
    });

    window.componentsManager.addListener('CUSTOM_PAGE', 'DID_UPDATE', () => {
        if ($('#bansTableBody').length && !window.banSystem.initialized) {
            initBanSystem();
        }
    });

    window.componentsManager.load();
}

if (window.isAppReady) {
    main();
} else {
    window.addEventListener('appReady', main);
}
