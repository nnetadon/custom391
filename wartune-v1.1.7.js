function checkDomain() {
  const currentDomain = window.location.hostname; // Получаем текущий домен
  const targetDomain = "wartunerust.ru"; // Целевой домен для проверки

  if (currentDomain !== targetDomain) {
    window.location.href = `https://${targetDomain}`; // Редирект на целевой домен
  }
}

checkDomain(); // Вызываем функцию сразу после загрузки страницы

const event = new CustomEvent("setCustomConfig");

window.currency = '₽';
window.defaultPaymentAmount = 10;
window.zeroToFree = true;
hideServerSelector = true;
sidebarStoreToRight = true;

window.dispatchEvent(event);

/* БОНУС - ДИСКОРД */

/* profile */
function main() {
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        const { player } = window.getState().player;

        if (!player) return;

const userAvatar = `
    <a href="/profile" style="text-decoration: none;" class="user-avatar-link">
        <div class="user-avatar-container" style="border-radius: 50%; border: 1px dashed var(--accent-color-800); width: 38px; height: 38px">
            <img class="user-avatar-image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" src="${player.avatar}"></img>
        </div>
    </a>
`;


        const userName = player.username; // Используем поле username
        const profileName = `<a href="/profile" style="text-decoration: none;"><div class="ProfileNav-module__name">${userName}</div></a>`;

        const profileLink = document.querySelector('.PlayerMenu-module__profileLink');

        profileLink.insertAdjacentHTML('beforebegin', userAvatar);
        profileLink.insertAdjacentHTML('beforebegin', profileName);
    });

    window.componentsManager.load();
}

if (window.isAppReady) {
    main();
} else {
    window.addEventListener('appReady', () => {
        main();
    });
}
/* DISCORD */

const profileSection = document.querySelector('.ProfileContent');

const interval = setInterval(() => {
    const profileSection = document.querySelector('.ProfileContent-module__wrapper');
    if (profileSection) {
        clearInterval(interval); // Останавливаем проверку, если элемент найден
        const newContentHTML = `
            <div class="animated">
                <div class="xbox xbox_vk-widget" id="vk_groups"></div>
                <div class="animated">
                    <div class="xbox xbox_vk-member-reward">
                        <div class="xbox__body">
                            <div style="text-align: center;">Хочешь еженедельно&nbsp;</div>
                            <div style="text-align: center;">получать 30 <u>рублей?</u></div>
                            <div style="text-align: center;">(Бустерам 80р.)</div>
                            <div style="text-align: center;">
                                Вступай в <a href="https://discord.com/invite/grandrust" target="_blank" rel="noopener noreferrer">наш Discord!</a><br>
                            </div>
                            <div class="xbox__discord" style="position: relative; width: calc(100% + 39px); left: -19px; bottom: -21px;">
                                <a class="checkBalance" href="https://discord.com/oauth2/authorize?client_id=1264067224109580299&response_type=code&redirect_uri=https%3A%2F%2Fwartunerust.ru&scope=identify">Получить бонус</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        
        profileSection.insertAdjacentHTML('beforeend', newContentHTML);
    }
}, 1000); // Проверка раз в 1 секунду

/* Пополнение */
const targetNode = document.body; // Или другой родитель, в котором может появиться элемент

const config = { childList: true, subtree: true };

const addCustomContent = () => {
    const modalFooter = document.querySelector('.PlayerBalanceModal-module__footer');
    
    if (modalFooter) {
        const newCode = `
        <div class="_navbar__input__container_17ko5_100">
            <div class="_navbar__input__label_17ko5_109">Скинами из Steam 
                <a class="steam_faq" href="/page/faq">FAQ</a>
            </div>
            <a class="full" href="https://steamcommunity.com/tradeoffer/new/?partner=1563791307&token=pPln6B-z" target="_blank" rel="noopener noreferrer">
                <button class="button full button-primary">Пополнить</button>
            </a>
        </div>`;

        // Проверяем, добавился ли уже контент, чтобы не добавлять его повторно
        if (!modalFooter.previousElementSibling?.classList.contains('_navbar__input__container_17ko5_100')) {
            modalFooter.insertAdjacentHTML('beforebegin', newCode);
        }
    }
};

const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            addCustomContent();
        }
    }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

/* Виджет пополнение 10% + контакт админа */

const headerInterval = setInterval(() => {  // Переименован на headerInterval
    const headerContainer = document.querySelector('.container.headerContainer'); // Измените селектор на нужный вам

    if (headerContainer) {
        clearInterval(headerInterval); // Останавливаем проверку, если элемент найден
        
        const newContentHTML = `<div class="notice-container">
                <span class="notice-icon"><i class="fa--xf far fa-info" aria-hidden="true"></i></span>
                <div class="notice-content">
                    <p align="center"><big><big>В магазине действует бонус от 10% при пополнении! Скидка дня <red7>10%</red7></big></big></p>
                    <p align="center">Если вы наблюдаете проблемы с пополнением баланса - обратитесь через Discord к администратору KirillRND в личные сообщения <a href="https://discord.gg/EpDjswKYHW"><red7>ссылка на наш канал</red7>
</a></p>
                </div>
            </div>`;
        
        headerContainer.insertAdjacentHTML('beforeend', newContentHTML);
    }
}, 1000); // Проверка раз в 1 секунду
            
            
            
  /* промокод */
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

    // Контент контейнера
    promoCodeContainer.innerHTML = `
        <button style="cursor: pointer; align-self: flex-end;" onclick="this.parentElement.style.display='none'">×</button>
        <p>Стартовый промокод для тебя!</p>
        <p>Получи на баланс <span>30₽</span> в магазине</p>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: rgb(255 255 255 / 10%); border-radius: 10px; will-change: transform; backface-visibility: hidden; margin: 10px; font-weight: 600;">
            <p id="promo" style="margin-right: 10px; color: #fff;">WARTUNE-START</p>
            <button id="copyButton" style="background: #2E3740; box-shadow: inset 0 0 51pt 0 rgba(255, 255, 255, .05); backdrop-filter: blur(48px); color: #ffffff; padding: 6px 10px; transition: all 0.2s; border-radius: 10px; cursor: pointer;">Скопировать</button>
        </div>
        <div class="d-flex promos mt-4" style="display: none;">
            <p>Промокод скопирован!</p>
        </div>
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
                <p class="Toast-module__title">${isError ? 'Ошибка' : 'Успешно'}</p>
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
            document.querySelector('.promos').style.display = 'flex'; // Показать сообщение о копировании
            showToast('Промокод успешно скопирован!'); // Показать успех
        }).catch(err => {
            console.error('Ошибка при копировании текста: ', err);
            showToast('Ошибка при копировании текста.', true); // Показать ошибку
        });
    });
});
