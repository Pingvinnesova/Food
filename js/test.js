// function printNumbers(from, to) {
//     let current = from;
//     go();
//     const intervalId = setInterval(go, 1000);

//     function go() {
//         if (current == to) {
//             clearInterval(intervalId);
//         }
//         console.log(current);
//         current++;
//     }
// }

// function printNumbers(from, to) {
//     let current = from;
//     console.log(current);
//     current++;
//     setTimeout(go, 1000);
//     function go() {
//         console.log(current);
//         current++;
//         if (current <= to) {
//             setTimeout(go, 1000);
//         }
//     }
// }

// printNumbers(30, 50);

// const now = new Date();

// now.setHours(16);
// console.log(now);

// let start = new Date(); // текущ дата

// for (var i = 0; i < 10000; i++) {
//     let some = i ** 3;
// }

// let end = new Date;

// console.log(`Циксл отработал за ${end - start} миллисекунд`);

// let start = Date.now();
// console.log(start);

// for (var i = 0; i < 10000; i++) {
//     let some = i ** 3;
// }

// let end = Date.now();
// console.log(`Циксл отработал за ${end - start} миллисекунд`);

// let now = new Date('2020-05-03');
// console.log(now.getTime());

// let date = new Date('2012-01-20T03:12');
// let date = new Date(Date.parse('2012-01-20T03:12'));
// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

// function getWeekDay(date) {
//     let day = date.getDay();
//     let dayName;
//     switch(day) {
//         case 0:
//             dayName = 'ВС';
//             break;
//         case 1:
//             dayName = 'ПН';
//             break;
//         case 2:
//             dayName = 'ВТ';
//             break;
//         case 3:
//             dayName = 'СР';
//             break;
//         case 4:
//             dayName = 'ЧТ';
//             break;
//         case 5:
//             dayName = 'ПТ';
//             break;
//         case 6:
//             dayName = 'СБ';
//             break;
//     }
//     return dayName;
// }

// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[date.getDay()];
// }

// let date = new Date(2012, 0, 3);
// console.log( getWeekDay(date) );

// function getLocalDay(date) {
//     let i = date.getDay();
//     if (i == 0) {
//         i = 7;
//     }
//     return i;
// }

// let date = new Date(2012, 0, 3);
// console.log( getLocalDay(date) );

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) );

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));

// function getSecondsToday() {
//     let date = new Date();
//     return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }

// console.log(getSecondsToday());

// function getSecondsToTomorrow() {
//     let now = new Date();
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//     let diff = tomorrow - now;
//     return Math.round(diff / 1000);
// }

// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//     let diff = new Date() - date;

//     if (diff < 1000) {
//         return 'прямо сейчас';
//     }

//     let sec = Math.floor(diff / 1000);

//     if (sec < 60) {
//         return sec + ' сек. назад';
//     }

//     let min = Math.floor(diff / 60000);

//     if (min < 60) {
//         return min + ' мин. назад';
//     }

//     let d = date;

//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ].map(component => component.slice(-2));

//     return d.slice(0,3).join('.') + ' ' + d.slice(3).join(':');
// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

"use strict";

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);

// var promise = new Promise(function(resolve, reject) { 
//     const x = "geeksforgeeks"; 
//     const y = "geeksforgeeks"
//     if(x === y) { 
//         resolve(); 
//     } else { 
//         reject(); 
//     } 
//     }); 
    
//     promise. 
//         then(function () { 
//             console.log('Success, You are a GEEK'); 
//         }). 
//         catch(function () { 
//             console.log('Some error has occured'); 
//         }); 

// var promise = new Promise(function(resolve, reject) { 
//     throw new Error('Some error has occured') 
// }) 
  
// promise 
//     .then(function(successMessage) { 
//         console.log(successMessage); 
//     }) 
//     .catch(function(errorMessage) { 
//        //error handler function is invoked 
//         console.log(errorMessage); 
//     }); 

// const names = ['Ivan', 'Maria', 'Volandemort', 'Karakatica'];

// const shortNames = names.filter(function(name) {
//     return name.length <= 5;
// });

// console.log(shortNames);

// const answers = ['AnnA', 'IvAN', 'RekO'];

// const result = answers.map(item => item.toLocaleLowerCase());

// console.log(result);

// const someData = ['AnnA', 4, 'RekO'];
// console.log(someData.every(item => typeof(item) === 'number'));

// const array = [2, 4, 7, 1, 2];

// const result = array.reduce((sum, current) => sum + current);

// console.log(result);

// const array = ['AnnA', 'IvAN', 'RekO'];

// const result = array.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result);

// const object = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// Задача: вытащить имена людей, которые находятся в этом объекте

// const newArray = Object.entries(object);
// console.log(newArray);

// [
//     [ 'ivan', 'persone' ],
//     [ 'ann', 'persone' ],
//     [ 'dog', 'animal' ],
//     [ 'cat', 'animal' ]
// ]

// const newArray = Object.entries(object)
// .filter(item => item[1] === 'persone')
// item здесь каждый отдельный массивчик
// .map(item => item[0]);

// console.log(newArray);


// form отправка с помощью FormData

// const forms = document.querySelectorAll('form');

// const messages = {
//     loading: 'Загрузка',
//     success: 'Спасибо! Мы скоро с вами свяжемся',
//     failure: 'Что-то пошло не так'
// };

// forms.forEach(item => {
//     postData(item);
// });

// function postData(form) {
//     form.addEventListener('submit', (evt) => {
//         evt.preventDefault();

//         let statusMessage = document.createElement('div');
//         statusMessage.textContent = messages.loading;
//         form.append(statusMessage);

//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');

        // собираем данные со всех форм с помощью FormData()
//         const formData = new FormData(form);

//         request.send(formData);

//         request.addEventListener('load', () => {
//             if (request.status === 200) {
//                 statusMessage.textContent = messages.success;
//                 form.reset();
//                 setTimeout(() => {
//                     statusMessage.remove();
//                 }, 2000);
//             } else {
//                 statusMessage.textContent = messages.failure;
//             }
//         });
//     });
// }