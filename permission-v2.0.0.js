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

