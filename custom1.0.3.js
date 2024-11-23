const event = new CustomEvent("setCustomConfig");
  
window.currency = '₽';
window.zeroToFree = true;
window.hideServerSelector = true; // Добавлен `window.`
window.sidebarStoreToRight = true; // Добавлен `window.`
oldDesignDropdownProduct = true; // Старый выбор товаров
  
window.dispatchEvent(event);


// Функция для открытия модального окна
function openModal(modalId) {
    document.querySelector(`#${modalId}`).classList.add('active');
}

const rulesModalHtml = `
<div role="presentation" onmousedown="document.querySelector('#rulesModal').classList.remove('active');" id="rulesModal" class="customModalWrapper">
    <div class="customModalOverflow">
        <div class="customModalPosition">
            <div role="presentation" onmousedown="event.stopPropagation();" class="customModalContent">
                <div class="boxHeader">Информация</div>
                <div class="boxBody">
                    <div class="xbox_custom_rules" style="text-align: left;">
                        <span data-v-a5c90374="" class="text-18-500 text-grey-50">Новые разработки</span><p data-v-a5c90374="" class="text-16-400 text-grey-400">Мы стараемся над продвижением проекта и вносим нововведения</p><div data-v-a5c90374="" class="items"><div data-v-a5c90374="" class="item"><div data-v-a5c90374="" class="image"><img data-v-a5c90374="" src="https://i.imgur.com/26c2oJw.png"></div><div data-v-a5c90374="" class="text"><p data-v-a5c90374="" class="font-medium">Текст #1</p><p data-v-a5c90374="" class="text-grey-400 text-sm">Описание #1</p></div></div><div data-v-a5c90374="" class="item"><div data-v-a5c90374="" class="image"><img data-v-a5c90374="" src="https://i.imgur.com/uV9TlYc.png"></div><div data-v-a5c90374="" class="text"><p data-v-a5c90374="" class="font-medium">Текст #2</p><p data-v-a5c90374="" class="text-grey-400 text-sm">Описание #2</p></div></div><div data-v-a5c90374="" class="item"><div data-v-a5c90374="" class="image"><img data-v-a5c90374="" src="https://i.imgur.com/26c2oJw.png"></div><div data-v-a5c90374="" class="text"><p data-v-a5c90374="" class="font-medium">Текст #3</p><p data-v-a5c90374="" class="text-grey-400 text-sm">Описание #3</p></div></div></div>
                        
                    </div>
                </div>
                <div class="boxFooter">
                    <button onclick="document.querySelector('#rulesModal').classList.remove('active');" type="button" class="btn Button-module__btn Button-module__gray">Закрыть</button>
                </div>
            </div>
        </div>
`;

document.body.insertAdjacentHTML('beforeend', rulesModalHtml);


let currentImage = null;

        function changeImageSize(imageSrc) {
            if (currentImage) {
                closeImage();
            }
            currentImage = document.getElementById("largeImage");
            currentImage.src = imageSrc;
            currentImage.style.display = 'block';
            document.querySelector('.overlay').style.display = 'block';
        }

        function closeImage() {
            if (currentImage) {
                currentImage.style.display = 'none';
                document.querySelector('.overlay').style.display = 'none';
                currentImage = null;
            }
        }

// Слайдер и авторизация
function paynowMain() {
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));
    window.dispatchEvent(new CustomEvent("initToastManager"));

    window.componentsManager.addListener('BALANCE_MODAL', 'DID_UPDATE', updateTopUpModal);

    window.componentsManager.load();
}

function main() {
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    // Проверка готовности приложения и вызов paynowMain
    if (window.isAppReady) {
        paynowMain();
    } else {
        window.addEventListener('appReady', () => {
            paynowMain();
        });
    }

    window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        const { player } = window.getState().player;

        if (!player) return;

        const userAvatar = `
            <a href="/profile" style="text-decoration: none;" class="user-avatar-link">
                <div class="user-avatar-container" style="border-radius: 50%; width: 38px; height: 38px">
                    <img class="user-avatar-image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" src="${player.avatar}" alt="User Avatar" />
                </div>
            </a>
        `;

        const userName = player.username; // Используем поле username
        const profileName = `<a href="/profile" style="text-decoration: none;"><div class="ProfileNav-module__name">${userName}</div></a>`;

        const profileLink = document.querySelector('.PlayerMenu-module__profileLink');

        profileLink.insertAdjacentHTML('beforebegin', userAvatar);
        profileLink.insertAdjacentHTML('beforebegin', profileName);
    });

    window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        const { player } = window.getState().player;
        if (player) return;

        const loginLink = `<img src="https://gspics.org/images/2024/02/23/0bZN5I.png" alt="Авторизация" style="width: 20px; height: 20px; margin-right: 5px;">Авторизация`;
        const profileLink = document.querySelector('.PlayerMenu-module__loginLink[href="/api/v1/player.login?login"]');

        profileLink.innerHTML = loginLink;
    });

    // Теперь добавляем footer после загрузки компонентов
    window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', () => {
        // Создание нового элемента footer
        const footer = document.createElement('footer');
        footer.setAttribute('data-v-5b1745d7', '');
        footer.className = "flex flex-col lg:flex-row justify-center items-center gap-3 pt-4 lg:pt-10 pb-10 overflow-hidden";

        footer.innerHTML = `
            <figure data-v-15ddda0e="" data-v-5b1745d7="" class="image flex justify-center items-center w-24 h-24 lg:w-36 lg:h-36 -mb-5 lg:mb-0 has-loaded">
                <img data-v-15ddda0e="" alt="alt" class="max-w-full max-h-full" src="https://sun9-80.userapi.com/impg/fDr8yu6m0YJVmm0O7KE_wttV7Hu4Pp9yNErV0A/lEejPuxDDsk.jpg?size=512x512&amp;quality=95&amp;sign=123b4440e101dda76acaaa11b36accf8&amp;type=album" style="opacity: 1;">
            </figure>
            <div data-v-5b1745d7="" class="font-bold text-sm text-center lg:text-left">
                <span data-v-5b1745d7="">© 2024 WARTUNE</span>
                <span data-v-5b1745d7="" class="inline-block lg:hidden"> · </span>
                <span data-v-5b1745d7="" class="inline-block lg:block mt-2">ALL RIGHTS RESERVED.</span>
                <span data-v-5b1745d7="" class="block mt-2 text-xs text-neutral-400 font-thin">SERVED BY #5</span>
            </div>
            <div data-v-5b1745d7="" class="hidden lg:block w-px bg-white h-12 mx-12"></div>
            <div data-v-5b1745d7="">
                <p data-v-5b1745d7="" class="hidden lg:block font-bold text-sm">LINKS</p>
                <div data-v-5b1745d7="" class="mt-3 flex justify-center flex-wrap gap-10 gap-y-5 text-xs">
                    <a data-v-5b1745d7="" href="/profile/">Активировать промокод</a>
                    <a data-v-5b1745d7="" href="/page/faq">Сервера</a>
                    <a data-v-5b1745d7="" href="/page/faq">Правила</a>
                    <a data-v-5b1745d7="" href="/agreement">Пользовательское соглашение</a>
                    <a data-v-5b1745d7="" href="/privacy">Политика конфиденциальности</a>
					<a data-v-5b1745d7="" href="mailto:wartunerust@yandex.ru">wartunerust@yandex.ru</a>
                </div>
					<p class="ShopFooter-module__text_new">Размещенная на настоящем сайте информация носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями ч. 2 ст. 437 Гражданского кодекса Российской Федерации.</p>
            </div>
        `;

        // Вставка нового footer в нужное место на странице
        const footerContainer = document.querySelector('.boxFooter');
        if (footerContainer) {
            footerContainer.appendChild(footer);
        }
    });

    window.componentsManager.load();
}

