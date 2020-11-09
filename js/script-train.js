"use strict";

window.addEventListener('DOMContentLoaded', () => {

    //tabs

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsParent = document.querySelector('.tabheader__items');
    const tabsContent = document.querySelectorAll('.tabcontent');

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

    tabsParent.addEventListener('click', (evt) => {
        if (evt.target && evt.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (evt.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // timer

    // let id = setTimeout(function log() {
    //     console.log('Hello');
    //     let id = setTimeout(log, 1000);
    // }, 1000);

    const deadline = '2020-11-30';

    // функция, которая будет определять разницу между временем. между тем, что установлено у пользователя и дедлайном
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - new Date();
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / (1000 * 60)) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        }
    }

    // функция для подстановки нолика
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return num = `0${num}`;
        } else {
            return num;
        }
    }

    // функция, которая будет устанавливать таймер, получать эл-ты и что-то с ними делать
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        // запускать функцию updateClock каждую секунду
        const timerID = setInterval(updateClock, 1000);

        // чтобы работала без миганий
        updateClock();

        // функция, которая будет заниматься обновлением таймера
        function updateClock() {
            // расчёт времени, который остался на данный момент
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerID);
            }
        }
    }

    setClock('.timer', deadline);

    // modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
 
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

   modal.addEventListener('click', (e) => {
       if (e.target === modal || e.target.getAttribute('data-close') == "") {
           closeModal();
       }
   });

   document.addEventListener('keydown', (e) => {
       if (e.code === "Escape" && modal.classList.contains('show')) { 
           closeModal();
       }
   });

   const modalTimerId = setTimeout(openModal, 300000);
   // Изменил значение, чтобы не отвлекало

   function showModalByScroll() {
       if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
           openModal();
           window.removeEventListener('scroll', showModalByScroll);
       }
   }
   window.addEventListener('scroll', showModalByScroll);

    // карточки

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parentSelector = document.querySelector(parentSelector);
            this.transfer = 27.32;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = Math.floor(this.transfer * this.price);
        }

        renderCard() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;

            this.parentSelector.append(element);
        }
    }

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    'menu__item'
    ).renderCard();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    3,
    '.menu .container',
    'menu__item'
    ).renderCard();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    20,
    '.menu .container',
    'menu__item'
    ).renderCard();

// forms

const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/forms/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('server.php', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(object)
            }).then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            })
        });
    }

function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        // closeModal();
    }, 4000);
}

// slider

const slides = document.querySelectorAll('.offer__slide');
const btnPrev = document.querySelector('.offer__slider-prev');
const btnNext = document.querySelector('.offer__slider-next');
const current = document.querySelector('#current');
const total = document.querySelector('#total');
let slideIndex = 1;

showSlide(slideIndex);

if (slides.length < 10) {
    total.textContent = `0${slides.length}`
}

function showSlide(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => {
        slide.classList.add('hide');
        slide.classList.remove('show');
    });

    slides[slideIndex - 1].classList.remove('hide');
    slides[slideIndex - 1].classList.add('show');

    if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`
    }
}

function plusIndex(n) {
    showSlide(slideIndex += n);
}

btnNext.addEventListener('click', () => {
    plusIndex(1)
});

btnPrev.addEventListener('click', () => {
    plusIndex(-1)
});

});