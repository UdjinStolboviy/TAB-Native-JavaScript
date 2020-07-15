//window.addEventListener('load'); - запускает скрипт  когда  все  загрузиться  в браузере

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function start(q, w, o) {
        let tab = document.querySelectorAll(q),
            info = document.querySelector(w),
            tabContent = document.querySelectorAll(o);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) { // цыыкел скривает  контент  свзязан с табами
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) { // функция проверяет  на  наличее класа hide  если  он есть  удалят  и в ставляет другой 
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) { // цыкл и функция  делает  ставнение  на даб который  мы  кликакем  должно добавляться  класс .shou
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    start('.info-header-tab', '.info-header', '.info-tabcontent');


});