function injectScriptAndUse() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/gh/nnetadon/custom391/index-v2.1.4.js";
    script.onload = function() {
        main();
    };

    head.appendChild(script);
}

injectScriptAndUse();

/* DISCORD */

const profileSection = document.querySelector('.ProfileContent');

const interval = setInterval(() => {
    const lang = translateResource[getLang()]; // Получаем текст на текущем языке
    const profileSectionWrapper = document.querySelector('.ProfileContent-module__wrapper');
    if (profileSectionWrapper) {
        clearInterval(interval); // Останавливаем проверку, если элемент найден
        const newContentHTML = `
            <a class="tabs__promo_code__telegram" target="_blank" href="https://t.me/wartunerust" rel="noreferrer"><div class="tabs__promo_code__telegram__title"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM13.6277 8.08328C12.7389 7.30557 11.2616 7.30557 10.3728 8.08328C10.0611 8.35604 9.58723 8.32445 9.31447 8.01272C9.04171 7.701 9.0733 7.22717 9.38503 6.95441C10.8394 5.68186 13.1611 5.68186 14.6154 6.95441C16.1285 8.27835 16.1285 10.4717 14.6154 11.7956C14.3588 12.0202 14.0761 12.2041 13.778 12.3484C13.1018 12.6756 12.7502 13.1222 12.7502 13.5V14.25C12.7502 14.6642 12.4144 15 12.0002 15C11.586 15 11.2502 14.6642 11.2502 14.25V13.5C11.2502 12.221 12.3095 11.3926 13.1246 10.9982C13.3073 10.9098 13.4765 10.799 13.6277 10.6667C14.4577 9.9404 14.4577 8.80959 13.6277 8.08328ZM12 18C12.4142 18 12.75 17.6642 12.75 17.25C12.75 16.8358 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.8358 11.25 17.25C11.25 17.6642 11.5858 18 12 18Z" fill="white"></path></svg>${lang.tgpromo}</div><div class="tabs__promo_code__telegram__body"><img src="https://gspics.org/images/2024/10/12/IIRpVL.jpg" alt="Dream Rust Avatar"><div class="tabs__promo_code__telegram__body__info"><h4>WARTUNE RUST в Telegram</h4><p>t.me</p></div></div></a>`;
        
        profileSectionWrapper.insertAdjacentHTML('beforeend', newContentHTML);
    }
}, 1000); // Проверка раз в 1 секунду

/* Пополнение */
const targetNode = document.body; // Или другой родитель, в котором может появиться элемент
const config = { childList: true, subtree: true };

let contentAdded = false; // Переменная для отслеживания добавления контента

const addCustomContent = () => {
    const lang = translateResource[getLang()]; // Получаем текст на текущем языке
    const modalFooter = document.querySelector('.PlayerBalanceModal-module__footer');

    if (modalFooter && !contentAdded) { 
        const newCode = `
<blockquote><span>${lang.bonus}</span></blockquote>
`;
        modalFooter.insertAdjacentHTML('beforebegin', newCode);
        contentAdded = true; // Устанавливаем флаг, что контент был добавлен
    }
};


// Обновляем contentAdded, если модальное окно закрыто или отсутствует
const checkIfModalClosed = () => {
    const modalFooter = document.querySelector('.PlayerBalanceModal-module__footer');
    if (!modalFooter) {
        contentAdded = false; // Сбрасываем флаг, если модальный элемент отсутствует
    }
};

const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            addCustomContent();
            checkIfModalClosed();
        }
    }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

/* Виджет пополнение 10% + контакт админа */
const eventEndDate = new Date('2024-11-30T23:59:59'); // Конец события

const headerInterval = setInterval(() => {  
    const lang = translateResource[getLang()]; 
    const headerContainer = document.querySelector('.container.headerContainer'); 

    if (headerContainer) {
        clearInterval(headerInterval); // Останавливаем проверку, если элемент найден
        
        // Создаем основной контент с вашим текстом и таймером
        const noticeContainerHTML = `
            <div class="notice-container">
                <span class="notice-icon"><i class="fa--xf far fa-info" aria-hidden="true"></i></span>
                <div class="notice-content">
                    <p align="center"><big><big>${lang.discount}</big></big></p>
                    <p align="center">${lang.discount2}<a href="https://discord.gg/EpDjswKYHW"><red7>${lang.discountlink}</red7></a></p>
                    <p align="center" id="timer">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon mr-1" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012l.354-.354l.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354l-.354.354l-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"></path>
                        </svg>
                        <span id="time-display"></span> <!-- Таймер будет обновлен здесь -->
                    </p>
                </div>
            </div>`;

        headerContainer.insertAdjacentHTML('beforeend', noticeContainerHTML); // Добавляем основной контент

        // Функция для обновления таймера
        const updateTimer = () => {
            const now = new Date();
            const timeRemaining = eventEndDate - now; // Оставшееся время в миллисекундах

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                document.getElementById('timer').innerHTML = `<span>Событие завершилось!</span>`;
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Форматируем вывод таймера
            let timeString = '';
            if (days > 0) {
                timeString += `${String(days).padStart(2, '0')}д `;
            }
            timeString += `${String(hours).padStart(2, '0')}ч:${String(minutes).padStart(2, '0')}м:${String(seconds).padStart(2, '0')}с`;

            // Обновляем содержание таймера
            document.getElementById('time-display').innerHTML = timeString;
        };

        // Запускаем обновление таймера каждую секунду
        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Первая инициализация
    }
}, 1000); // Проверка раз в 1 секунду

// custom-log
function checkDomain() {
    const currentDomain = window.location.hostname; // Получаем текущий домен
    const targetDomain = "wartunerust.ru"; // Целевой домен для проверки
  
    if (currentDomain !== targetDomain) {
        window.location.href = `https://${targetDomain}`; // Редирект на целевой домен
    }
}
  
checkDomain(); // Вызываем функцию сразу после загрузки страницы

