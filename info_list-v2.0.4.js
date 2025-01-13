// Сначала загружаем jQuery
const jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(jqueryScript);

window.banSystem = {
    initialized: false,
    currentPage: 0,
    isLoading: false,
    currentServerId: '6364'
};

function waitForJQuery() {
    console.log('Waiting for jQuery...');
    return new Promise((resolve) => {
        if (typeof jQuery !== 'undefined') {
            console.log('jQuery already loaded');
            resolve();
            return;
        }

        jqueryScript.onload = () => {
            console.log('jQuery loaded via script');
            resolve();
        };

        jqueryScript.onerror = () => {
            console.error('Error loading jQuery');
            resolve();
        };
    });
}

function initBanSystem() {
    console.log('Initializing ban system...');
    const API_URL = 'https://court.rustapp.io/public/bans';
    const SERVERS_API_URL = 'https://court.rustapp.io/public/servers';
    const API_KEY = 'f39428d5-3ee8-4ba9-84e9-6105fb10ea04';
    const PUBLIC_API_KEY = 'c2a2b5d6-13f7-4cc2-9c2c-122161d76e02';

    function loadServers() {
        console.log('Loading servers...');
        jQuery.ajax({
            url: SERVERS_API_URL,
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-api-key': API_KEY,
                'x-public-api-key': PUBLIC_API_KEY
            },
            success: function(response) {
                console.log('Servers loaded:', response);
                const serverSelector = jQuery('#serverSelector');
                serverSelector.empty();
                
                serverSelector.append(jQuery('<option>', {
                    value: '',
                    text: 'Все сервера'
                }));

                const serverNames = {
                    '6364': 'Combat Arenas | Targets | Aimbot',
                    '6367': 'Wartune #2 SOLO'
                };

                response.forEach(server => {
                    if (server.id === '6266' || server.id === 6266) return;
                    
                    const serverName = serverNames[server.id] || server.name || `Сервер ${server.id}`;
                    const option = jQuery('<option>', {
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

                // После загрузки серверов сразу загружаем баны
                loadBans(window.banSystem.currentPage);
            },
            error: function(xhr, status, error) {
                console.error('Error loading servers:', error);
                console.error('XHR:', xhr);
                console.error('Status:', status);
                jQuery('#serverSelector').html('<option>Ошибка загрузки серверов</option>');
            }
        });
    }

    function loadBans(page, searchQuery = '') {
        console.log('Loading bans, page:', page, 'query:', searchQuery);
        if (window.banSystem.isLoading) {
            console.log('Already loading bans, skipping...');
            return;
        }

        window.banSystem.isLoading = true;
        window.banSystem.currentPage = page;
        
        jQuery('#bansTableBody').html('<tr><td colspan="5" class="text-center">Загрузка данных...</td></tr>');
        
        let url = `${API_URL}?sort_by=created&page=${page}`;
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
        
        console.log('Loading bans from URL:', url);
        jQuery.ajax({
            url: url,
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-api-key': API_KEY,
                'x-public-api-key': PUBLIC_API_KEY
            },
            success: function(response) {
                console.log('Bans loaded:', response);
                if (!response || !response.results || !Array.isArray(response.results)) {
                    console.error('Invalid response format:', response);
                    jQuery('#bansTableBody').html('<tr><td colspan="5" class="text-center text-danger">Ошибка формата данных</td></tr>');
                    return;
                }
                
                if (response.results.length === 0) {
                    const searchMessage = searchQuery ? 
                        `Игрок "${searchQuery}" не найден в списке заблокированных` : 
                        'Нет активных банов';
                    jQuery('#bansTableBody').html(`<tr><td colspan="5" class="text-center">${searchMessage}</td></tr>`);
                    jQuery('#totalBans').text('Всего банов: 0');
                    jQuery('#pagination').empty();
                    return;
                }

                displayBans(response.results);
                updatePagination(response.page, response.total_pages || Math.ceil(response.total / response.limit));
                jQuery('#totalBans').text(`Всего банов: ${response.total || response.results.length}`);
            },
            error: function(xhr, status, error) {
                console.error('Error loading bans:', {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    responseText: xhr.responseText,
                    error: error
                });
                jQuery('#bansTableBody').html('<tr><td colspan="5" class="text-center text-danger">Ошибка загрузки данных</td></tr>');
            },
            complete: function() {
                window.banSystem.isLoading = false;
            }
        });
    }

    function displayBans(bans) {
        console.log('Displaying bans:', bans);
        const tableBody = jQuery('#bansTableBody');
        tableBody.empty();

        bans.forEach((ban, index) => {
            const player = ban.player;
            const row = jQuery('<tr>');
            
            const playerCell = jQuery('<td>').html(`
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

            const reasonCell = jQuery('<td>').html(`
                <div>${ban.reason}</div>
                ${ban.comment ? `<div class="text-muted small">${ban.comment}</div>` : ''}
            `);

            const locationCell = jQuery('<td>').html(`
                <img src="https://flagcdn.com/w20/${player.ip_details.country_code.toLowerCase()}.png" 
                     class="country-flag" alt="${player.ip_details.country_code}">
                ${player.ip_details.city}, ${player.ip_details.country_name}
            `);

            const banDate = new Date(ban.created_at);
            const dateCell = jQuery('<td>').text(banDate.toLocaleString('ru-RU'));

            const vacBans = player.steam_data?.ban_data?.vac_ban;
            const vacCell = jQuery('<td>').html(`
                ${vacBans ? `
                    <span class="badge bg-danger">VAC: ${vacBans.count}</span>
                ` : 'Нет VAC банов'}
            `);

            row.append(playerCell, reasonCell, locationCell, dateCell, vacCell);
            tableBody.append(row);
        });
    }

    function updatePagination(currentPage, totalPages) {
        console.log('Updating pagination:', currentPage, totalPages);
        const pagination = jQuery('#pagination');
        pagination.empty();

        if (totalPages <= 1) return;

        const prevBtn = jQuery('<button>')
            .addClass('btn btn-outline-secondary me-2')
            .prop('disabled', currentPage === 0)
            .html('<i class="bi bi-chevron-left"></i>')
            .click(() => loadBans(currentPage - 1));

        const nextBtn = jQuery('<button>')
            .addClass('btn btn-outline-secondary ms-2')
            .prop('disabled', currentPage >= totalPages - 1)
            .html('<i class="bi bi-chevron-right"></i>')
            .click(() => loadBans(currentPage + 1));

        const pageInfo = jQuery('<span>')
            .addClass('btn btn-outline-secondary')
            .text('Страница ' + (currentPage + 1) + ' из ' + totalPages);

        pagination.append(prevBtn, pageInfo, nextBtn);
    }

    function initSearch() {
        console.log('Initializing search...');
        const searchInput = jQuery('#playerSearch');
        const searchButton = jQuery('#searchButton');

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
            if (jQuery(this).val().trim() === '') {
                loadBans(0);
            }
        });
    }

    loadServers();
    initSearch();
}

async function main() {
    try {
        console.log('Starting main initialization...');
        await waitForJQuery();
        console.log('jQuery loaded, dispatching initComponentsManager...');
        window.dispatchEvent(new CustomEvent("initComponentsManager"));

        window.componentsManager.addListener('CUSTOM_PAGE', 'DID_MOUNT', () => {
            console.log('DID_MOUNT triggered, checking bansTableBody...');
            if (jQuery('#bansTableBody').length && !window.banSystem.initialized) {
                console.log('Initializing ban system from DID_MOUNT');
                window.banSystem.initialized = true;
                initBanSystem();
            }
        });

        window.componentsManager.addListener('CUSTOM_PAGE', 'DID_UPDATE', () => {
            console.log('DID_UPDATE triggered, checking bansTableBody...');
            if (jQuery('#bansTableBody').length && !window.banSystem.initialized) {
                console.log('Initializing ban system from DID_UPDATE');
                window.banSystem.initialized = true;
                initBanSystem();
            }
        });

        window.componentsManager.load();
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

if (window.isAppReady) {
    console.log('Window is ready, starting main...');
    main();
} else {
    console.log('Window not ready, waiting for appReady event...');
    window.addEventListener('appReady', () => {
        console.log('appReady event triggered, starting main...');
        main();
    });
}
