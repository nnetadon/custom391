const event = new CustomEvent("setCustomConfig");
  
window.currency = '₽';
window.zeroToFree = true;
window.hideServerSelector = false; // Добавлен `window.`
window.sidebarStoreToRight = true; // Добавлен `window.`
  
window.dispatchEvent(event);
// Функция для расчета бонуса
// Таблица бонусных ставок
const bonusRates = [
    { amount: 500, percent: 0.3 },   // 30% для суммы до 500
    { amount: 1000, percent: 0.35 }, // 35% для суммы до 1000
    { amount: 2500, percent: 0.4 },  // 40% для суммы до 2500
    { amount: 5000, percent: 0.45 }, // 45% для суммы до 5000
    { amount: Infinity, percent: 0.5 }// 50% для всех остальных сумм
];

function getBonusRate(amount) {
    for (const rate of bonusRates) {
        if (amount <= rate.amount) {
            return rate.percent;
        }
    }
    return bonusRates[bonusRates.length - 1].percent;
}

function calculateBonus(amount) {
    const rate = getBonusRate(amount);
    return Math.floor(amount * rate);
}

// Функция анимированного подсчета
function animateNumber(start, end, element, duration = 500) {
    const startTime = performance.now();
    const difference = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Используем easeOutQuad для более плавной анимации
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        
        const current = Math.round(start + difference * easeProgress);
        element.textContent = `${current} ₽`;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Обновляем updateBonus с анимацией
function updateBonus(amount) {
    const bonusRate = getBonusRate(amount);
    const bonus = Math.round(amount * bonusRate);
    
    const bonusAmountElement = document.querySelector('.bonus-amount');
    const bonusValueElement = document.querySelector('.bonus-value');
    
    if (bonusAmountElement && bonusValueElement) {
        const currentAmount = parseInt(bonusAmountElement.textContent) || 0;
        const currentBonus = parseInt(bonusValueElement.textContent) || 0;
        
        // Анимируем основную сумму
        animateNumber(currentAmount, amount, bonusAmountElement);
        // Анимируем бонус
        animateNumber(currentBonus, bonus, bonusValueElement);
        bonusValueElement.textContent = `+${bonus} ₽`;
    }
    
    return bonus;
}

// Стили для кнопок бонусов
const bonusStyles = `
<style>
.bonus-btn {
    padding: 4px;
    border-radius: 8px;
    background: rgb(255 255 255 / 10%);
    color: white;
    cursor: pointer;
}
.bonus-btn:hover {
    opacity: 0.5;
}
.bonus-btn:active {
    transform: scale(0.98);
}
.bonus-btn.active {
    background: rgba(255, 184, 0, 0.2);
    border-color: #FFB800;
}
</style>
`;
document.head.insertAdjacentHTML('beforeend', bonusStyles);

// Функция для установки суммы при клике на кнопку
function setAmount(amount) {
    const input = document.querySelector('.customPayment_input');
    if (input) {
        input.value = amount;
        const event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        input.dispatchEvent(event);
    }
}
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
                <span data-v-5b1745d7=""> 2024 WARTUNE</span>
                <span data-v-5b1745d7="" class="inline-block lg:hidden"> · </span>
                <span data-v-5b1745d7="" class="inline-block lg:block mt-2">ALL RIGHTS RESERVED.</span>
                <span data-v-5b1745d7="" class="block mt-2 text-xs text-neutral-400 font-thin">SERVED BY #5</span>
            </div>
            <div data-v-5b1745d7="" class="hidden lg:block w-px bg-white h-12 mx-12"></div>
            <div data-v-5b1745d7="">
                <p data-v-5b1745d7="" class="hidden lg:block font-bold text-sm">LINKS</p>
                <div data-v-5b1745d7="" class="mt-3 flex justify-center flex-wrap gap-10 gap-y-5 text-xs">
                    <a data-v-5b1745d7="" href="/profile/">Активировать промокод</a>
                    <a data-v-5b1745d7="" href="/page/ban">Банлист</a>
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
            <a class="tabs__promo_code__telegram" target="_blank" href="https://t.me/wartunerust" rel="noreferrer"><div class="tabs__promo_code__telegram__title"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM13.6277 8.08328C12.7389 7.30557 11.2616 7.30557 10.3728 8.08328C10.0611 8.35604 9.58723 8.32445 9.31447 8.01272C9.04171 7.701 9.0733 7.22717 9.38503 6.95441C10.8394 5.68186 13.1611 5.68186 14.6154 6.95441C16.1285 8.27835 16.1285 10.4717 14.6154 11.7956C14.3588 12.0202 14.0761 12.2041 13.778 12.3484C13.1018 12.6756 12.7502 13.1222 12.7502 13.5V14.25C12.7502 14.6642 12.4144 15 12.0002 15C11.586 15 11.2502 14.6642 11.2502 14.25V13.5C11.2502 12.221 12.3095 11.3926 13.1246 10.9982C13.3073 10.9098 13.4765 10.799 13.6277 10.6667C14.4577 9.9404 14.4577 8.80959 13.6277 8.08328ZM12 18C12.4142 18 12.75 17.6642 12.75 17.25C12.75 16.8358 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.8358 11.25 17.25C11.25 17.6642 11.5858 18 12 18Z"></path></svg>${lang.tgpromo}</div><div class="tabs__promo_code__telegram__body"><img src="https://gspics.org/images/2024/10/12/IIRpVL.jpg" alt="Dream Rust Avatar"><div class="tabs__promo_code__telegram__body__info"><h4>WARTUNE RUST в Telegram</h4><p>t.me</p></div></div></a>`;
        
        profileSectionWrapper.insertAdjacentHTML('beforeend', newContentHTML);
    }
}, 1000); // Проверка раз в 1 секунду