function showContent(privilege) {
        const contentDiv = document.getElementById('content');
        let htmlContent = '';

        switch (privilege) {
            case 'vipkit':
                htmlContent = `
                    <div class="productModal__desc">
    
    

    
    <div class="bb">
        <div class="serverheader1">Кит "PVP" - <span>ОТКАТ 3Ч</span></div>
        <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smg.thompson.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Томпсон</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Пистолет. патрон</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожная маска</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожный нагрудник</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Килт из дорожных знаков</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Худи</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/pants.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Штаны</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ботинки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Тактические перчатки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x10</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Мед. шприц</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x10</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Аптечка</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x10</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ежевика</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bb">
        <div class="serverheader1">Кит "Ресурсы" - <span>ОТКАТ 24Ч</span></div>
        <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x25000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/wood.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дерево</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x25000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/stones.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Камень</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x15000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Фрагменты металла</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x750</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">МВК</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x2000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ткань</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x2000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/leather.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Кожа</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x2000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Топливо низкого качества</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Скрап</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x15000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Сера</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x15000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Уголь</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Сигнальная ракета</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bb">
        <div class="serverheader1">Кит "Компоненты" - <span>ОТКАТ 24Ч</span></div>
        <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Трубы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x25</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Микросхемы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус винтовки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус пистолет-пулемета</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус полуавтомата</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Пружины</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Набор для шитья</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/rope.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Веревки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/gears.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Шестерни</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Металл лезвие</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожные знаки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Брезент</p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    

</div>`;
                break;
            case 'vipbonus':
                htmlContent = `
                    <div class="productModal__desc">
                        <p class="desc__title__kit">Описание привилегии</p>
                        <div class="desc__content">
                            <div class="content__info">
                                <p class="title">Цвета и префикс</p>
                                <p class="description"><b>/chat</b> - Управление чатом</p>
                            </div>
                            <font color="white"><span style="color: #a5e664">[</span><span style="color: #e6e464;">V</span><span style="color: #e6e464;">I</span><span style="color: #e6b264;">P</span><span style="color: #e66464;">]</span></font>
                        </div>
                        <div class="desc__content">
                            <div class="content__info">
                                <p class="title">x6 рейт добычи ресурсов</p>
                            </div>
                        </div>
                        <a class="container-oplata"> 
                            <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/0edb19fc233b2ad05b087b17ac0733be.png" class="icon-user-oplata">
                            <div class="priv_discount">?</div>
                            <div class="textContainer-oplata">
                                <p class="title">1 доп. точка телепортации</p><span class="tooltiptext1">Вместо 3 точек дома будет <b>4</b></span>
                            </div>
                        </a>
                        <a class="container-oplata"> 
                            <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/51fd9bcbf57d547ee841dcde1a810f17.png" class="icon-user-oplata">
                            <div class="content__info">
                                <p class="title">8 слотов в обмене</p>
                                <p class="description"><b>/trade</b> - Отправить запрос обмена</p>
                            </div>
                        </a>
                    </div>
                `;
                break;
case 'vipcommand':
    htmlContent = `
<div class="_wrapper_1fid2_1">
    <p class="_title_1fid2_8">Команды</p>
    <div class="_list_1fid2_15">
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/trade</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Обмен между игроками.</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/chat</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Команда позволяет установить префикс, цвет префикса и ника.</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/sethome</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Установка точки телепортации домой.</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/tpr ник</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Телепортация к игроку</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/outpost</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Телепортация в мирный город. (Время телепортации ускоряется вместе с привилегией)</div>
        </div>
    <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/bandit</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Телепортация в бандитский город. (Время телепортации ускоряется вместе с привилегией)</div>
        </div></div>
</div>
`;
    break;

            case 'premiumbonus':
    htmlContent = `
    <div class="productModal__desc">
        <div class="desc__content">
            <div class="content__info">
                <p class="title">Цвета и префикс</p>
                <p class="description"><b>/chat</b> - Управление чатом</p>
            </div>
            <font color="white"><span style="color: #833ab4">P</span><span style="color: #b123a4;">R</span><span style="color: #d3008c;">E</span><span style="color: #eb0070;">M</span><span style="color: #f90051;">I</span><span style="color: #fe2941">U</span><span style="color: #ff412f;">M</span><span style="color: #ff412f;"> </span></font>
        </div><div class="desc__content">
            <div class="content__info">
                <p class="title">x7 рейт добычи ресурсов</p>

            </div>
        </div><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/0edb19fc233b2ad05b087b17ac0733be.png" class="icon-user-oplata">
            <div class="priv_discount">?</div>
            <div class="textContainer-oplata">
                <p class="title">2 доп. точка телепортации</p><span class="tooltiptext1">Вместо 3 точек дома будет <b>5</b></span>
            </div>
        </a><div class="desc__content">
            <div class="content__info">
                <p class="title">9 слотов в обмене</p>
                <p class="description">Команда /trade</p>
            </div>
        </div>
    </div>`;
    break;
            // vip 
            case 'vip_resources':
                htmlContent = `
                                <div class="productModal__desc">
            <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32">
            <p class="_currentKit_1owtu_86">Ресурсы</p><button class="_navBtn_1owtu_85" onclick="showContent('vip_pvp')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button></div></div><div class="bb">
                    
                    <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x25000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/wood.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дерево</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x25000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/stones.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Камень</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x15000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Фрагменты металла</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x750</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">МВК</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x2000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ткань</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x2000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/leather.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Кожа</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x2000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Топливо низкого качества</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Скрап</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x15000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Сера</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x15000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Уголь</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Сигнальная ракета</p>
                </div>
            </div>
        </div>`;
                break;

            case 'vip_pvp':
                htmlContent = `
                                <div class="productModal__desc">
            <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 3Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('vip_resources')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button>
            <p class="_currentKit_1owtu_86">PVP</p><button class="_navBtn_1owtu_85" onclick="showContent('vip_components')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button></div></div><div class="bb">
                    
                    <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smg.thompson.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Томпсон</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Пистолет. патрон</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожная маска</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожный нагрудник</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Килт из дорожных знаков</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Худи</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/pants.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Штаны</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ботинки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Тактические перчатки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x10</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Мед. шприц</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x10</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Аптечка</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x10</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ежевика</p>
                </div>
            </div>
        </div>`;
                break;
             
            case 'vip_components':
                    htmlContent = `
                                    <div class="productModal__desc">
                <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('vip_pvp')">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
                        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                    </svg>
                </button>
                <p class="_currentKit_1owtu_86">Компоненты</p></div></div><div class="bb">
                        
                        <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Трубы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x25</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Микросхемы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус винтовки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус пистолет-пулемета</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус полуавтомата</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Пружины</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Набор для шитья</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/rope.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Веревки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/gears.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Шестерни</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Металл лезвие</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожные знаки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Брезент</p>
                </div>
            </div>
        </div>`;
                    break;

            // premium
            case 'premium_resources':
                htmlContent = `
                                <div class="productModal__desc">
            <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32">
            <p class="_currentKit_1owtu_86">Ресурсы</p><button class="_navBtn_1owtu_85" onclick="showContent('premium_pvp')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button></div></div><div class="bb">
                    
                    <div class="bg1">
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x50000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/wood.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Дерево</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x50000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/stones.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Камень</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x30000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Фрагменты металла</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1500</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">МВК</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x4000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Ткань</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x4000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/leather.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Кожа</p>
                    </div>
                </div>


                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x4000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Топливо низкого качества</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x2000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Скрап</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x30000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Сера</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x30000</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Уголь</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x2</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Сигнальная ракета</p>
                    </div>
                </div>
            </div>`;
                break;

            case 'premium_pvp':
                htmlContent = `
                                <div class="productModal__desc">
            <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 3Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('premium_resources')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button>
            <p class="_currentKit_1owtu_86">PVP</p><button class="_navBtn_1owtu_85" onclick="showContent('premium_components')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button></div></div><div class="bb">
                    
                    <div class="bg1">
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smg.mp5.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">МП5</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x200</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Пистолет. патрон</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Берданка</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x200</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">5.56 патрон</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Метал. Маска</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Метал. Нагрудник</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Килт из дорожных знаков</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Худи</p>
                    </div>
                </div>


                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/pants.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Штаны</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Ботинки</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x1</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Тактические перчатки</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x15</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Мед. шприц</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x15</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Аптечка</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x25</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Черника</p>
                    </div>
                </div>
            </div>`;
                break;
             
            case 'premium_components':
                    htmlContent = `
                                    <div class="productModal__desc">
                <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('elite_pvp')">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
                        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                    </svg>
                </button>
                <p class="_currentKit_1owtu_86">Компоненты</p></div></div><div class="bb">
                        
                        <div class="bg1">
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x125</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Трубы</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x50</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Микросхемы</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x15</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Корпус винтовки</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x15</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Корпус пистолет-пулемета</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x15</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Корпус полуавтомата</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x125</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Пружины</p>
                    </div>
                </div>


                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x125</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Набор для шитья</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x125</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/rope.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Веревки</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x125</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/gears.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Шестерни</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x125</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Металл лезвие</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x125</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Дорожные знаки</p>
                    </div>
                </div>
                <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                        <p class="ft">x75</p>
                    </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                    <div class="fx">
                        <p class="fm fy">Брезент</p>
                    </div>
                </div>
            </div>`;
                    break;

            // elite 
            
            case 'elitebonus':
    htmlContent = `
    <div class="productModal__desc">
        <div class="desc__content">
        <div class="content__info">
            <p class="title">Цвета и префикс</p>
            <p class="description"><b>/chat</b> - Управление чатом</p>
        </div>
        <font color="white"><span style="color: #cfa03a">E</span><span style="color: #d5aa4c;">L</span><span style="color: #dcb45d;">I</span><span style="color: #e2bd6e;">T</span><span style="color: #efd191;">E</span></font>
    </div><div class="desc__content">
        <div class="content__info">
            <p class="title">x9 рейт добычи ресурсов</p>

        </div>
    </div><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/0edb19fc233b2ad05b087b17ac0733be.png" class="icon-user-oplata">
        <div class="priv_discount">?</div>
        <div class="textContainer-oplata">
            <p class="title">3 доп. точки телепортации</p><span class="tooltiptext1">Вместо 3 точек дома будет <b>6</b></span>
        </div>
    </a><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/9865cf142009be41dc6f00637071b4fa.png" class="icon-user-oplata">

        <div class="textContainer-oplata">
            <p class="title">Неломаемые предметы</p>
        </div>
    </a><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/33ea64f7c017cc1cb465fddb57666633.png" class="icon-user-oplata">

        <div class="textContainer-oplata">
            <p class="title"> Доступ ко всем изучениям</p>
        </div>
    </a><div class="desc__content">
        <div class="content__info">
            <p class="title">10 слотов в обмене</p>
            <p class="description">Команда /trade</p>
        </div>
    </div>
    </div>`;
    break;
            // elite
            // лево конец
            case 'elite_resources':
                htmlContent = `
                                <div class="productModal__desc">
            <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32">
            <p class="_currentKit_1owtu_86">Ресурсы</p><button class="_navBtn_1owtu_85" onclick="showContent('elite_pvp')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button></div></div><div class="bb">
                    
                    <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/wood.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дерево</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x75000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/stones.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Камень</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Фрагменты металла</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x2500</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">МВК</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ткань</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/leather.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Кожа</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Топливо низкого качества</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x3000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Скрап</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Сера</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50000</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Уголь</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x3</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Сигнальная ракета</p>
                </div>
            </div>
        </div>`;
                break;

                // середина
            case 'elite_pvp':
    htmlContent = `
                    <div class="productModal__desc">
<div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 3Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('elite_resources')">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
    </svg>
</button>
<p class="_currentKit_1owtu_86">PVP</p><button class="_navBtn_1owtu_85" onclick="showContent('elite_components')">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
    </svg>
</button></div></div><div class="bb">
        
        <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://gamestores.app/img/games/rust/1545779598.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">АК-47</p>
                </div>
            </div>

            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://gamestores.app/img/games/rust/1588298435.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Винтовка</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x300</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">5.56 патрон</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Метал. Маска</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Метал. Нагрудник</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Килт из дорожных знаков</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Худи</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/pants.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Штаны</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ботинки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Тактические перчатки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x20</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Мед. шприц</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x20</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Аптечка</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x40</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Черника</p>
                </div>
            </div>
        </div>`;
    break;
            // право конец
            case 'elite_components':
                htmlContent = `
                                <div class="productModal__desc">
            <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('elite_pvp')">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
                </svg>
            </button>
            <p class="_currentKit_1owtu_86">Компоненты</p></div></div><div class="bb">
                    
                    <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Трубы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x100</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Микросхемы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x30</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус винтовки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x30</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус пистолет-пулемета</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x30</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус полуавтомата</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Пружины</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Набор для шитья</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/rope.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Веревки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/gears.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Шестерни</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Металл лезвие</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожные знаки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x100</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Брезент</p>
                </div>
            </div>
        </div>`;
                break;
            
            // wartune 
// Слева конец
case 'wartune_resources':
    htmlContent = `
        <div class="productModal__desc">
<div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32">
<p class="_currentKit_1owtu_86">Ресурсы</p><button class="_navBtn_1owtu_85" onclick="showContent('wartune_pvp')">
<svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
<path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
</svg>
</button></div></div><div class="bb">

<div class="bg1">
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x100000</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/wood.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Дерево</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x100000</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/stones.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Камень</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x75000</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Фрагменты металла</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x4000</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">МВК</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x7500</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Ткань</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x7500</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/leather.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Кожа</p>
</div>
</div>


<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x7500</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Топливо низкого качества</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x4000</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Скрап</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x65000</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Сера</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x65000</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Уголь</p>
</div>
</div>
<div class="fh bh fl fi" data-winelement="false"><span class="fn">
    <p class="ft">x4</p>
</span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
<div class="fx">
    <p class="fm fy">Сигнальная ракета</p>
</div>
</div>
</div>`;
    break;

    // центр

            case 'wartune_pvp':
                htmlContent = `
                    <div class="productModal__desc">
<div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 3Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('wartune_resources')">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
    </svg>
</button>
<p class="_currentKit_1owtu_86">PVP</p><button class="_navBtn_1owtu_85" onclick="showContent('wartune_components')">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
    </svg>
</button></div></div><div class="bb">
        
        <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://gamestores.app/img/games/rust/1545779598.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">АК-47</p>
                </div>
            </div>

            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://gamestores.app/img/games/rust/-1214542497.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">HMLMG</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://gamestores.app/img/games/rust/1588298435.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Винтовка</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x500</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Метал. Маска</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Метал. Маска</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Метал. Нагрудник</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Килт из дорожных знаков</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Худи</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/pants.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Штаны</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ботинки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Тактические перчатки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x20</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Мед. шприц</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x20</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Аптечка</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Черника</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://gspics.org/images/2024/09/16/I0mLIu.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Большой рюкзак</p>
                </div>
            </div>
        </div>
    </div>
</div>`;
                break;
              // право (без конца)
                case 'wartune_components':
                        htmlContent = `
                            <div class="productModal__desc">
<div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> 24Ч</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('wartune_pvp')">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
    </svg>
</button>
<p class="_currentKit_1owtu_86">Компоненты</p><button class="_navBtn_1owtu_85" onclick="showContent('wartune_gift')">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119">
        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
    </svg>
</button></div></div><div class="bb">
                
                <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x250</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Трубы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x150</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Микросхемы</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус винтовки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус пистолет-пулемета</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Корпус полуавтомата</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x250</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Пружины</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x250</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Набор для шитья</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x250</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/rope.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Веревки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x250</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/gears.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Шестерни</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x250</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Металл лезвие</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x250</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Дорожные знаки</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x200</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Брезент</p>
                </div>
            </div>
        </div>`;
                        break;
         
                        // право конец
                        case 'wartune_gift':
                            htmlContent = `
                                <div class="productModal__desc">
    <div class="_info_1owtu_15"><div class="_commandWrapper_1owtu_30"><p class="_commandTitle_1owtu_50">Выбери кит из привилегии</p></div><div class="_cooldownWrapper_1owtu_31"><p class="_cooldownTitle_1owtu_51">Перезарядка</p><p class="_cooldown_1owtu_31"> РАЗ В ВАЙП</p></div><div class="_nav_1owtu_32"><button class="_navBtn_1owtu_85" onclick="showContent('wartune_components')">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="#C3D4E9" xmlns="http://www.w3.org/2000/svg" class="_arrow_1owtu_119 _left_1owtu_134">
            <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"></path>
        </svg>
    </button>
    <p class="_currentKit_1owtu_86">Дополнительный</p></div></div><div class="bb">
                    
                    <div class="bg1">
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/workbench3.png" alt="Дерево img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Верстак 3-го уровня</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/mining.quarry.png" alt="Металлический нагрудник img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Геологический карьер</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/surveycharge.png" alt="Килт из дорожных знаков img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Геологический заряд</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x5</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/autoturret.png" alt="Толстовка с капюшоном img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Турель</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x10</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png" alt="Штаны img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Гроб</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x1</p>
                </span><span class="fv fo"></span><img class="fw" src="https://pic.moscow.ovh/images/2022/07/23/ea48412ea9e6c5c530dca8a147c413e5.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Огненная кирка</p>
                </div>
            </div>


            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/black.raspberries.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Ежевика</p>
                </div>
            </div>
            <div class="fh bh fl fi" data-winelement="false"><span class="fn">
                    <p class="ft">x50</p>
                </span><span class="fv fo"></span><img class="fw" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png" alt="Ботинки img" style="width: 62px; height: 62px;"><span class="fu fo"></span>
                <div class="fx">
                    <p class="fm fy">Черника</p>
                </div>
            </div>




        </div>`;
                            break;
                   
            case 'wartunecommand':
    htmlContent = `
    <div class="_wrapper_1fid2_1">
    <p class="_title_1fid2_8">Команды</p>
    <div class="_list_1fid2_15">
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/trade</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Обмен между игроками.</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/chat</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Команда позволяет установить префикс, цвет префикса и ника.</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/sethome</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Установка точки телепортации домой.</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/tpr ник</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Телепортация к игроку</div>
        </div>
        <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/outpost</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Телепортация в мирный город. (Время телепортации ускоряется вместе с привилегией)</div>
        </div>
    <div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/bandit</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Телепортация в бандитский город. (Время телепортации ускоряется вместе с привилегией)</div>
        </div><div class="_item_1fid2_22">
            <p class="_itemTitle_1fid2_32">/rec</p>
            <div class="_helpWrapper_1fid2_39">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg" class="_icon_1fid2_51">
                    <path d="M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z" fill-opacity="0.3"></path>
                </svg>
            </div>
            <div class="tooltip">Открывает переработчик</div>
        </div></div>
</div>`;
    break;
            
            case 'wartunebonus':
    htmlContent = `
    <div class="productModal__desc">
        <div class="desc__content">
        <div class="content__info">
            <p class="title">Цвета и префикс</p>
            <p class="description"><b>/chat</b> - Управление чатом</p>
        </div>
        <font color="white"><span style="color: #730c1f">W</span><span style="color: #8a1224;">A</span><span style="color: #a11928;">R</span><span style="color: #b8212b;">T</span><span style="color: #d02a2d;">U</span><span style="color: #e7342e">N</span><span style="color: #ff3f2e;">E</span><span style="color: #ff412f;"> </span></font>
    </div><div class="desc__content">
        <div class="content__info">
            <p class="title">x10 рейт добычи ресурсов</p>

        </div>
    </div><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/0edb19fc233b2ad05b087b17ac0733be.png" class="icon-user-oplata">
        <div class="priv_discount">?</div>
        <div class="textContainer-oplata">
            <p class="title">3 доп. точки телепортации</p><span class="tooltiptext1">Вместо 3 точек дома будет <b>6</b></span>
        </div>
    </a><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/9865cf142009be41dc6f00637071b4fa.png" class="icon-user-oplata">

        <div class="textContainer-oplata">
            <p class="title">Неломаемые предметы</p>
        </div>
    </a><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/33ea64f7c017cc1cb465fddb57666633.png" class="icon-user-oplata">

        <div class="textContainer-oplata">
            <p class="title"> Доступ ко всем изучениям</p>
        </div>
    </a><a class="container-oplata"> <img alt="" src="https://pic.moscow.ovh/images/2022/07/23/f129136c32b35c245d69137c81a9e0d5.png" class="icon-user-oplata">

        <div class="content__info">
            <p class="title">Карманный переработчик</p>
            <p class="description"><b>/rec</b> - Открывает переработчик</p>
        </div>
    </a><a class="container-oplata"> <img alt="" src="https://gspics.org/images/2024/09/25/I0qn1T.png" class="icon-user-oplata">

        <div class="textContainer-oplata">
            <p class="title">Нет КД у спальников и кроватей</p>
        </div>
    </a><div class="desc__content">
        <div class="content__info">
            <p class="title">12 слотов в обмене</p>
            <p class="description">Команда /trade</p>
        </div>
    </div>
    </div>`;
    break;
        }

        contentDiv.innerHTML = htmlContent;
        contentDiv.style.display = 'block';
    }
