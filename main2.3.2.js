const event = new CustomEvent("setCustomConfig");
  
window.currency = '₽';
window.zeroToFree = true;
window.hideServerSelector = false; // Добавлен `window.`
window.sidebarStoreToRight = true; // Добавлен `window.`
  
window.dispatchEvent(event);
// Функция для расчета бонуса
// Таблица бонусных ставок
const bonusRates = [
    { amount: 500, percent: 0.30 },   // 30% для суммы до 500
    { amount: 1000, percent: 0.35 }, // 35% для суммы до 1000
    { amount: 2500, percent: 0.40 },  // 40% для суммы до 2500
    { amount: 5000, percent: 0.45 }, // 45% для суммы до 5000
    { amount: Infinity, percent: 0.50 }// 50% для всех остальных сумм
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
function animateNumber(start, end, element, duration = 500, format = (value) => `${value} ₽`) {
    const startTime = performance.now();
    const difference = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Используем easeOutQuad для более плавной анимации
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        
        const current = Math.round(start + difference * easeProgress);
        element.textContent = format(current);
        
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
        // Анимируем бонус с сохранением знака плюс
        animateNumber(currentBonus, bonus, bonusValueElement, 500, (value) => `+${value} ₽`);
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
    if (!window.componentsManager) {
        setTimeout(paynowMain, 100); // Ждем инициализации componentsManager
        return;
    }

    // Добавляем слушатель для модального окна пополнения
    window.componentsManager.addListener('BALANCE_MODAL', 'DID_UPDATE', updateTopUpModal);
}

function main() {
    // Инициализируем все необходимые события
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));
    window.dispatchEvent(new CustomEvent("initToastManager"));

    // Проверяем готовность приложения и вызываем paynowMain
    if (window.isAppReady) {
        paynowMain();
    } else {
        window.addEventListener('appReady', () => {
            paynowMain();
        });
    }

    // Добавляем слушатели для компонентов
    if (window.componentsManager) {
        window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
            const { player } = window.getState().player;
            if (!player) {
                const loginLink = `<img src="https://gspics.org/images/2024/02/23/0bZN5I.png" alt="Авторизация" style="width: 20px; height: 20px; margin-right: 5px;">Авторизация`;
                const profileLink = document.querySelector('.PlayerMenu-module__loginLink[href="/api/v1/player.login?login"]');
                if (profileLink) {
                    profileLink.innerHTML = loginLink;
                }
                return;
            }

            const userAvatar = `
                <a href="/profile" style="text-decoration: none;" class="user-avatar-link">
                    <div class="user-avatar-container" style="border-radius: 50%; width: 38px; height: 38px">
                        <img class="user-avatar-image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" src="${player.avatar}" alt="User Avatar" />
                    </div>
                </a>
            `;

            const userName = player.username;
            const profileName = `<a href="/profile" style="text-decoration: none;"><div class="ProfileNav-module__name">${userName}</div></a>`;

            const profileLink = document.querySelector('.PlayerMenu-module__profileLink');
            if (profileLink) {
                profileLink.insertAdjacentHTML('beforebegin', userAvatar);
                profileLink.insertAdjacentHTML('beforebegin', profileName);
            }
        });

        // Добавляем слушатель для футера с повторными попытками
        function addFooter() {
            const footerContainer = document.querySelector('.boxFooter');
            if (!footerContainer || document.querySelector('footer[data-v-5b1745d7]')) {
                return;
            }

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
                    <p class="ShopFooter-module__text_new">MISUTECH LIMITED LTD SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG</p>
                </div>
            `;

            footerContainer.appendChild(footer);
        }

        // Несколько попыток добавить футер
        window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', addFooter);
        window.componentsManager.addListener('SHOP_PAGE', 'DID_UPDATE', addFooter);
        
        // Дополнительные попытки через таймауты
        setTimeout(addFooter, 1000);
        setTimeout(addFooter, 2000);
        setTimeout(addFooter, 5000);

        window.componentsManager.load();
    }
}

function injectScriptAndUse() {
    if (window.customScriptLoaded) {
        main();
        return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/nnetadon/custom391/index-v2.1.4.js";

    script.onload = function() {
        window.customScriptLoaded = true;
            main();
    };

    document.head.appendChild(script);
}

// Запускаем инициализацию
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectScriptAndUse);
} else {
    injectScriptAndUse();
}

// Также добавляем прямую проверку после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addFooter, 1000);
    setTimeout(addFooter, 2000);
    setTimeout(addFooter, 5000);
});

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
