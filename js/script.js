"use strict";
window.addEventListener('DOMContentLoaded', () => {
    // tabs

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    // Используем делегирование событий

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // timer

    const deadline = '2020-10-30';
    //разница между дедлайном и тек.временем

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
        // разделить милисек на кол-во милисек в одном дне
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / (1000 * 60) % 60)),
        seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // установка нолика впереди

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // установка таймера на стр

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

        // функция, обновл таймер каждую сек

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // modal

    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // модальное окно откроется через n сек

    const modalTimerId = setTimeout(openModal, 3000);

    // модальное окно откроется, когда долистаем до низа страницы

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
            clearInterval(modalTimerId);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});