// Кастом
const translateResource = {
    'RU': {
        "amountTitle": "Сумма",
        "amountPlaceholder": "Введите сумму",
        "amountMustBeGreatThen100rubels": "Мин. сумма пополнения 100₽",
        "createPaymentRequestError": "Ошибка при выполнении запроса на создание ссылки оплаты. Попробуйте позже или сообщите администратору",
        "cardpay": "Карты",
        "sbp": "СБП",
        "bonus": "Бонус при пополнении 30% Пополнения без комиссий.",
        "first": "от <b>100₽</b> - бонус <b>+10%</b> к сумме пополнения",
        "second": "от <b>500₽</b> - бонус <b>+20%</b> к сумме пополнения",
        "third": "от <b>1000₽</b> - бонус <b>+30%</b> к сумме пополнения",
        "note": "⚠️ Бонусы при пополнении скинами могут быть как больше так и меньше (Зависит от скинов)!",
        "skinsdonate": "Скинами",
        "tgpromo": "Промокоды можно найти только в нашем Telegram канале",
        "discount": "ЧЕРНАЯ ПЯТНИЦА СКИДКИ ДО 90% НА ВСЕ ТОВАРЫ",
        "discount2": "Если вы наблюдаете проблемы с пополнением баланса - обратитесь через Discord к администратору KirillRND в личные сообщения ",
        "discountlink": "ссылка на наш канал",
        "copy": "Копировать",
        "promocode_info": "Стартовый промокод для тебя",
        "copyyes": "Промокод скопирован!",
        "promo30": "Получи на баланс 30₽ в магазине",
        "info_link": "Информация"
    },
    'EN': {
        "amountTitle": "Amount",
        "amountPlaceholder": "Enter amount",
        "amountMustBeGreatThen100rubels": "Min. amount 100 rubels",
        "createPaymentRequestError": "An error occurred while executing the request to create a payment link. Please try again later or notify your administrator,",
        "cardpay": "Cards",
        "sbp": "SPB | RU",
        "bonus": "The deposit bonus is 30% of the deposit without commissions.",
        "first": "from <b>100₽</b> - bonus <b>+10%</b> to the deposit amount",
        "second": "from <b>500₽</b> - bonus <b>+20%</b> to the deposit amount",
        "third": "from <b>1000₽</b> - bonus <b>+30%</b> to the deposit amount",
        "note": "⚠️ Bonuses for top-ups with skins can be both higher and lower (depends on skins)!",
        "skinsdonate": "Skinback",
        "tgpromo": "Promo codes can only be found in our Telegram channel",
        "discount": "BLACK FRIDAY DISCOUNTS OF UP TO 90% ON ALL PRODUCTS",
        "discount2": "If you are experiencing problems with replenishing your balance, contact the KirillRND administrator via Discord in private messages ",
        "discountlink": "link to our channel",
        "copy": "Copy",
        "promocode_info": "The starting promo code for you",
        "copyyes": "The promo code has been copied!",
        "promo30": "Get 30₽ to your balance in the store",
        "info_link": "Info"
    },
    'UA': {
        "amountTitle": "Сума",
        "amountPlaceholder": "Введіть суму",
        "amountMustBeGreatThen100rubels": "Мін. сума 100 рублів",
        "createPaymentRequestError": "Під час виконання запиту на створення платіжного посилання сталася помилка. Повторіть спробу пізніше або повідомте свого адміністратора,",
        "cardpay": "Картi",
	    "sbp": "СБП | RU",
        "bonus": "Бонус при пополнении 30% Пополнения без комиссий.",
        "first": "від <b>100₽</b> - бонус <b>+10%</b> до суми поповнення",
        "second": "від <b>500₽</b> - бонус <b>+20%</b> до суми поповнення",
        "third": "від <b>1000₽</b> - бонус <b>+30%</b> до суми поповнення",
        "note": "⚠️ Бонуси при поповненні зі скинами можуть бути як більше, так і менше (залежить від скинів)!",
        "skinsdonate": "Скiнамi",
        "tgpromo": "Промокоды можно найти только в нашем Telegram канале",
        "discount": "ЧЕРНАЯ ПЯТНИЦА СКИДКИ ДО 90% НА ВСЕ ТОВАРЫ",
        "discount2": "Если вы наблюдаете проблемы с пополнением баланса - обратитесь через Discord к администратору KirillRND в личные сообщения ",
        "discountlink": "ссылка на наш канал",
        "copy": "Копировать",
        "promocode_info": "Стартовый промокод для тебя",
        "copyyes": "Промокод скопирован!",
        "promo30": "Получи на баланс 30₽ в магазине",
        "info_link": "Информация для хохла"
    }
}

