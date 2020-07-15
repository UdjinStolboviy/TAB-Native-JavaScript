# TAB-Native-JavaScript

//window.addEventListener('load'); - запускает скрипт  когда  все  загрузиться  в браузере

window.addEventListener('DOMContentLoaded', function () { // Функция  запускает скрипт когда  загрузиться html страничка 
    'use strict';

    function start(q, w, o) {
        let tab = document.querySelectorAll(q), // идем  до  задоного  класа  или тега  на  страничке 
            info = document.querySelector(w),
            tabContent = document.querySelectorAll(o);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) { // цыыкел скривает  контент  свзязан с табами
                tabContent[i].classList.remove('show'); // удаляем  клас  для  того  чтоб  скрыть  информацию 
                tabContent[i].classList.add('hide'); // добывляем  клас для того чтобы показать  информацию 
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
                        break; // завершает цыкл 
                    }
                }
            }
        });
    }
    start('.info-header-tab', '.info-header', '.info-tabcontent'); // Сюда подставляете  класы  табов  и контейнеры  которые  хотите  чтоб  свзязовались  с табами . 


});