/* Виджет пополнение 10% + контакт админа */
const eventEndDate = new Date('2025-01-11T23:59:59'); // Конец события

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
        "discount": "Рождественские скидки!",
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
        "discount": "Christmas discounts",
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
        "discount": "Christmas discounts",
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

    if(isNaN(amount.value) || +amount.value < 100) {
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

    if(+amount.value >= 100 && target.getAttribute("data-method") !== "skins") {
        topUpBtn.classList.add('active')
    }

    if(+amount.value < 100 && amount.value !== "") {
        amountWrapper.classList.add('customPayment_amount__error')
    }
}

const onChangeInput = (e) => {
    const prevMethod = document.querySelector('.customPayment_method__checked')
    const topUpBtn = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__btn.Button-module__accent')
    const amountWrapper = document.querySelector('.customPayment_amount')

    amountWrapper.classList.remove('customPayment_amount__error')
    topUpBtn.classList.remove('active')

    if(+e.target.value >= 100 && prevMethod) {
        topUpBtn.classList.add('active')
    }

    if((+e.target.value < 100 && e.target.value !== "") || isNaN(e.target.value)) {
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
                <svg class="customPayment_methodIcon" data-v-a781e0d0="" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.78301 4.68713L8.79102 8.28699V6.56075L10.3198 5.62547L10.3206 5.62547L8.80032 4.69808L7.17969 1.78564L13.4379 5.62257L13.4486 5.62256L13.4433 5.62584L13.4492 5.62945L13.4373 5.62946L8.79142 8.47027L8.79155 8.52977L7.17969 7.52972V1.78564L8.78303 4.68713ZM2.55367 12.2862L2.55367 12.2872L2.55449 12.2857L7.17969 9.46011L7.18057 15.2128L7.17969 15.2144L7.18057 15.2139V15.2144L7.18099 15.2136L13.4296 11.3736L13.4393 11.3736L13.4344 11.3707L13.4393 11.3677L13.4296 11.3677L2.55176 4.7124L2.55367 12.284L2.55176 12.2874L2.55367 12.2862ZM4.1834 9.38466L5.62624 8.50252L4.1834 7.61903V9.38466ZM8.80725 12.299L7.2745 15.0446L8.79155 12.3022V10.4407L10.3188 11.3759L8.80725 12.299Z"></path></svg>
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
            </div>
                <div class="bonus-selector" style="margin: 15px 0;">
                    <div style="margin-bottom: 10px; display: flex; align-items: center;">
                        <svg style="width: 20px; height: 20px; margin-right: 5px;" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        Бонус к депозиту
                    </div>
                    <div style="display: flex; gap: 8px; margin-bottom: 10px;">
                        <button onclick="setAmount(500)" class="bonus-btn">
                            <span style="display: block; color: #FFB800; font-size: 14px;">+30%</span>
                            <span style="display: block; margin-top: 4px;">500 ₽</span>
                        </button>
                        <button onclick="setAmount(1000)" class="bonus-btn">
                            <span style="display: block; color: #FFB800; font-size: 14px;">+35%</span>
                            <span style="display: block; margin-top: 4px;">1000 ₽</span>
                        </button>
                        <button onclick="setAmount(2500)" class="bonus-btn">
                            <span style="display: block; color: #FFB800; font-size: 14px;">+40%</span>
                            <span style="display: block; margin-top: 4px;">2500 ₽</span>
                        </button>
                        <button onclick="setAmount(5000)" class="bonus-btn">
                            <span style="display: block; color: #FFB800; font-size: 14px;">+45%</span>
                            <span style="display: block; margin-top: 4px;">5000 ₽</span>
                        </button>
                        <button onclick="setAmount(10000)" class="bonus-btn">
                            <span style="display: block; color: #FFB800; font-size: 14px;">+50%</span>
                            <span style="display: block; margin-top: 4px;">10000 ₽</span>
                        </button>
                    </div>
                </div>
                <div class="pay-start__bonus-finish"
                <div class="pay-start__bonus-finish" style="display: flex;width: 100%;margin-top: -10px;padding: 15px;background: linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(https://gspics.org/images/2025/01/14/IKB9Bi.webp);background-size: cover;background-position: center;background-repeat: no-repeat;background-color: rgb(255 184 0 / 10%);border-radius: 8px;flex-direction: column;height: 80px;">
            <span style="display: block;color: var(--default-color);margin-bottom: 5px;text-align: justify;">С бонусом к зачислению:</span>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="bonus-amount" style="font-size: 18px; font-weight: bold;">0 ₽</span>
                <div class="bonus-value" style="color: var(--default-color);">+0 ₽</div>
            </div>
        </div>
        `

        const payBtn = document.querySelector('.PlayerBalanceModal-module__footer .Button-module__btn.Button-module__accent')

        payBtn.insertAdjacentHTML('beforeend', `<div class="loaderWrapper"><span class="loader"></span></div>`)

        const methods = document.querySelectorAll('.customPayment_method')

        methods.forEach(method => {
            method.addEventListener('click', selectPayment)
        })

        const input = document.querySelector('.customPayment_input')

        input.addEventListener('input', (e) => {
            const amount = parseInt(e.target.value) || 0;
            const bonus = updateBonus(amount);
            
            const bonusAmount = document.querySelector('.bonus-amount');
            const bonusValue = document.querySelector('.bonus-value');
            const bonusButtons = document.querySelectorAll('.bonus-btn');
            
            if (bonusAmount) bonusAmount.textContent = `${amount} ₽`;
            if (bonusValue) bonusValue.textContent = `+${bonus} ₽`;
            // Подсвечиваем активную кнопку
            
        });
        input.addEventListener('input', onChangeInput);

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