const ppConfig = {
    apiDomain: 'https://paynow.dangerrust.ru'
}

let isPaymentLoading = false

const getLang = () => {
    const langCode = (window.localStorage.getItem('lang') ?? 'EN').toUpperCase()

    if (langCode !== 'RU' && langCode !== 'EN' ) {
        return 'EN'
    }

    return langCode
}

const topUp = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const lang = getLang()
    const t = translateResource[lang]

    const btn = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__accent');
    const method = document.querySelector('.customPayment_method__checked')
    const amount = document.querySelector('.customPayment_input')

    if(!btn || !method || !amount) return false

    if(method.getAttribute('data-method') === "skins") {
        window.location.href = `https://steamcommunity.com/tradeoffer/new/?partner=1563791307&token=pPln6B-z`
        return
    }

    if(isNaN(amount.value) || +amount.value < 1) {
        return
    }

    if(method.getAttribute('data-method') === "card" || method.getAttribute('data-method') === "sbp" || method.getAttribute('data-method') === "crypto") {
        window.location.href = `/api/v1/player.donate?amount=${amount.value}`
        return
    }

    if (isPaymentLoading) return

    const loader = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__btn.Button-module__accent .loaderWrapper')

    try {
        loader.classList.add('active')
        isPaymentLoading = true
        btn.classList.add('Button-module__btn__disabled')

        const raw = JSON.stringify({
            amount: +amount.value,
            steamId: window.getState().player.player.steamId
        });

        const response = await fetch(`${ppConfig.apiDomain}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'User-Agent': 'insomnia/10.1.0'
            },
            body: raw,
        })

        if(!response.ok || response.status !== 201) {
            window.addToast(true, t['createPaymentRequestError'])
            return
        }

        jsonData = await response.json()

        if(!jsonData) {
            window.addToast(true, t[jsonData.message] ? t[jsonData.message] : jsonData.message)
            return
        }

        if (jsonData) {
            window.location.href = jsonData.payload
        }
    } finally {
        isPaymentLoading = false
        btn.classList.remove('Button-module__btn__disabled')
        loader.classList.remove('active')
    }
}

const selectPayment = (e) => {
    const target = e.currentTarget

    const prevMethod = document.querySelector('.customPayment_method__checked')

    if(prevMethod) {
        prevMethod.classList.remove('customPayment_method__checked')
    }

    target.classList.add('customPayment_method__checked')

    const topUpBtn = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__btn.Button-module__accent')
    const amount = document.querySelector('.customPayment_input')
    const inputWrapper = document.querySelector('.customPayment_amount')
    const amountWrapper = document.querySelector('.customPayment_amount')

    amountWrapper.classList.remove('customPayment_amount__error')
    topUpBtn.classList.remove('active')
    inputWrapper.classList.remove('hidden')

    if (target.getAttribute("data-method") === "skins") {
        inputWrapper.classList.add('hidden')
        topUpBtn.classList.add('active')
    }

    if(+amount.value >= 1 && target.getAttribute("data-method") !== "skins") {
        topUpBtn.classList.add('active')
    }

    if(+amount.value < 1 && amount.value !== "") {
        amountWrapper.classList.add('customPayment_amount__error')
    }
}

const onChangeInput = (e) => {
    const prevMethod = document.querySelector('.customPayment_method__checked')
    const topUpBtn = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__btn.Button-module__accent')
    const amountWrapper = document.querySelector('.customPayment_amount')

    amountWrapper.classList.remove('customPayment_amount__error')
    topUpBtn.classList.remove('active')

    if(+e.target.value >= 1 && prevMethod) {
        topUpBtn.classList.add('active')
    }

    if(+e.target.value < 1 && e.target.value !== "") {
        amountWrapper.classList.add('customPayment_amount__error')
    }
}

const updateTopUpModal = () => {
    setTimeout(() => {
        const lang = getLang()
        const t = translateResource[lang]

        const form = document.querySelector('.PlayerBalance-module__modal .PlayerBalanceModal-module__form');

        if(!form) return false

        form.innerHTML = `
        <div class="customPayment_methods">
            <div class="customPayment_method customPayment_method__checked" data-method="card"><div class="payment-method__icon">RUB</div>
                <div class="customPayment_methodCheckWrapper">
                    <svg class="customPayment_methodCheckIcon" data-v-a781e0d0="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 6.75L3 8L6.75 11.75L13 5.5L11.75 4.25L6.75 9.25L4.25 6.75Z"></path></svg>
                </div>
                <svg class="customPayment_methodIcon" data-v-a781e0d0="" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 4.49984C1.33301 3.76346 1.92996 3.1665 2.66634 3.1665H10.6663C11.4027 3.1665 11.9997 3.76346 11.9997 4.49984V5.83317H13.333C14.0694 5.83317 14.6663 6.43012 14.6663 7.1665V12.4998C14.6663 13.2362 14.0694 13.8332 13.333 13.8332H5.33301C4.59663 13.8332 3.99967 13.2362 3.99967 12.4998V11.1665H2.66634C1.92996 11.1665 1.33301 10.5696 1.33301 9.83317V4.49984ZM5.33301 11.1665V12.4998H13.333V7.1665H11.9997V9.83317C11.9997 10.5696 11.4027 11.1665 10.6663 11.1665H5.33301ZM3.99967 6.49984C3.99967 6.13165 4.29815 5.83317 4.66634 5.83317H5.33301C5.70119 5.83317 5.99967 6.13165 5.99967 6.49984C5.99967 6.86802 5.70119 7.1665 5.33301 7.1665H4.66634C4.29815 7.1665 3.99967 6.86802 3.99967 6.49984Z"></path></svg>
                <span class="customPayment_methodName">${t.cardpay}</span>
            </div>
            <div class="customPayment_method" data-method="sbp"><div class="payment-method__icon">RUB</div>
                <div class="customPayment_methodCheckWrapper">
                    <svg class="customPayment_methodCheckIcon" data-v-a781e0d0="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 6.75L3 8L6.75 11.75L13 5.5L11.75 4.25L6.75 9.25L4.25 6.75Z"></path></svg>
                </div>
                <svg class="customPayment_methodIcon" data-v-a781e0d0="" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.78303 4.68713L8.79102 8.28699V6.56075L10.3198 5.62547L10.3206 5.62547L8.80032 4.69808L7.17969 1.78564L13.4379 5.62257L13.4486 5.62256L13.4433 5.62584L13.4492 5.62945L13.4373 5.62946L8.79142 8.47027L8.79155 8.52977L7.17969 7.52972V1.78564L8.78303 4.68713ZM2.55367 12.2862L2.55367 12.2872L2.55449 12.2857L7.17969 9.46011L7.18057 15.2128L7.17969 15.2144L7.18057 15.2139V15.2144L7.18099 15.2136L13.4296 11.3736L13.4393 11.3736L13.4344 11.3707L13.4393 11.3677L13.4296 11.3677L2.55176 4.7124L2.55367 12.284L2.55176 12.2874L2.55367 12.2862ZM4.1834 9.38466L5.62624 8.50252L4.1834 7.61903V9.38466ZM8.80725 12.299L7.2745 15.0446L8.79155 12.3022V10.4407L10.3188 11.3759L8.80725 12.299Z"></path></svg>
                <span class="customPayment_methodName">${t.sbp}</span>
            </div>
            <div class="customPayment_method" data-method="crypto"><div class="payment-method__icon">EUR, P2P</div>
                <div class="customPayment_methodCheckWrapper">
                    <svg class="customPayment_methodCheckIcon" data-v-a781e0d0="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 6.75L3 8L6.75 11.75L13 5.5L11.75 4.25L6.75 9.25L4.25 6.75Z"></path></svg>
                </div>
                <svg class="customPayment_methodIcon" data-v-a781e0d0="" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path d="M8.83301 10.1665C9.10914 10.1665 9.33301 9.94264 9.33301 9.6665C9.33301 9.39037 9.10914 9.1665 8.83301 9.1665H7.33301V10.1665H8.83301Z"></path><path d="M7.33301 6.8335H8.83301C9.10914 6.8335 9.33301 7.05736 9.33301 7.3335C9.33301 7.60963 9.10914 7.8335 8.83301 7.8335H7.33301V6.8335Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 8.50016C1.33301 4.81826 4.31777 1.8335 7.99967 1.8335C11.6815 1.8335 14.6663 4.81826 14.6663 8.50016C14.6663 12.182 11.6815 15.1668 7.99967 15.1668C4.31777 15.1668 1.33301 12.182 1.33301 8.50016ZM5.66634 5.50016C5.29815 5.50016 4.99967 5.79864 4.99967 6.16683C4.99967 6.53502 5.29815 6.8335 5.66634 6.8335H5.99967V10.1668H5.66634C5.29815 10.1668 4.99967 10.4653 4.99967 10.8335C4.99967 11.2017 5.29815 11.5002 5.66634 11.5002H7.33301V11.8335C7.33301 12.2017 7.63147 12.5002 7.99967 12.5002C8.36787 12.5002 8.66634 12.2017 8.66634 11.8335V11.5002H8.83301C9.84554 11.5002 10.6663 10.6794 10.6663 9.66683C10.6663 9.22363 10.5091 8.81716 10.2473 8.50016C10.5091 8.18316 10.6663 7.7767 10.6663 7.3335C10.6663 6.32098 9.84554 5.50016 8.83301 5.50016H8.66634V5.16683C8.66634 4.79864 8.36787 4.50016 7.99967 4.50016C7.63147 4.50016 7.33301 4.79864 7.33301 5.16683V5.50016H5.66634Z"></path></svg>
                <span class="customPayment_methodName">Cryptomus</span>
            </div>
            
            <div class="customPayment_method" data-method="skins">
                <div class="customPayment_methodCheckWrapper">
                    <svg class="customPayment_methodCheckIcon" data-v-a781e0d0="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 6.75L3 8L6.75 11.75L13 5.5L11.75 4.25L6.75 9.25L4.25 6.75Z"></path></svg>
                </div>
                <svg class="customPayment_methodIcon" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><path d="m363.929 0-12.346 12.346L340.036.799l-21.458 21.458 11.547 11.547-222.343 222.343L96.235 244.6l-21.458 21.458 11.863 11.863c-17.171 21.661-18.478 51.842-3.925 74.805L399.683 35.755 363.929 0zM304.934 330.282c27.516-27.516 29.126-71.268 4.845-100.695l129.522-129.523-30.506-30.506-293.393 293.396 30.506 30.506 16.191-16.191L259.625 512l84.679-84.679-57.279-79.13 17.909-17.909zm-35.931-6.986-18.666-25.788-3.561-4.919 5.696-5.696 15.814 15.814 21.458-21.458-15.814-15.814 14.228-14.228c12.546 17.432 10.985 41.949-4.683 57.617l-14.472 14.472z"/></svg>
                <span class="customPayment_methodName">${t.skinsdonate}</span>
            </div>
        </div>

        <div class="customPayment_amount">
        <label class="customPayment_label" for="sum">${t.amountTitle}</label>
        <div class="customPayment_inputWrapper">
            <input class="customPayment_input" type="number" id="sum" placeholder="${t.amountPlaceholder}">
            <span class="customPayment_currency">₽</span>
        </div>
        <span class="customPayment_inputError">${t['amountMustBeGreatThen100rubels']}</span>
    </div>
        `

        const payBtn = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__btn.Button-module__accent')

        payBtn.insertAdjacentHTML('beforeend', `<div class="loaderWrapper"><span class="loader"></span></div>`)

        const methods = document.querySelectorAll('.customPayment_method')

        methods.forEach(method => {
            method.addEventListener('click', selectPayment)
        })

        const input = document.querySelector('.customPayment_input')

        input.addEventListener('input', onChangeInput)

        const topUpBtn = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__btn.Button-module__accent')

        topUpBtn.addEventListener('click', topUp)
    }, 0)
}

// Промокод 
/*
document.addEventListener("DOMContentLoaded", function() {
    // Создаем контейнер для промокода
    const promoCodeContainer = document.createElement('div');
    promoCodeContainer.id = 'promoCodeContainer';
    promoCodeContainer.style.position = 'fixed';
    promoCodeContainer.style.bottom = '20px';
    promoCodeContainer.style.right = '20px';
    promoCodeContainer.style.backgroundColor = '#2e3740';
    promoCodeContainer.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 2px 10px';
    promoCodeContainer.style.borderRadius = '10px';
    promoCodeContainer.style.padding = '20px';
    promoCodeContainer.style.zIndex = '1000';
    promoCodeContainer.style.display = 'flex';
    promoCodeContainer.style.flexDirection = 'column';

    // Контент контейнера на русском
      const lang = translateResource[getLang()]; // Получаем текст на текущем языке
    promoCodeContainer.innerHTML = `
    <button style="cursor: pointer; align-self: flex-end;" onclick="this.parentElement.style.display='none'">×</button>\
    <p>${lang.promocode_info}</p>\
    <p>${lang.promo30}</p>\
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: rgb(255 255 255 / 10%); border-radius: 10px; will-change: transform; backface-visibility: hidden; margin: 10px; font-weight: 600;">\
        <p id="promo" style="margin-right: 10px; color: #fff;">WARTUNE-START</p>\
        <button id="copyButton" style="background: #2E3740; box-shadow: inset 0 0 51pt 0 rgba(255, 255, 255, .05); backdrop-filter: blur(48px); color: #ffffff; padding: 6px 10px; transition: all 0.2s; border-radius: 10px; cursor: pointer;">${lang.copy}</button>\
    </div>\
    <div class="d-flex promos mt-4" style="display: none;">\
        <p>${lang.copyyes}</p>\
    </div>\
`;


    // Добавляем контейнер в body
    document.body.appendChild(promoCodeContainer);

    // Функция для отображения уведомления
    function showToast(message, isError = false) {
        const toastWrapper = document.createElement('div');
        toastWrapper.className = 'Toasts-module__wrapper';
        
        const toast = document.createElement('div');
        toast.className = `Toast-module__toast ${isError ? 'Toast-module__error' : 'Toast-module__success'}`;
        
        const svgIcon = isError ? `
            <svg class="Toast-module__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#ff365a" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"></path>
            </svg>
        ` : `
            <svg class="Toast-module__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#49d663" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
            </svg>
        `;
        
        const messageWrapper = `
            <div class="Toast-module__messageWrapper">
                <p class="Toast-module__title">${isError ? lang.close : lang.promocode_info}</p>
                <span class="Toast-module__message">${isError ? 'Недопустимый промокод' : message}</span>
            </div>
        `;
        
        toast.innerHTML = `${svgIcon}${messageWrapper}`;
        toastWrapper.appendChild(toast);
        document.body.appendChild(toastWrapper);

        // Удаление уведомления через 3 секунды
        setTimeout(() => {
            document.body.removeChild(toastWrapper);
        }, 3000);
    }

    // Обработчик для кнопки "Скопировать"
    document.getElementById('copyButton').addEventListener('click', function() {
        const promoText = document.getElementById('promo').innerText;
        navigator.clipboard.writeText(promoText).then(() => {
            promoCodeContainer.querySelector('div').style.display = 'none'; // Скрыть контейнер с промокодом и кнопкой
            promoCodeContainer.querySelector('.promos').style.display = 'flex'; // Показать сообщение о копировании
            showToast('Промокод успешно скопирован!'); // Показать успех
        }).catch(err => {
            console.error('Ошибка при копировании текста: ', err);
            showToast('Ошибка при копировании текста.', true); // Показать ошибку
        });
    });
});

*/
