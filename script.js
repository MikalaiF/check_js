
"use strict";
//let a = parseFloat('5px');
//let b = parseFloat('6px');
//alert(a + b);
//let a = parseFloat('5.5px');
//let b = parseFloat('6.25px');
//const result = (a + b);
//alert(result + 'px');

//let num1 = 25;
//let num2 = 40;
//alert(String(num1) + String(num2));

//let num1 = 37485;
//let num2 = 588439;
//alert(String(num1).length + String(num2).length);
//let str = 'abcde';
//let num = 2;
//alert(str[num]);
//let num = 47;
//num += 7;
//alert(`Здесь мы прибавляем к текущей переменной num, 7. Ответ: ${num}`);
//num -= 18;
//alert(`Здесь мы отнимаем от предыдущей переменной num, 18. Ответ: ${num}`);
//num *= 10;
//alert(`Здесь мы видим произведение текушей num  и числа 10. Ответ: ${num}`);
//num /= 15;
//alert(`А здесь мы поделили  последнее изменение  переменной num на 15. Ответ: ${num}`);

//let num = 10;
//num++;
//num++;
//num--;
//alert(num);
//let num1 = 0;
//let num2 = 2;
//let num3 = num2++;
//alert(num3);
//alert(num1);
//alert(num2);

//let num1 = 3;
//num1++;
//let num2 = num1--;
//alert(num1++); // 3

//alert(--num2); //3
//alert(num1); //4


//alert("Ваш возраст:" + prompt("Сколько вам лет?") + "?");
//alert('Приветствуем в нашем лучшем калькуляторе=))))');
//let num1 = prompt('Введите первое число');
//let num2 = prompt('Введите второе число');

//alert(+num1 * +num2); // сложит числа как строки

//let a = prompt('Введите сторону "а"');
//let b = prompt('Введите сторону "b"');
//alert("Периметр вашего прямоугольника равен:" + ((+a + +b) * 2));


//document.write(1 + "<br>" + 2 + "<br>" + 3 + "<br>" + 4 + "<br>" + 5);
//let aaa = 1;
//let bbb = 2;
//let ccc = 3;

//console.log(aaa + bbb + ссс)
//let r = 2;
//let PI = 3.14;
//let s = PI * (r ** 2);
//alert(s);

//let a = 5;
//let s = a ** 2;
//alert(s);

//let a = 3;
//let b = 5;
//let s = a * b;
//let p = (a + b) * 2;
//alert(s);
//alert(p);

//let tf = 105;
//let tc = (tf - 32) / 1.8;
//alert(tc);

//let a = ['a', 'b', 'c'];
//a[0] = 1;
//a[1] = 2;
//a[2] = 3;
//alert(a);

//let mas = [1, 2, 3, 4, 5, 6];
//mas[0]++;
//mas[1]++;
//mas[2]++;
//mas[3] += 3;
//mas[4] += 3;
//mas[5] += 3;
//alert(mas);

//let arr = [];
//console.log(arr);

//arr[0] = 1;
//arr[1] = 2;
//arr[4] = 'v';
//console.log(arr);

//let arr = [1, 2, 3];
//console.log(arr);
//arr[3] = 4;
//arr[4] = 5;
//console.log(arr);

//let str1 = 'Я должен познать';
//let str2 = 'что такое ';
//let str3 = 'PAIN';
//let str4 = "LET'S GO!!!!!!";
//let m = [str1, str2, str3, str4];
//alert(m);
//let date = { 'year': 1994, 'month': 04, 'day': 11 };
//console.log(date.month);

//let obj = { x: 1, y: 2, z: 3 };
//console.log(`${obj['x'] ** 2} ${obj['y'] ** 2} ${obj['z'] ** 2}`);

//let obj = { x: 1, y: 2, z: 3 };
//let keys = Object.keys(obj);
//console.log(keys);

//let obj = { x: 1, y: 2, z: 3 };
//console.log(Object.keys(obj).length);

//let obj = { x: 1, y: 'y', z: false };
//console.log(typeof obj['z']);

//let num = 1;

//if (num == 0 || num > 1 && num < 5) {
//   console.log('+++');
//} else {
//   console.log('---');
//}




//let test = true;

//if (test) {
//   console.log('+++');
//} else {
//   console.log('---');
//}


//let num = 21;
//if (num < 10 || num > 99) {
//   alert('число не попадает в диапозон')
//} else {
//   let sum = (+String(num)[0]) + (+String(num)[1]);
//   if (sum <= 9 && sum >= 0) {
//      console.log('Сумма цифр однозначная');
//   } else {
//      console.log('Сумма цифр двухзначная');
//   }
//}
//let num = 31;
//if (num >= 10 && num <= 99) {
//   let sum = (+String(num)[0]) + (+String(num)[1]);
//   if (sum <= 9 && sum >= 0) {
//      console.log('Сумма цифр однозначная');
//   } else {
//      console.log('Сумма цифр двухзначная');
//   }
//} else {
//   console.log('число не попадает в диапозон')
//}

//let lang = 'fr';

//if (lang == 'ru') {
//   console.log('рус');
//} else if (lang == 'en') {
//   console.log('анг');
//} else if (lang == 'de') {
//   console.log('нем');
//} else {
//   console.log('язык не поддерживается');
//}

//switch (lang) {
//   case 'ru':
//      console.log('рус');
//      break;
//   case 'en':
//      console.log('анг');
//      break;
//   case 'de':
//      console.log('нем');
//      break;
//   default:
//      console.log('не знаем такого языка');
//      break;
//}


//let num = 2;
//let res = num >= 0 ? 1 : 2;
//console.log(res);

//prompt('Hello?', 'hi');  // первое значение это название в окне, второе значение (не обязательное)-устанавливает начальное значение в окошке.

//let age = prompt('Сколько тебе лет?', 100);

//alert(`Тебе ${age} лет!`); // Тебе 100 лет!


//result = confirm(question);
//Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
//Результат – true, если нажата кнопка OK. В других случаях – false.


//let userName = prompt("What's your name?", "");
//prompt(`Your have name ${userName}?`);
//alert('Accept');



//let login = prompt('Введите ваше звание', "");
//let message = (login == 'сотрудник') ? 'Hi' :
//   (login == 'директор') ? 'Здраствуйте' :
//      (login == "") ? 'Нет логина' :
//         '';
//alert(message);

//let age = 91;
//if (age <= 14 || age >= 90) {
//   alert("gumanoid");
//} else {
//   alert('you are a human');
//}
//else if ( pass = '' || null){
//   alert('Я вас не знаю')

/*Моя первая задача которую я сам решил !!!!!
оказалось не сложнойй , но почему то я потратил на нее около часа или полутоа часа)
let question = prompt('Кто там?', '');



if (question == 'admin') {
   let pass = prompt('Введите пароль', '');
   if (pass == 12345) {
      alert('Dobro, go rabotatb');
   } else if (pass == null || pass == '') {
      alert('Отменено');
   } else if ( pass === 'Я главный'){
      alert('Hello');
   }else {
      alert('Не верный пароль!');
   }
} else if (question == null || question == '') {
   alert('Отменено');
} else {
   alert('Я вас не знаю');
}
*/
// будет height=100, если переменная height равна null или undefined


// выводит только четные числа
//for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//      alert(i);
//   }
//}

//let num;
//do {
//   num = prompt('введите число от 100', 0);
//} while (num <= 100 && num);

//let num = 0;
//for (; num < 5; num++) {
//   if (num == 2) continue;
//   console.log(num);
//}

//for (let num = 1; num <= 5;) {
//   console.log(num);
//   num++;
//}

//let num = 0;
//while (num < 3) {
//   console.log(`Число: ${num}`);
//   num++;
//}

//for (let num = 0; num < 3; num++) {
//   console.log(`Число:${num}`);
//}


//let ok = confirm('Are you reade?');
//console.log(ok);

//if (ok === true) {
//   alert('Тогда вперед!');
//} else {
//   console.log('We waiting');
//}

//let min = 60;
//if (min >= 0 && min <= 19) {
//   console.log('1 треть часа');
//} else if (min >= 20 && min <= 39) {
//   console.log('2 треть часа');
//} else if (min >= 40 && min <= 59) {
//   console.log('3 треть часа')
//} else {
//   console.log('Не коректное значение, укажите от 0 до 59');
//}

//let num = 1234560;
//let str = String(num);
//let lastSymbolStr = str[str.length - 1];
//if (lastSymbolStras == 0) {
//   console.log('da');
//}


//let num = 140120310230120319n;
//let str = String(num);
//let lastSymbolNum = str[str.length - 1];

//if (lastSymbolNum == 0 || lastSymbolNum == 2 || lastSymbolNum == 4 || lastSymbolNum == 6 || lastSymbolNum == 8) {
//   console.log('Четное число');
//} else {
//   console.log('Нечетное число');
//}

//let num = 22;
//let num2 = 3;
//let rest = num % num2;

//if (rest === 0) {
//   console.log('EVEN');
//} else {
//   console.log('ODD');
//}


//let month = prompt('Введите месяц', 5);


//if (month <= 2 || month == 12) {
//   console.log('Зима');
//} else if (month >= 3 && month <= 5) {
//   console.log("Весна");
//} else if (month >= 6 && month <= 8) {
//   console.log("Лето");
//} else {
//   console.log("Осень");
//}

//let num = '123033';
//let result = +num[0] + +num[1] + +num[2] === +num[3] + +num[4] + +num[5];
//if (result) {
//   console.log('Yes');
//} else {
//   console.log('No');
//}


//for (let i = 100; i >= 0; i--) {
//   console.log(i);
//}

//let arr = ['a', 'b', 'c', 'd', 'e'];

//for (let gg of arr) {
//   console.log(gg);
//}

//let num = prompt('введите число', '');
//let num2 = prompt('введите число', '');
//while (num > 10) {
//   console.log(num);
//   num = num / num2;
//}

//let num = 5;
//while (num <= 1000) {

//   console.log(num);
//   num = num * 3;
//}


//for (let i = 54; i <= 1000; i *= 3) {

//   console.log(i);

//}

//let arr = ['a', 'b', 'c', 'd', 'e'];
//for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
//}
//let arr = ['a', 'b', 'c', 'd', 'e'];

//for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
//}


//выводить только элементы, которые являются четными числами:
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (let element of arr) {
//   if (element % 2 === 0) {
//      console.log(element);
//   }
//}

//let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

//for (let elem in obj) {
//   if (obj[elem] % 2 === 0) {
//      console.log(obj[elem]);
//   }
//}
//Сумма всех элементов массива
//let arr = [1, 2, 3, 4, 5];
//let res = 0;

//for (let elem of arr) {
//   res += elem;
//}

//console.log(res);

//сумма квадратов элементов этого массива.
//let arr = [2, 5, 9, 3, 1, 4];
//let res = 0;

//for (let elem of arr) {
//   res += elem ** 2;
//   console.log(res);
//}
//console.log(res);


//помощью цикла сформирована строка
//let str = '';
//for (let i = 1; i < 10; i++) {
//   str += -i;
//}
//console.log(str + '-');

//переборка чисел от 1 до 100, будет выводить все цифры которые имеют в индексе 0 "1" или "2"
//for (let i = 1; i <= 100; i++) {
//   let str = String(i);
//   if (str[0] === '1' || str[0] === '2') {
//      console.log(i);
//   }
//}

//переборка числа циклом + сумма 0 и 1 индекса
//for (let i = 10; i <= 1000; i++) {
//   let str = String(i);
//   let sumIndex0And1 = (+str[0]) + (+str[1]);
//   if (sumIndex0And1 === 5) {
//      console.log(i);
//   }
//}

//let arr = [1, 2, 3, 10, 4, 5, 6, 7, 8, 9,];

//for (let i = 1; i <= 10; i++) {
//   console.log(i);
//}
//for (let elem of arr) {
//   if (elem === 10) {
//      console.log(elem);
//      break;
//   }
//}

//let arr = [1, 1, -1, 1,];
//let res = 0;

//for (let elem of arr) {
//   res += elem;

//   if (elem < 0) {
//      break;
//   }
//   console.log(res);
//}

//let arr = [1, 2, 6, 4, 5, 3, 7, 1, 2, 3, 4, 5, 6, 7];
//for (let elem of arr) {
//   if (elem === 3) {
//      console.log(arr.indexOf(3));
//      break;
//   }
//}
//выводит в консоль i , каждое число равное J (слабо это понял)
//РАЗОБРАЛСЯ, ТОЛЬКО НЕ БЫСТРО ЭТО СООБРАЖАЮ. НЕ ЗАБЫВАТЬ ЧТО СНАЧАЛО ВЫПОЛНЯЕТСЯ
//УСЛОВИЕ ПОТОМ ВСЕ ТЕЛО ( ЭТО ЗНАЧИТ ВЫПОЛНЯЕТСЯ  ВТОРОЙ цикл 
//столько раз , пока TRUE ) И только потом  ШАГ ПЕРВОГО цикла 
//происходит и второй цикл опять по новой.
//for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 3; j++) {

//      document.write(i + ' ');
//   }

//}


//let num = 0;
//for (let i = 11; i <= 33; i += 10) {
//   for (let j = 0; j <= 2; j++) {
//      num = i + j;

//      document.write(num + ' ');
//   }
//}

//заполнение массива (метод push)
//let arr = [];

//for (let i = 1; i <= 10; i++) {
//   arr.push(i);
//}
//console.log(arr);

//let arr = [];

//for (let i = 1; i <= 10; i++) {
//   arr.push('x');
//}
//console.log(arr);

//выводим в консоль только положительные числа
//let arr = [1, 2, 3, 4, -1, 5, 3, 6, 42, -23, 123, 55, -22, 0, -14, 5];
//for (let elem of arr) {
//   if (elem >= 0) {
//      console.log(elem)
//   }
//}

//Изменяем массив циклом, возводим элементы массива в квадрат
//Если поставить вместо <   <= , то ломается страничка)
//let arr = [1, 2, 3, 4, 5, 6];

//for (let i = 0; i < arr.length; i++) {
//   arr[i] += 10;
//}
//console.log(arr);

//Заполнение объекта циклом
//let keys = ['a', 'b', 'c', 'd', 'e'];
//let values = [1, 2, 3, 4, 5];

//let obj = {};

//for (let i = 0; i <= 4; i++) {
//   obj[keys[i]] = values[i];
//}
//console.log(obj);


//из 2 массивов в 1 объект
//let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//let arr2 = [1, 2, 3, 4, 5, 6, 7];

//let obj = {};

//for (let i = 0; i < arr2.length; i++) {
//   obj[arr1[i]] = arr2[i];
//}
//console.log(obj);

//let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
//let obj2 = {};


//Не решенная задача, нужно в новом объекте поменять местами ключи и значения
//let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
//let obj2 = {};
//for (let key in obj) {
//   let elem = obj[key];
//   let keys = key;
//   for (let i = 0; i <= 4; i++) {
//      for (let key2 in obj2) {
//         obj2[key2] = key;
//         key2 = elem;
//         console.log(obj2);
//      }
//   }
//   console.log(obj2);

//}


//FLAG- переменная, значение которой  true or false.
//let arr = [1, 2, 3, 4, 5];
//let flag = false;

//for (let elem of arr) {
//   if (elem === 3) {
//      flag = true;
//      break;

//   }

//}

//if (flag === true) {
//   console.log('+++');
//} else {
//   console.log('---');
//}



//let num = 10;

//for (let i = 3; i <= num; i++) {
//   let flag = true;
//   for (let j = 2; j < i; j++) {
//      if (i % j === 0) {
//         flag = false;
//         break;
//      }
//   }
//   if (flag) {
//      console.log(flag);
//   }
//}

//let n = 10; //  Код также должен легко модифицироваться для любых других интервалов. Например, prompt
//// Здесь должна быть проверка, что целое число и не меньше двух


//console.log(2); // простое число 
//for (let i = 3; i <= n; i++) { // Для всех чисел до n, от трёх
//   let isPrime = true;
//   for (let j = 2; j < i; j++) { // проверить, делится ли число без остатка на j
//      if (i % j === 0) { isPrime = false; break; } // не подходит, берём следующее
//   }
//   if (isPrime) console.log(i); // простое число
//}

//let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
//let counter = 0;
//let counter2 = 0;

//for (let num of arr) {
//   if (num === 3) {
//      counter++;
//   } else if (num === 2) {
//      counter2++;
//   }
//}
//document.write(`Количество троек равна:${counter},
//а двоек:${counter2}`);


//подсчитаем сколько каких элементов есть в этом массиве
// и представим результат в виде объекта
//let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
//let counter = { a: 0, b: 0, c: 0 };
//for (let elem of arr) {
//   counter[elem]++;

//}
//console.log(counter);

//let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'f'];
//let count = {};

//for (let elem of arr) {
//   if (count[elem] === undefined) {
//      count[elem] = 1;
//   } else {
//      count[elem]++;
//   }
//}

//console.log(count);


//Решение задачи. Подсчитайте сколько раз в
// ней встречается каждый из ее символов.
// Array.from() -- преобразует строку в массив.
//let str = 'Каждый охотник желает знать, где сидит фазан';
//let obj = {};
//let arr = Array.from(str);

//for (let elem of arr) {
//   if (obj[elem] === undefined) {
//      obj[elem] = 1;
//   } else {
//      obj[elem]++;
//   }
//}
//console.log(obj);

//Второй способ решения задачи.
//Подсчитайте сколько раз в
// ней встречается каждый из ее символов.
//let str = 'Каждый охотник желает знать, где сидит фазан';
//let obj = {};
//for (let sym of str) {
//   if (obj[sym] === undefined) {
//      obj[sym] = 1;
//   } else {
//      obj[sym]++;
//   }
//}
//console.log(obj);

//Переберите его циклом и в каждой итерации
// цикла выведите следующий элемент массива.
//let arr = [1, 2, 3, 4, 5,];

//for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= arr.length) {
//      console.log(arr[i+1]);
//   }
//}


//let arr = [1, 2, 3, 4, 5,];

//for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= arr.length) {
//      console.log(arr[i + 1] + arr[i]);
//   }
//}


//let arr = [5, 6, 7, 8, 9];

//for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//}
//function func(arr, i) {
//   if (i == arr.length) {
//      return;
//   }
//   console.log(arr[i]);
//   func(arr, i + 1);
//}
//func(arr, 0);

//Задача, найти числа которые начинаются на 1 или 2 и сумму сложить.
//let arr = [10, 20, 30, 40, 21, 32, 51];
//let sum = 0;
//for (let elem of arr) {
//   if (elem < 29) {
//      sum += elem;
//   }
//}
//console.log(sum);

//let arr = [10, 20, 30, 40, 21, 32, 51];
//for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2) {
//      console.log(num);
//   }
//}

//let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
//let sum = 0;

//for (let elem in obj) {

//   let str = String(obj[elem[0]]);


//   if (str[0] === '1' || str[0] === '2') {

//      sum += obj[elem];
//   }
//}
//console.log(sum);


//Записывает в новый массив только нечетные числа
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//let res = [];
//for (let elem of arr) {
//   if (elem % 2 != 0) {
//      res.push(elem);
//   }
//}

//console.log(res);

//Циклы выводят числа от 1 до 100
//let i = 1;
//while (i <= 100) {
//   console.log(i);
//   i++;
//}

//for (let i = 1; i <= 100; i++) {
//   console.log(i);
//}


//Напишите скрипт, который будет находить факториал числа.
// Факториал - это произведение всех целых чисел от единицы до заданного числа.

//let num = 6;
//let factorial = 1;
//for (let i = 1; i <= num; i++) {
//   factorial *= i;

//}
//console.log(factorial);

//let arr = [11, 3, -1, 4, -13, -22, -5, 4, 1, -2];
//let sum = 0;
//for (let elem of arr) {
//   if (elem > 0) {
//      sum += elem;
//   }
//}
//console.log(sum);


//Решение КОЛХОЗНИКА=)))
//let arr = [10, 20, 30, 50, 235, 3000];
//let arr2 = [1, 2, 5];

//for (let i = 0; i < arr.length; i++) {
//   let str = String(arr[i]);

//   if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
//      console.log(arr[i]);
//   }
//}

//let arr = [10, 20, 30, 50, 235, 3000];
//let rever = arr.reverse();
//for (let i = 0; i < arr.length; i++) {
//   console.log(rever[i]);
//}
//console.log(arr.reverse());


//Дан массив с числами. С помощью цикла выведите на экран все элементы,
// значение которых совпадает с их порядковым номером в массиве.
//let arr = [0, 1, 3, 6, 4, 5, 6, 7];

//for (let elem of arr) {
//   if (arr.indexOf(elem) === elem) {
//      console.log(elem);
//   }
//}

//Составьте массив дней недели. С помощью цикла for 
//выведите все дни недели, а выходные дни выведите жирным.
//let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

//for (let i = 0; i < arr.length; i++) {
//   if (i < arr.length - 2) {
//      document.write(arr[i] + '<br>')
//   } else {
//      document.write('<b>' + arr[i] + '</b>' + '<br>')
//   }
//}

//let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
//let day = 7;

//for (let i = 0; i < arr.length; i++) {
//   if (i === day - 1) {
//      document.write('<em>' + arr[i] + '</em>' + '<br>');
//   } else {
//      document.write(arr[i] + '<br>');
//   }
//}


//let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
//};

//for (let key in obj) {
//   if (obj[key] <= 400) {
//      let Fi = obj[key] * 1.1
//      console.log(+Fi.toFixed(0));
//   }

//}


//let arr1 = [1, 2, 3, 4, 5];
//let arr2 = [6, 7, 8, 9, 10];
//let obj = {};

//for (let i = 0; i < arr1.length; i++) {

//   obj[arr1[i]] = arr2[i];

//}
//console.log(obj);

//let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
//let sumKey = 0;
//let sumElem = 0;
//let divid = 0;
//for (let key in obj) {
//   sumKey += +key;
//   sumElem += obj[key];
//   divid = sumKey / sumElem;
//}
//console.log(sumKey);
//console.log(sumElem);
//console.log(divid);


//Запишите ключи этого объекта в один массив, а значения - в другой.
//let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
//let arr1 = [];
//let arr2 = [];

//for (let key in obj) {
//   arr1 = Object.keys(obj);
//   arr2 = Object.values(obj);
//}
//console.log(arr2);
//console.log(arr1);


//Запишите в новый массив элементы, значение которых начинается
// с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:

//let obj = {
//   1: 125,
//   2: 225,
//   3: 128,
//   4: 356,
//   5: 145,
//   6: 281,
//   7: 452,
//};
//let arr = [];
//for (let key in obj) {
//   let str = String(obj[key]);
//   if (str[0] === '1' || str[0] === '2') {
//      arr = obj[key];
//      console.log(arr);
//   }
//}



//let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'f'];
//let count = {};

//for (let elem of arr) {
//   if (count[elem] === undefined) {
//      count[elem] = 1;
//   } else {
//      count[elem]++;
//   }
//}

//console.log(count); 

//let arr = [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i'],
//   ['j', 'k', 'l'],
//];
//console.log(`${arr[3][2]} ${arr[1][1]} ${arr[2][0]} ${arr[0][0]}`);

//let arr = [[1, 2], [3, 4], [5, 6]];
//console.log(arr);
//console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]);

//let arr = [
//   [
//      [1, 2],
//      [3, 4],
//   ],
//   [
//      [5, 6],
//      [7, 8],
//   ],
//];
//console.log(arr[0][0][0] + arr[0][0][1]
//   + arr[0][1][0] + arr[0][1][1] +
//   arr[1][0][0] + arr[1][0][1] + arr[1][1][0]
//   + arr[1][1][1]);

//let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
//let sum1 = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0]
//   + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1];
//let sum2 = arr[1][0] + arr[1][1][0] + arr[1][1][1];
//let res = sum1 + sum2;
//console.log(res);


////Не работает, но я пытался))) перебрать массив, ВСЕ работает
////ТЫ МОЛОДЕЦ!!!!! Массив неправильный , хз как условия переборки 
////написать, не работает через FOR OF и FOR
//let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
//for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//      for (let k = 0; k < arr[i][j].length; k++) {
//         console.log(arr[i][j][k]);
//      }
//      console.log(arr[i][j]);
//   }
//}

////А вот двухмерный отлично считает
//let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
//for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//      console.log(arr[i][j]);
//   }

//}

//let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

//for (let elem of arr) {
//   for (let elem2 of elem) {
//      console.log(elem2);
//   }
//}

//let arr = [[1, 2, 3], [4, 5], [6]];
//let sum = 0;
//for (let elem of arr) {
//   for (let elem2 of elem) {
//      sum += elem2;
//   }
//}
//console.log(sum);

//let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
//let sum = 0;
//for (let elem of arr) {
//   for (let elem2 of elem) {
//      for (let elem3 of elem2) {
//         sum += elem3;
//      }
//   }
//}
//console.log(sum);

//let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
//let sum = 0;
//for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//      for (let k = 0; k < arr[i][j].length; k++) {
//         sum += arr[i][j][k];
//      }

//   }
//}
//console.log(sum);

////В цикле создали многомерный массив
//let arr = [];
////Здесь создали 3 массива в массиве.
//for (let i = 0; i < 3; i++) {
//   arr[i] = [];
////Здесь заполнили массивы
//   for (let j = 0; j < 3; j++) {
//      arr[i].push(j + 1);
//   }
//}
//console.log(arr);

//let arr = [];

//for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 1; j <= 5; j++) {
//      arr[i].push(j);
//   }
//}
//console.log(arr);

//let arr = [];

//for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 4; j++) {
//      arr[i].push('x');
//   }
//}
//console.log(arr);

////Сформируйте с помощью трех вложенных
//// циклов следующий массив:
//let arr = [];

//for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//      arr[i].push([]);
//      for (let k = 1; k <= 5; k++) {
//         arr[i][j].push(k);
//      }
//   }
//}
//console.log(arr);



//let arr = [];
//let k = 1; //счетчик

//for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//      arr[i].push(k);//записываем счетчик
//      k++; // увеличивает счетчик на 1 после каждой итерации
//   }
//}
//console.log(arr);

////Слегка упростили, счетчик сделали при пуше
//let arr = [];

//for (let i = 0, k = 1; i < 3; i++) {
//   arr[i] = [];

//   for (let j = 0; j < 3; j++) {
//      arr[i].push(k++);
//   }
//}

//console.log(arr);

//let arr = [];
//let k = 2;
//for (let i = 0; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//      arr[i].push(k);
//      k += 2;
//   }
//}
//console.log(arr);

//let arr = [];
//let count = 1;
//for (let i = 0; i < 2; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//      arr[i].push([]);
//      for (let k = 0; k < 2; k++) {
//         arr[i][j].push(count);
//         count++;
//      }
//   }
//}
//console.log(arr);

//let arr = [];
//let k = 1;
//for (let i = 0; i < 3; i++) {
//   arr[i] = [];

//   for (let j = 0; j < 3; j++) {
//      arr[i][j] = k;
//      k++;
//   }
//}

//console.log(arr);


////Переборка двухмерного объекта циклом FOR IN + сумма всех значений
//let obj = {
//   1: {
//      1: 11,
//      2: 12,
//      3: 13,
//   },
//   2: {
//      1: 21,
//      2: 22,
//      3: 23,
//   },
//   3: {
//      1: 24,
//      2: 25,
//      3: 26,
//   },
//}
//let sum = 0;

//for (let key in obj) {

//   let k = obj[key];
//   for (let key2 in k) {
//      sum += k[key2];
//   }

//}
//console.log(sum);

////Переборка  трехмерного объекта циклом FOR IN + сумма всех значений
//let obj = {
//   1: {
//      1: {
//         1: 111,
//         2: 112,
//         3: 113,
//      },
//      2: {
//         1: 121,
//         2: 122,
//         3: 123,
//      },
//   },
//   2: {
//      1: {
//         1: 211,
//         2: 212,
//         3: 213,
//      },
//      2: {
//         1: 221,
//         2: 222,
//         3: 223,
//      },
//   },
//   3: {
//      1: {
//         1: 311,
//         2: 312,
//         3: 313,
//      },
//      2: {
//         1: 321,
//         2: 322,
//         3: 323,
//      },
//   },
//}
//let sum = 0;

//for (let key in obj) {
//   let k = obj[key];
//   for (let key2 in k) {
//      let k2 = k[key2];
//      for (let key3 in k2) {
//         sum += k2[key3];
//      }
//   }
//}
//console.log(sum);

////переборка объекта в котором массивы
//let students = {
//   'group1': ['name11', 'name12', 'name13'],
//   'group2': ['name21', 'name22', 'name23'],
//   'group3': ['name 31', 'name32', 'name33'],
//};

//for (let key in students) {
//   let k = students[key];

//   for (let elem of k) {
//      console.log(elem);
//   }

//}


////переборка массива  в котором объекты
//let data = [
//   {
//      1: 'data11',
//      2: 'data12',
//      3: 'data13',
//   },
//   {
//      1: 'data21',
//      2: 'data22',
//      3: 'data33',
//   },
//   {
//      1: 'data31',
//      2: 'data32',
//      3: 'data33',
//   },
//];

//for (let elem of data) {
//   for (let key in elem) {
//      console.log(elem[key]);
//   }
//}

////+ еще одна переборка. массив в нем объекты и в них массивы
//let data = [
//   {
//      1: [
//         'data111',
//         'data112',
//         'data113',
//      ],
//      2: [
//         'data121',
//         'data122',
//         'data123',
//      ],
//   },
//   {
//      1: [
//         'data211',
//         'data212',
//         'data213',
//      ],
//      2: [
//         'data221',
//         'data222',
//         'data223',
//      ],
//   },
//   {
//      1: [
//         'data411',
//         'data412',
//         'data413',
//      ],
//      2: [
//         'data421',
//         'data422',
//         'data423',
//      ],
//   },
//];

//for (let elem of data) {
//   for (let key in elem) {

//      for (let elem2 of elem[key]) {
//         console.log(elem2);
//      }
//   }
//}

//let employees = [
//   {
//      name: 'name1',
//      salary: 300,
//   },
//   {
//      name: 'name2',
//      salary: 400,
//   },
//   {
//      name: 'name3',
//      salary: 500,
//   },
//];

//for (let worker of employees) {
//   console.log(worker.name + ' ' + worker.salary);

//}

////Выведите на экран сумму зарплат тех работников,
//// возраст которых равен или более 30 лет.
//let employees = [
//   {
//      name: 'name1',
//      salary: 300,
//      age: 28,
//   },
//   {
//      name: 'name2',
//      salary: 400,
//      age: 29,
//   },
//   {
//      name: 'name3',
//      salary: 500,
//      age: 30,
//   },
//   {
//      name: 'name4',
//      salary: 600,
//      age: 31,
//   },
//   {
//      name: 'name5',
//      salary: 700,
//      age: 32,
//   },
//];
//let sum = 0;
//for (let worker of employees) {
//   if (worker.age >= 30) {
//      sum += worker.salary;
//   }
//}
//console.log(sum);

//let students = {
//   'group1': {
//      'subgroup11': ['student111', 'student112', 'student113'],
//      'subgroup12': ['student121', 'student122', 'student123'],
//   },
//   'group2': {
//      'subgroup21': ['student211', 'student212', 'student213'],
//      'subgroup22': ['student221', 'student222', 'student223'],
//   },
//   'group3': {
//      'subgroup31': ['student311', 'student312', 'student313'],
//      'subgroup32': ['student321', 'student322', 'student323'],
//   },
//};

//students['group1']['subgroup11'].push('students114');
//students['group1']['subgroup13'] = [];
//students['group1']['subgroup13'].push('students131');
//students['group4'] = {};
//students['group4']['subgroup41'] = [];
//students['group4']['subgroup41'].push('students411');
//students['group4']['subgroup41'].push('students412');

//console.log(students);

//let arr = [4, 2, 5, 19, 13, 0, 10];
//let cube = 0;
//let sumCube = 0;

//for (let elem of arr) {
//   cube = Math.pow(elem, 3);
//   sumCube += cube;


//}
//console.log(Math.sqrt(sumCube));


//let num = Math.sqrt(587);
//console.log(num);
//console.log(Math.ceil(num));
//console.log(Math.floor(num));
//console.log(num.toFixed(2));

//let obj = {};
//obj['floor'] = Math.floor(num);
//obj['ceil'] = Math.ceil(num);
//console.log(obj);

//let arr = [];
//for (let i = 0; i < 10; i++) {
//   function pushRandomInt(min, max) {
//      return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   arr.push(pushRandomInt(1, 1000));
//}
//console.log(arr);

//let str = 'Mikalai';
//let substr = str.substr(2, 5);
//console.log(substr);

//let str2 = str;
//let substring = str2.substring(2, 5);
//console.log(substring);

//let str3 = 'Mikalai';
//let slice = str3.slice(2, 5);

//console.log(slice);

//let str = 'я учу javascript!';
//console.log(str.substr(2, 3));
//console.log(str.substring(2, 5));
//console.log(str.slice(2, 5));
//console.log(str.substr(6, 10));
//console.log(str.substring(6, str.length - 1));
//console.log(str.slice(6, -1));

//let str = 'я учу javascript!';

//let index = str.indexOf('javascript');
//let length = 'javascript'
//console.log(str.substr(index, length.length));



//let str =
//   `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu sagittis ante. Morbi eu eros sit amet lorem eleifend congue id eget tellus. Donec lacinia, dolor at posuere gravida, lacus mi pellentesque enim, in aliquet dolor ipsum sit amet mi. Aliquam massa nunc, imperdiet eget ullamcorper vehicula, blandit sit amet augue. Pellentesque sagittis leo ut turpis dignissim, auctor ultrices augue porttitor. Cras tempus pellentesque felis nec ultrices. Sed mattis odio sit amet risus fringilla suscipit et sed nisl.

//  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel felis ullamcorper, placerat felis ac, aliquet orci. Suspendisse id arcu vehicula, cursus lectus nec, aliquam erat. Ut eu pellentesque augue. Sed quis ipsum mauris. Etiam mi ante, molestie non ornare at, viverra vel est. Cras id sodales dui, id maximus risus. Duis gravida metus eu nibh tempor pellentesque. In felis odio, dapibus vitae metus euismod, viverra feugiat odio. Maecenas in eros lorem. Ut dictum mauris at velit mattis, ac eleifend lectus auctor. Curabitur tempor urna ex, sit amet ullamcorper massa semper ut.

//  Sed aliquam massa turpis, ac molestie erat pulvinar eu. Ut rutrum placerat ex a aliquet. Cras commodo ipsum posuere, congue nulla id, sodales mi. Vestibulum sagittis lacus eu diam ultricies rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu consectetur velit. Suspendisse mattis libero a turpis accumsan ullamcorper.

//  Aliquam varius sit amet orci et tempor. Sed turpis massa, rutrum in sollicitudin a, laoreet ut purus. Ut ut pretium nibh. Suspendisse et dui felis. Vestibulum tristique nibh sit amet tellus luctus sagittis. Integer felis urna, cursus quis vestibulum non, euismod sed est. Ut tempor in nisl vel condimentum. Quisque commodo lectus tortor.

//  Aliquam ut tincidunt sapien. Donec magna nibh, condimentum non nibh id, vestibulum molestie libero. Vestibulum consectetur venenatis augue. Donec facilisis libero tortor, eget pellentesque turpis sollicitudin in. Morbi cursus eleifend neque, ac scelerisque lacus sollicitudin a. Vivamus quam tellus, consectetur id mattis non, vestibulum cursus quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut facilisis consectetur diam eget iaculis. Nulla tristique, lorem at viverra pharetra, magna odio interdum ante, ac cursus arcu magna in ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ex turpis, mattis nec urna porta, sollicitudin commodo leo.

//  In nec odio ac lacus eleifend mattis quis gravida tortor. Nulla pulvinar id ante in accumsan. Sed venenatis, leo at volutpat efficitur, felis velit congue libero, quis dapibus diam mi sed arcu. In iaculis imperdiet ipsum, sed tincidunt velit porttitor in. Donec sit amet feugiat tortor, at condimentum orci. In luctus non massa non aliquet. Quisque congue neque ac purus fringilla blandit. Nam gravida erat viverra bibendum molestie. Vestibulum convallis neque sit amet gravida volutpat. Etiam aliquet posuere eleifend. Morbi quis leo ac justo blandit pulvinar.`;

//let word = prompt('Введите слово',);
//let search = str.indexOf(word);
//console.log(search);
//console.log(str.substr(search, word.length));

//document.write(str);


////Переворот символов строки в обратном порядке
//let str    = '123456789';
//let arr1   = str.split('');
//let arr2   = arr1.reverse();
//let result = arr2.join('');

//console.log(result);

////упрощено верхнее
//let str = '123456789';

//let result = str.split('').reverse().join('');
//console.log(result);

//// Сумма цифр из строки
//let str = '12345';
//let arr = str.split('');
//let sum = 0;

//for (let i = 0; i < arr.length; i++) {
//	sum += Number(arr[i]);
//}

//console.log(sum);

////числа  в массив и становчтся строками в массиве
//let num = 12345;
//let str = String(num);
//let arr = str.split('');

//console.log(arr);

//let str = "Mikalai Valer'evich Filipau";
//console.log(str.split(''));
//console.log(Array.from(str));

////Переворачиваем дату и делаем с точкой)
//let date = '2025-12-31';

//let result = date.split('-').reverse().join('.');
//console.log(result);

//let arr = ['1', '2', '3', '4', '5', '6'];
//let result = [];

//while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
//	let first = arr.shift();
//	let last  = arr.pop();

//	let str = first + last; // тут будет строка '16', потом '25', потом '34'
//	result.push(str);
//}

//// После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку:
//result = result.join('-');
//console.log(result);


//let str = 'London';
//let result = str.slice(0, 1).toLowerCase() + str.slice(1);
//console.log(result);

//let str = 'word1 word2 word3';

//let words = str.split(' ');

//for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);

//}
//let res = words.join(' ')
//console.log(res);

//let str = 'Mikalai_Valerevich_Filipau';

//let words = str.split('_');

//for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
//}
//let result = words.join('');

//let wordsLower = str.split('_');
//for (let i = 0; i < wordsLower.length; i++) {
//   wordsLower[i] = wordsLower[i].slice(0, 1).toLowerCase() + wordsLower[i].slice(1);
//}
//let resWordsLower = wordsLower.join(' ');

//console.log(resWordsLower);

//let str = 'Mikalai Filipau';

//let res = str.split(' ').reverse().join(' ');
//console.log(res);

//func(); // выведет '!'
//function func() {
//   console.log('!');
//}

//function sum() {
//   let sum100 = 0;
//   for (let i = 0; i <= 100; i++) {
//      sum100 += i;
//   }

//   console.log(sum100);
//}
//sum();

//function func(num) {
//   console.log(num ** 2);
//}
//func(10);

//function cube(num) {
//   console.log(Math.pow(num, 6));
//}
//cube(10);



//function func(num) {
//   let check = Math.sign(num);
//   if (check === 1) {
//      console.log('+++');
//   } else if (check === 0) {
//      console.log(0);
//   } else {
//      console.log('---')
//   }
//}
//func(prompt('Проверка числа на отр. или полож. или 0', 42367));


//function sum(num1, num2, num3) {
//   console.log(num1 + num2 + num3);
//}
//sum(5, 5, 2);

//function func(num1, num2, num3) {
//   console.log(num1 + num2 + num3);
//}
//let param1 = 1;
//let param2 = 2;
//let param3 = 3;

//func(param1, param2, param3);

//function func(num = 5) {
//   console.log(num * num);
//}
//func();

//function func(num) {
//   return Math.pow(num, 2);
//}

//let res = func(3) + func(4);
//console.log(res);

//function sqrt(num) {
//   return Math.sqrt(num);
//}

//function round(num) {
//   return num.toFixed(3);
//}

//let res = round(sqrt(2));
//console.log(res);

//function sqrt(num) {
//   return Math.sqrt(num);
//}

//function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
//}

//function fixed(num) {
//   return num.toFixed(2);
//}

//let res = fixed(sum(sqrt(2), sqrt(3), sqrt(4)));
//console.log(res);

//function func(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//      sum += i;

//   }
//   return sum;
//}

//console.log(func(2));

////В следующем примере сделана функция, которая определяет, сколько первых элементов массива
//// нужно сложить, чтобы сумма стала больше или равна 10:
//function func(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//      sum += arr[i];

//      // Если сумма больше или равна 10:
//      if (sum >= 10) {
//         return i + 1; // выходим из цикла и из функции
//      }
//   }
//}
//let arr = [1, 2, 3, 4, 5];
//let res = func(arr);
//console.log(res);


////сделана функция, которая вычисляет, сколько целых чисел, 
////начиная с 1, нужно сложить, чтобы результат был больше 100:
//function func() {
//   let sum = 0;
//   let i = 1;

//   while (true) { // бесконечный цикл
//      sum += i;

//      if (sum >= 100) {
//         return i; // цикл крутится пока не выйдет тут
//      }

//      i++;
//   }
//}

//console.log(func());

//function func() {
//   let sum = 0;
//   for (let i = 1; ; i++) {
//      sum += i
//      if (sum >= 100) {
//         return i;
//      }
//   }

//}
//console.log(func());

//function func(num) {
//   let res = num;
//   for (let i = 1; ; i++) {
//      console.log(res);
//      res = res / 2;

//      if (res <= 10) {
//         return i;
//      }
//   }

//}

//console.log(func(500));

//function isPositive(arr) {
//   let flag = true;

//   for (let elem of arr) {
//      if (elem < 0) {
//         flag = false;
//      }
//   }

//   return flag;
//}
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//console.log(isPositive(arr));



//function isEven(arr) {

//   for (let elem of arr) {
//      if (elem % 2 != 0) {
//         return false;
//      }

//   }
//   return true;


//}

//let arr = [0, 0, 1, 12, 2];
//console.log(isEven(arr));
//console.log(4 % 2);


//function func(num = 0) {
//   if (num % 2 != 0) {
//      return 'нечетное';
//   }
//   return 'четное';
//}

//console.log(func(3));

////Сделайте функцию, которая параметром будет принимать 
////массив и проверять,
//// есть ли в этом массиве два одинаковых элемента подряд.
//let arr = [1, 2, 7, 9, 4, 19, 7, 6];
//function func(arr) {

//   for (let i = 0; i < arr.length; ++i) {
//      if (arr[i] === arr[i - 1]) {
//         return true;
//      }
//   }
//   return false;
//}
//console.log(func(arr));

//function func(a, b) {
//   return a == b;
//}
//console.log(func(0, 0));

//function func(a, b) {
//   return a + b >= 10;
//}
//console.log(func(2, 5));

//function func(num) {
//   return num >= 0;
//}
//console.log(func(10));


//let arr = [1, 1, 1, 2, 3, 4, 5, 56];
//function addition(arr) {
//   let res = 0;
//   for (let elem of arr) {
//      res += elem;
//   }

//   return res / arr.length;
//}

//console.log(addition(arr));



//let arr1 = [3, 3];
//let arr2 = [2, 2];
//function division(arr1, arr2) {
//   let res1 = 0;
//   for (let elem of arr1) {
//      res1 += elem;
//   }
//   let res2 = 0;
//   for (let elem of arr2) {
//      res2 += elem;
//   }
//   return res1 / res2;
//}
//console.log(division(arr1, arr2));

//function getMulti(arr) {
//   let res = 1;

//   for (let elem of arr) {
//      res *= elem;
//   }

//   return res;
//}
//console.log(getMulti([1, 2, 3, 4, 5, 6]));

////Код должен найти сумму цифр числа:


//let num = 12345;
//let res = getDigitsSum(num);
//console.log(res);

//function getDigitsSum(num) {

//   let arr = String(num).split('');
//   let sum = 0;

//   for (let elem of arr) {
//      sum += +elem;
//   }

//   return sum;
//}


//Сделайте функцию, которая параметром будет принимать
// массив и возвращать сумму его элементов.
//let arr = [1, 2, 3, 4, 5];
//function getSum(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//      sum += elem;
//   }
//   return sum;
//}
//console.log(getSum([1, 1, 5]));

//Сделайте функцию, которая параметром будет принимать
// число и возвращать массив его делителей.
//function getArr(num) {
//   let arr = [];
//   for (let i = 0; i <= num; i++) {
//      if (num % i === 0) {
//         arr.push(i);
//      }
//   }
//   return arr;
//}
//console.log(getArr(6));

//Сделайте функцию, которая параметром будет принимать
// строку и возвращать массив ее символов.
//function getArrFromStr(str) {
//   let arr = str.split('')
//   return arr;
//}
//console.log(getArrFromStr('Gosha'));

//Сделайте функцию, которая параметром будет принимать
// строку и переворачивать ее символы в обратном порядке.
//function getReverse(str) {
//   let arr = str.split('').reverse().join('');
//   return arr;
//}
//console.log(getReverse('Mikalai'));

//Сделайте функцию, которая параметром будет принимать строку
// и делать заглавной первую букву этой строки.
//function getUpperCase(str) {
//   let str1 = str.substr(0, 1).toUpperCase() + str.substr(1);
//   return str1;
//}
//console.log(getUpperCase('mikalai'));


//Сделайте функцию, которая параметром будет принимать строку
// и делать заглавной первую букву каждого слова этой строки.
//function getUpperCaseEveryWord(str) {
//   let arr = str.split(' ');
//   let arr2 = [];
//   for (let elem of arr) {
//      let arr1 = elem.substr(0, 1).toUpperCase() + elem.substr(1);
//      arr2.push(arr1);

//   }
//   return arr2;
//}
//console.log(getUpperCaseEveryWord('filipau mikalai valerevich'));

//Сделайте функцию, заполняющую массив целыми 
//числами от 1 до заданного.
//function filArray(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//      arr.push(i);
//   }
//   return arr;
//}
//console.log(filArray(40));


//Сделайте функцию, которая будет возвращать
// случайный элемент из массива.
//function getRandomElem(arr) {
//   let randomElem = arr[Math.floor(Math.random() * arr.length)];
//   return randomElem;
//}
//console.log(getRandomElem([1, 2, 3, 4, 5, 6, 7]));

//Сделайте функцию, которая параметром будет
// принимать число и проверять, простое оно или нет.
//function checkPrimeNumber(num) {
//   let isPrime = true;
//   if (num <= 1) {
//      return 'Enter  is number  greater 1';
//   } else if (num > 1) {
//      for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//            isPrime = false;
//            break;
//         }
//      }
//   }
//   if (isPrime) {
//      return 'The number  is  a prime number';
//   } else {
//      return 'The number  is not a prime number';
//   }
//}
//console.log(checkPrimeNumber());


//Сделайте функцию, которая будет проверять пару чисел на
// дружественность. Дружественные числа - два числа, для
//  которых сумма всех собственных делителей первого числа
//   равна второму числу и наоборот.
//function checkFriendlyNumbers(num, num2) {
//   let arr = [];
//   let sumArr = 0;
//   let sumArr2 = 0;
//   for (let i = 0; i <= num; i++) {
//      if (num % i === 0) {
//         arr.push(i);
//      }
//   }
//   for (let elem of arr) {
//      sumArr += elem;
//   }
//   let arr2 = [];
//   for (let j = 0; j <= num2; j++) {
//      if (num2 % j === 0) {
//         arr2.push(j);
//      }
//   }
//   for (let elem of arr2) {
//      sumArr2 += elem;
//   }
//   if (sumArr === sumArr2) {
//      return true;
//   } else {
//      return false;
//   }
//}
//console.log(checkFriendlyNumbers(14, 15));



//Используя созданную вами функцию из предыдущей задачи
//найдите все пары дружественных чисел в промежутке от 1 до 1000.
//function checkFriendlyNumbers(num, num2) {
//   let arr = [];
//   let sumArr = 0;
//   let sumArr2 = 0;
//   for (let i = 0; i <= num; i++) {
//      if (num % i === 0) {
//         arr.push(i);
//      }
//   }
//   for (let elem of arr) {
//      sumArr += elem;
//   }
//   let arr2 = [];
//   for (let j = 0; j <= num2; j++) {
//      if (num2 % j === 0) {
//         arr2.push(j);
//      }
//   }
//   for (let elem of arr2) {
//      sumArr2 += elem;
//   }
//   if (sumArr === sumArr2) {
//      return true;
//   } else {
//      return false;
//   }
//}
//for (let i = 1; i <= 1000; i++) {
//   for (let j = 1; j <= 1000; j++) {
//      if (checkFriendlyNumbers(i, j) == true) {
//         console.log(i, j);
//      }
//   }
//}

//Сделайте функцию, которая будет проверять число на 
//совершенность. Совершенное число - это число, сумма
// собственных делителей которого равна этому числу.

//function checkPerfectNumber(num) {
//   let arr = [];
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//      if (num % i === 0) {
//         arr.push(i);
//      }
//   }
//   for (let elem of arr) {
//      sum += elem;
//   }
//   if (sum === num) {
//      return true;
//   } else {
//      return false;
//   }

//}
//for (let i = 0; i <= 10000; i++) {
//   if (checkPerfectNumber(i) === true) {
//      console.log(i);
//   }
//}


//Найдите все счастливые билеты. Счастливый билет
// - это билет, в котором сумма первых трех цифр его номера
//  равна сумме вторых трех цифр его номера.
//function checkHappyTicket(num) {
//   let arrNum = String(num).split('');
//   let arr1 = arrNum.slice(0, 3);
//   let arr2 = arrNum.slice(3);
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let elem of arr1) {
//      sum1 += +elem;
//   }
//   for (let elem of arr2) {
//      sum2 += +elem;
//   }
//   if (sum1 === sum2) {
//      return true;
//   } else {

//      return false;
//   }
//}
//console.log(checkHappyTicket(123456));

//Сделайте функцию, которая параметром будет принимать два
// числа и возвращать массив их общих делителей

//function sumCommonDivisors(num1, num2) {
//   let arrSumDivisors = [];

//   for (let i = 0; i < num1; i++) {
//      if (num1 % i === 0) {
//         arrSumDivisors.push(i);
//      }
//   }
//   for (let i = 0; i < num2; i++) {
//      if (num2 % i === 0) {
//         arrSumDivisors.push(i);
//      }
//   }
//   //let arrSet = [...new Set(arrSumDivisors)]; // убирает одинаковые числа из массива
//   // убирает одинаковые числа из массива
//   let objSet = {};
//   for (let elem of arrSumDivisors) {
//      objSet[elem] = elem;
//   }
//   return Object.values(objSet);
//   //return arrSet;
//}

//console.log(sumCommonDivisors(12, 54));


//Сделайте функцию, которая будет принимать строку на русском 
//языке, а возвращать ее транслит.

//function translit(word) {
//   let answer = '';
//let converter = {
//   'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
//   'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
//   'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
//   'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
//   'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
//   'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
//   q: 'e', 'ю': 'yu', 'я': 'ya',

//   'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
//   'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
//   'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
//   'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
//   'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
//   'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
//   'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
//};

//console.log(converter["q"]);

//   for (let i = 0; i < word.length; ++i) {
//      console.log(word[i]);
//      console.log(converter[word[i]]);
//      //if (converter[word[i]] === undefined) {
//      //   answer += word[i];

//      //} else {
//      //   answer += converter[word[i]]; 
//      //}
//      answer += converter[word[i]];
//   }

//   return answer;
//}
//console.log(translit('евге1ний'));


//Сделайте функцию, которая будет принимать число,
// а возвращать это число прописью. Пусть функция работает
//  с числами до 999. 



//let str = +prompt("Введите число от 10 до 99");
//if ((isNaN(str)) || (str < 10) || (str > 99) || (parseInt(str) != str)) {
//   alert("Введено неправильное число!");
//} else {
//   let q = numPropis(str);
//   alert('Пользователь ввёл: ' + str + " - " + q + ' ');
//}
//function numPropis(num) {
//   let arr = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
//   let arr2 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
//   if (num < 20) {
//      return arr[num - 1];
//   }
//   let res = arr2[Math.floor(num / 10) - 2];
//   if (num % 10 != 0) {
//      res += ' ' + arr[num % 10 - 1];
//   }
//   return res;
//}

//Объяснение работы Function Declaration
//Почему функции, созданные как Function Declaration доступны
// до объявления?

//Как вы должны уже знать, интерпретатор JavaScript обрабатывает
// код строка за строкой. Функции, однако, являются исключениями:
// интерпретатор вначале пробегается по всему документу с кодом
//  и ищет все функции, объявленные как Function Declaration,
//   и только потом начинает выполнять код документа построчно.

//Функции, созданные как Function Expression, создаются в
// тот момент, когда до них доходит интерпретатор. Поэтому 
// они и недоступны выше места своего объявления.


//Переборка+ сумма пусстых функций в массиве
//let arr = [
//   function () { return 1 },
//   function () { return 2 },
//   function () { return 3 },
//];
//let sum = 0;
//for (let elem of arr) {
//   sum += elem();
//}
//console.log(sum);

//Переборка+сумма пустых функций в объекте
//let obj = {
//   func1: function () { return 1 },
//   func2: function () { return 2 },
//   func3: function () { return 3 },
//};
//let sum = 0;
//for (let key in obj) {
//   sum += obj[key]();
//}

//console.log(sum);

//Сделайте объект с тремя функциями, каждая из которых будет
// принимать параметром массив с числами.
//let obj = {
//   sum: function (arr) {
//      let sum1 = 0;
//      for (let elem of arr) {

//         sum1 += elem;
//      } return sum1;
//   },
//   square: function (arr) {
//      let sum1 = 0;
//      for (let elem of arr) {

//         sum1 += Math.pow(elem, 2);
//      } return sum1;
//   },
//   cube: function (arr) {
//      let sum1 = 0;
//      for (let elem of arr) {

//         sum1 += Math.pow(elem, 3);
//      } return sum1;
//   },
//};
//console.log(obj.sum([1, 2, 3, 4]));
//console.log(obj.square([1, 2, 3, 4]));
//console.log(obj.cube([1, 2, 3, 4]));


//function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3());
//}

//test(function () { return 1; },
//   function () { return 2; }, function () { return 3; });


//function get1() {
//   return 1;
//}
//function get2() {
//   return 2;
//}

//test(get1, get2); // выведет 3

//function test(func1, func2) {
//   console.log(func1() + func2());
//}

//let get1 = function() {
//	return 1;
//}
//let get2 = function() {
//	return 2;
//}

//test(get1, get2); // выведет 3

//function test(func1, func2) {
//	console.log( func1() + func2() );
//}

//let get1 = function () {
//   return 1;
//}
//let get2 = function () {
//   return 2;
//}
//let get3 = function () {
//   return 3;
//}
//test(get1, get2, get3);
//function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3());
//}

//function test(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//      arr[i] = func(arr[i]);
//      console.log(arr);
//   }
//   return arr;
//}

//let arr = [1, 2, 3];
//let func = function (num) {
//   return Math.pow(num, 3);
//};

//console.log(test(arr, func));


//Сделайте функцию func, которая параметрами будет принимать 
//два числа, а возвращать сумму квадрата первого числа с кубом 
//второго числа. Сделайте для этого вспомогательную функцию 
//square, возводящую число в квадрат, и вспомогательную функцию
// cube, возводящую число в куб.
//function func(num1, num2) {
//   function square(num) {
//      return Math.pow(num, 2);
//   }
//   function cube(num) {
//      return Math.pow(num, 3);
//   }
//   return square(num1) + cube(num2);
//}

//console.log(func(2, 3));


//Сделайте функцию func, которая будучи вызвана вот так:
// func(2)(3)(4), вернет сумму переданных в параметры чисел.
//function func(num1) {
//   return function (num2) {
//      return function (num3) {
//         return num1 + num2 + num3;
//      };
//   };
//}
//console.log(func(2)(3)(4));

//function func(num1) {
//   return function (num2) {
//      return function (num3) {
//         return function (num4) {
//            return function () {
//               let arr = [num1, num2, num3, num4];
//               return arr;
//            };
//         };
//      };
//   };
//}

//console.log(func(2)(3)(4)(5)());

//Cчетчик на замыкание
//function getCounter() {
//   let num = 1;
//   return function () {
//      console.log(num);
//      num++;
//   }
//}
//let func = getCounter();
//func();
//func();
//func();
//func();
//let func1 = getCounter();
//func1();

//Получается, что мы реализовали счетчик вызова функций,
// используя замыкание (точнее используя переменную num из
//    замыкания нашей функции).

//Учтите, что каждый вызов функции test будет возвращать
// новую функцию, у которой будет свое замыкание. То есть 
// разные счетчики будут работать независимо:

//function test() {
//	let num = 1;

//	return function() {
//		console.log(num);
//		num++;
//	};
//}

//let func1 = test(); // первый счетчик
//func1();  //выведет 1
//func1();  //выведет 2

//let func2 = test(); // второй счетчик
//func2();  //выведет 1
//func2();  //выведет 2
//Получается, что одна и та же переменная num для разных
// функций будет иметь разное значение!

//То есть если мы вызовем функцию test два раза, то 
//полученные из нее функции будут работать независимым
// образом и каждая из этих функций будет иметь свою
//  независимую переменную num.

//Счетчик до 10 
//function getCounter() {
//   let num = 10;
//   return function () {

//      if (num < 0) {
//         console.log('Counter Stoped!');
//      } else {
//         console.log(num);
//         num--;
//      }

//   }
//}

//let func = getCounter();

//счетчик  , результат один и тот же  разное исполнение
//function test() {
//   let counter = 0;

//   return function () {
//      return function () {
//         console.log(counter);
//         counter++;
//      };
//   };
//}

//let func = test();

//let func1 = func();
//let func2 = func();
//func1();
//func2();
//func1();
//func2();

//function test() {
//	let counter = 0;

//	return function() {
//		return function() {
//			console.log(counter);
//			counter++;
//		};
//	};
//}

//let func = test()();

//let func1 = func;
//let func2 = func;
//func1();
//func2();
//func1();
//func2();

//let counter = 0;

//function test() {
//	return function() {
//		console.log(counter);
//		counter++;
//	};
//}

//let func = test;

//let func1 = func();
//let func2 = func();
//func1();
//func2();
//func1();
//func2();


//function showMessage(from, text) {

//   from = '*' + from + '*'; // немного украсим "from"

//   console.log(from + ': ' + text);
//}

//let from = "Аня";

//showMessage(from, "Привет"); // *Аня*: Привет

//// значение "from" осталось прежним, функция изменила значение локальной переменной
//console.log(from); // Аня
//console.log(from);
//showMessage(from, "Привет");
//showMessage(from, "Привет");
//showMessage(from, "Привет");
//console.log(from);

//function showMessage(text) {
//   // если значение text ложно или равняется undefined, тогда присвоить text значение 'пусто'
//   console.log(text = text || 'пусто');

//}

//showMessage();

//let num1 = prompt('введите число', ' ');
//let x1 = prompt('введите  в какую степень хотите возвести число', ' ');

//function getPow(num, x) {
//   if (x1 < 1) {
//      alert(`степень ${x1} не поддерживается`);
//   } else {
//      return alert(Math.pow(num1, x1));
//   }
//}
//getPow();

//Вызов функции на месте
//let result = function () {
//   return '!';
//}();

//console.log(result);


//let sum = 1 + function (num) {

//   return num;
//}(10);


//console.log(sum); 

//let result = function () { return 1; }() + function () { return 2; }();
//console.log(result);

//(function (num1) {
//   return function (num2) {
//      return function (num3) {
//         console.log(num1 + num2 + num3);
//      }
//   }
//})(1)(2)(3);

//счетчик
//let func = (function () {
//   let num = 1;

//   return function () {
//      if (num < 6) {
//         console.log(num);
//         num++;
//      } else num = 1;
//   }
//})();
//func();
//func();
//func();
//func();
//func();
//func();


//функция колбек 
//let arr = ['kolyan', 'mihail', 'olga', 'dasha', 'katya'];
//for (let elem of arr) {
//   console.log(elem);
//}

//function each(arr, callback) {
//   let result = [];

//   for (let elem of arr) {
//      result.push(callback(elem)); // вызываем функцию-коллбэк
//   }

//   return result;
//} let result = each(['kolyan', 'mihail', 'olga', 'dasha', 'katya'],

//   function (str) {
//      let arrStr = str.split('');
//      let oneWord = arrStr.reverse();
//      let newArr = [];

//      for (let elem of oneWord) {


//         newArr.push(elem);
//      }
//      let rR = newArr.join(' ');



//      return rR;
//   });

//console.log(result);

//let arr = [1, 2, 3, 4, 5];

//function getSumQuaer(arr) {
//   let sum = arr.shift();
//   if (arr.length !== 0) {

//      sum += getSumQuaer(arr) ** 2;
//      console.log(sum);
//      ;

//   }
//   return sum;
//};
//console.log(getSumQuaer(arr));

//let x = '1,234,231,0 10 ';
//function fakeBin(x) {
//   let arr = x.split("");
//   let newArr = [];

//   for (let elem of arr) {
//      if (elem < 5) {
//         newArr.push(0);
//      } else {
//         newArr.push(1);
//      }

//   }
//   let newX = newArr.join('');
//   return newX;
//}
//console.log(fakeBin(x));


//Если дано целое число или число с плавающей точкой, 
//найдите его противоположность.
//function opposite(number) {
//   return -number
//}
//console.log(opposite(5));

//Каков периметр n-й фигуры в последовательности (n ≥ 1)?
//function perimeterSequence(a, n) {
//   return 4 * a * n;
// }


//function finalGrade(exam, projects) {
//   if (exam >= 90 || projects > 10) {
//      return 100;
//   } else if (exam > 75 && projects >= 5) {
//      return 90;
//   } else if (exam > 50 && projects >= 2) {
//      return 75;
//   } else {
//      return 0;
//   }
//}
//console.log(finalGrade(90, 2));
//function switchItUp(number) {
//   let arr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',];
//      return arr[number]
//}

//console.log(switchItUp(0));
//function switchItUp(number) {
//Write your own Code!

//   var b = {
//      0: "Zero",
//      1: "One",
//      2: "Two",
//      3: "Three",
//      4: "Four",
//      5: "Five",
//      6: "Six",
//      7: "Seven",
//      8: "Eight",
//      9: "Nine"
//   };
//   return b[number];


//}

//console.log(switchItUp(9));

//function rentalCarCost(d) {
//   let sum = 0;
//   if (d >= 7) {
//      sum = 40 * d - 50;
//   } else if (d >= 3 && d < 7) {
//      sum = 40 * d - 20;
//   } else {
//      sum = d * 40;
//   }
//   return sum;
//}
//console.log(rentalCarCost(7));

//function getSum(arr) {
//   let sum = Math.pow(arr.shift(), 2);
//   console.log(sum);
//   if (arr.length !== 0) {
//      sum += getSum(arr);
//      console.log(sum);
//   }

//   return sum;
//}

//console.log(getSum([1, 2, 3, 4, 5]));

//function func(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//      sum += elem ** 2;
//   }
//   return sum;
//}
//console.log(func([1, 2, 3, 4, 5]));
//let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]],]];
//function func(arr) {
//   for (let elem of arr) {
//      console.log(elem);
//   }
//}
//console.log(func(arr));

//Переборка многомерного массива с помощью рекурсии
//function func(arr) {
//   for (let elem of arr) {
//      if (typeof elem == 'object') {
//         func(elem);
//      } else {
//         console.log(elem);
//      }
//   }
//}
//func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


//let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
//function rebuild(arr) {
//   console.log(arr.flat(3));
//}
//rebuild(arr);

//let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
//let str = '';
//function func(arr) {

//   for (let elem of arr) {
//      if (typeof elem == 'object') {
//         func(elem);
//      } else {
//         str += elem;
//      }
//   }
//   return str
//}
//func(arr);
//console.log(str);

//метод  map
//let arr = [1, 2, 3, 4, 5, 6, 9];
//let res = arr.map(function (elem) {
//   return Math.sqrt(elem);
//});
//console.log(res);

//let arr = ['1', '2', '3'];

//let res = arr.map(function func(elem) {
//   return elem + '!';
//});
//console.log(res);

//let arr = ['1', '2', '3', '4'];
//let res = arr.map(function (elem) {
//   return elem
//});
//console.log(res.reverse());

//const arr = ['123', '456', '789'];
////const result = arr.map(elem => elem.split("").map(Number));
////console.log(result);
//let res = arr.map(function (elem) {
//   return elem.split('').map(Number);
//})
//console.log(res);

//Дан массив с числами. Используя метод map запишите в каждый
// элемент массива значение этого элемента, умноженное на его
//  порядковый номер в массиве.

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//let result = arr.map(function (elem, index) {
//   return elem * index;
//});

//console.log(result);
//let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//let result = arr.map(function (elem) {
//   return elem.map(num => num);
//});
//console.log(result);

//let arr = ['a', 'b', 'c', 'd', 'e'];

//arr.forEach(function (elem, index) {
//   console.log(elem + index);
//});

//let arr = [1, 2, 3, 4, 5];
//let sum = 0;

//arr.forEach(function (elem) {
//   sum += Math.pow(elem, 2);
//});

//console.log(sum);

//Дан массив с числами. Оставьте в нем только положительные числа.
//let arr = [1, 2, 3, 4, 5];
//let result = arr.filter(elem => elem % 2 === 0);
//console.log(result);

//Дан массив с числами. Оставьте в нем только отрицательные числа.
//let arr = [1, 2, 3, 4, 5];
//let result = arr.filter(elem => elem % 2 !== 0);
//console.log(result);

//let arr = [1, 2, 3, 4, 5];
//let result = arr.filter(elem => elem > 0 && elem < 10);
//console.log(result);

//let arr = ['kol', 'kolyan', 'Mikalai', 'Filipau'];
//let result = arr.filter(elem => elem.length > 5);
//console.log(result);

//Дан массив с числами. Оставьте в нем только те числа,
// произведение которых на их порядковый номер меньше 30
//let arr = [1, 2, 3, 4, 5, 12, 44,];
//let result = arr.filter((elem, index) => elem * index < 30);
//console.log(result);

//Оставьте в нем только обычные элементы.
//let arr = [1, 'string', 2, [3, 4], 5, [6, 7]];
//console.log(arr.filter(elem => typeof elem == 'number'));

//let arr = [1, 2, 3, 4, 5];
//console.log(arr.filter(elem => elem % 2 === 0).length);

//let arr = [2, 4, 6, 8,];
//let res = arr.every(elem => elem % 2 == 0);
//console.log(res);

//let arr = [1, 2, 3, 4, 5,];
//let res = arr.every((elem, index) => elem * index < 30);
//console.log(res);

//let arr = [1, 2, 3, 4, 5, 6, 7];
//let res = arr.some((elem, index) => elem * index > 30);
//console.log(res);

//Оператор spread
//let arr = [1, 2, 3, 4, 5];
//function func(num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
//}
//console.log(func(...arr)); //Синтаксис ...

//Оператор spread
//let arr = [234, 553, 342367, 1237, 4468,];
//let min = Math.max(...arr);
//console.timeLog(min);

//let arr1 = ['a', 'b', 'c'];
//let arr2 = [1, ...arr1, 2, 3];

//console.log(arr2); // выведет [1, 'a', 'b', 'c', 2, 3]

//function func(s1, s2, s3, s4, s5) {
//   return s1 + '-' + s2 + '-' + s3 + '-' + s4 + '-' + s5;
//}
//console.log(func(...'abcde')); // выведет 'a-b-c-d-e'
//let arr = [...'abcde']; // получим массив ['a', 'b', 'c', 'd', 'e']
//console.log(arr);

//Оператор spread не применим к числам:

//let arr = [...12345]; // будет ошибка
//Для решения проблемы следует преобразовывать число в строку, вот так:

//let arr = [...String(12345)]; // получится массив ['1', '2', '3', '4', '5']



//function func(...nums) {//все переданные параметрами числа попадают в массив
//   let sum = 0;
////А теперь запустим цикл по переданному массиву и
//// найдем сумму переданных чисел:
//   for (let num of nums) {
//      sum += num;
//   }

//   return sum;
//}

//let result = func(1, 2, 3, 4);
//console.log(result); //6

//Напишите функцию, которая будет принимать параметрами 
//произвольное количество чисел и возвращать их среднее
// арифметическое.
//let func = function (...rest) {
//   let sum = 0;
//   let countRest = 0;
//   for (let num of rest) {
//      sum += num;
//      countRest++;
//   }
//   return sum / countRest;
//}
//console.log(func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12));


///Функция, сливающая массивы в двухмерный
//let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
//function unite(...arrs) {
//   return arrs;
//}
//console.log(result);// выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]


//Функция, сливающая массивы в один

//function merge(...arrs) {
//   return [].concat(...arrs);
//}
//let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
//console.log(merge(result)); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]


//полиндром
//let str = 'шалаш';

//if (str === str.split('').reverse().join('')) {
//   console.log(true);
//} else {
//   console.log(false);
//}
//-----------------------------------
//let arr1 = [1, 3, 4, 7];
//let arr2 = [2, 5, 6, 6, 10];
//let res = arr1.concat(arr2);
//function mergeArrays(arr1, arr2) {
//   return res.sort(function (a, b) {
//      return a - b;
//   });
//}


//const newSet = new Set(mergeArrays(arr1, arr2));
//const uniqueNumbers = Array.from(newSet); 
//console.log(uniqueNumbers);

//16+18 = 214
//function add(num1, num2) {
//   num1 = num1.toString().split('').reverse();
//   num2 = num2.toString().split('').reverse();
//   let maxNumber = Math.max(num1.length, num2.length);
//   let res = [];
//   for (let i = maxNumber - 1; i >= 0; i--) {
//      res.push(+(num1[i] || 0) + +(num2[i] || 0))
//   }
//   let result = res.reduce((acc, ell) => acc.toString() + ell.toString());
//   return +result;
//}



//let array = [["white", "goodness"]];
//function colourAssociation(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//      arr[i] = { [array[i][0]]: array[i][1] };
//   }
//   return arr;
//}

//console.log(colourAssociation(array));


//function nbDig(n, d) {
//   let arr = [];
//   let result = 0;

//   for (let i = 0; i <= n; i++) {
//      arr.push(Math.pow(i, 2));
//   }
//   let ressultStr = arr.join('');
//   for (let i = 0; i < ressultStr.length; i++) {
//      if (ressultStr[i] == d) {
//         result++;
//      }
//   }
//   return result;
//}
//console.log(nbDig(5750, 0));

//Объеденяет любое количество объектов в 1 и счетает 
//const objB = { a: 3, c: 6, d: 3 }
//const objC = { a: 5, d: 11, e: 8 }
//function myConcat(separator) {
//   let resultObj = [];
//   let arrKeys = [];
//   let arrValues = [];
//   var args = Array.prototype.slice.call(arguments);
//   for (let obj in arguments) {
//      resultObj.push(arguments[obj]);
//   }
//   const merge = data => {
//      const res = {};

//      data.forEach(objWars => {
//         for (let [key, value] of Object.entries(objWars)) {
//            if (res[key]) {
//               res[key] += value;
//            } else {
//               res[key] = value;
//            }
//         }
//      });
//      return res;
//   };
//   return merge(resultObj);
//}

//console.log(myConcat(objB, objC,));


//for (let elem of resultObj) {
//   for (let key in elem) {

//      arrKeys.push(key);
//      arrValues.push(elem[key])
//   }
//}
//console.log(arrKeys)
//console.log(arrValues)
//let objFinish = {};

//for (let i = 0; i < arrKeys.length; i++) {
//   if (objFinish[i] === undefined) {
//      objFinish[arrKeys[i]] = arrValues[i];
//   } else if (objFinish[i] !== undefined) {
//      objFinish[arrKeys[i]] = arrValues[i];
//   }


//}
//let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'f'];
//let count = {};

//for (let elem of arr) {
//   if (count[elem] === undefined) {
//      count[elem] = 1;
//   } else {
//      count[elem]++;
//   }
//}

//for (let elem of resultObj) {
//   console.log(elem)

//   arrKeys.push(Object.keys(elem));
//   arrValues.push(Object.values(elem))
//   console.log(arrKeys)
//   console.log(arrValues)


//}


//С помощью двух вложенных циклов выведите на
// экран следующую строку:
//11 12 13 21 22 23 31 32 33

//for (let i = 11; i <= 33; i += 10) {
//   console.log(i)
//   for (let j = 0; j <= 2; j++) {
//      const num = i + j;
//      document.write(num + ' ')
//   }
//}





//let arr1 = [7];
//let arr2 = [];

//function findMissing(arr1, arr2) {
//   arr1.sort();
//   arr2.sort();
//   for (let i = 0; i <= arr1.length - 1; i++) {
//      if (arr1[i] === arr2[i]) {

//      } else {
//         return arr1[i];
//      }

//   }
//}

//console.log(findMissing(arr1, arr2))


// А Я РЕШИЛ СДЕЛАТЬ ТАК=))))
//let n = 1.34;
//let res = n.toString().split('.');
//let res2 = res.shift()
//let res3 = res.join('')
//console.log(+('0.' + res3))


//ВОТ ПРОСТЕЙШЕЕ+)))))))
//function getDecimal(n){
//   return Math.abs(n%1);
// }

//let numbers = [1, 4, 9, -1, 0, 15, 15, 15, 16];

//function maxTriSum(numbers) {
//   let arr = numbers.sort(function compareNumbers(a, b) {
//      return a - b;
//   }).reverse();
//   let newSet = new Set(arr)
//   let uniqueNumbers = Array.from(newSet);
//   let res = uniqueNumbers[0] + uniqueNumbers[1] + uniqueNumbers[2];
//   return res
//}

//console.log(maxTriSum(numbers))

//let obj1 = {
//   'algebra': 3,
//   'history': 7,
//   'physics': 8,
//   'geography': 4,
//   'chemistry': 10
//};
//let obj2 = {
//   'algebra': 6,
//   'history': 7,
//   'physics': 8,
//   'geography': 9,
//   'chemistry': 4
//};
//let obj3 = {
//   'algebra': 9,
//   'history': 7,
//   'physics': 9,
//   'geography': 9,
//   'chemistry': 10
//};
//function whoseBicycle(diary1, diary2, diary3) {
//   let sumFirs = 0;
//   let sumSecond = 0;
//   let sumThird = 0;
//   for (let key in diary1) {
//      sumFirs += diary1[key];
//   }
//   for (let key in diary2) {
//      sumSecond += diary2[key];
//   }
//   for (let key in diary3) {
//      sumThird += diary3[key];
//   }

//   if (sumFirs > sumSecond && sumFirs > sumThird) {
//      console.log(sumFirs)
//      return 'I need to buy a bicycle for my first son.'
//   } else if (sumSecond > sumFirs && sumSecond > sumThird) {
//      console.log(sumSecond)
//      return 'I need to buy a bicycle for my second son.'
//   } else {
//      console.log(sumThird)
//      return 'I need to buy a bicycle for my third son.'
//   }
//}

//console.log(whoseBicycle(obj1, obj2, obj3))



//Odd-Even String Sort

//function sortMyString(S) {
//   let arr = Array.from(S);
//let group1 = '';
//let group2 = '';
//for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//      group1 += arr[i]
//   } else {
//      group2 += arr[i]
//   }
//}
//    return group1 + ' ' + group2;
//}


//function isPowerOfTwo(n) {
//   for (let i = 1; i <= n; i *= 2) {
//      if (i == n) {
//         console.log(i)
//      } else {
//         console.log(i)
//      }

//   }
//}

//console.log(isPowerOfTwo(32));

//let List = [
//   { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
//   { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
//];
//function sentence(List) {
//   return List.sort((a, b) => Object.keys(a) - Object.keys(b)).map(item => item[Object.keys(item)]).join(' ');;

//}
//console.log(sentence(List))

//let str = "aeiou, abc";
//let arr = Array.from(str);
//let arr2 = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

//for (let elem of arr) {
//   if (arr2.includes(elem)) {
//      console.log('1')
//   } else (
//      console.log('0')
//   )
//}
//console.log(arr)


//let arr = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];

//function dataReverse(data) {
//   let arr2;
//   let arr3 = [];
//   let arr5 = '';
//   let arr6 = [];
//   for (let i = 0; i < data.length; i + 8) {
//      arr2 = data.slice(0, 8);
//      arr3.push(arr2);

//   }
//   let arr4 = arr3.reverse();

//   for (let elem of arr4) {
//      for (let elem2 of elem) {
//         arr6.push(elem2);
//      }
//   }

//   return arr6
//}

//console.log(dataReverse(arr))

//let calculator = {
//   read() {
//      this.a = + prompt('введите число 1', 1)
//      this.b = + prompt('введите число 2', 2)
//   },
//   sum() {
//      return this.a + this.b;
//   },
//   mul() {
//      return this.a * this.b;
//   }

//};
//calculator.read()
//alert("Sum=" + calculator.sum());
//alert("Mul=" + calculator.mul());


//function Calculator() {
//   this.read = function () {

//      this.a = + prompt('введите число 1', 1)
//      this.b = + prompt('введите число 2', 2)
//   };
//   this.sum = function () {
//      return this.a + this.b;
//   };
//   this.mul = function () {
//      return this.a * this.b;
//   };

//};

//let calculator = new Calculator();
//calculator.read()
//alert("Sum=" + calculator.sum());
//alert("Mul=" + calculator.mul());


//Подмассив наибольшей суммы
//let arr = [100, -9, 2, -3, 5];

//function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) {
//      partialSum += item;
//      maxSum = Math.max(maxSum, partialSum);
//      console.log(maxSum)
//      if (partialSum < 0) partialSum = 0;
//   }

//   return maxSum;
//}

//console.log(getMaxSubSum(arr))



//let arr = ['t', 'e', 's', 't'];

//let arr2 = arr.slice();
//console.log(arr2)

//let arr = [1, 2, 3, 4, 5];

//let x2 = arr.map(elem => Math.pow(elem, 2));

//console.log([1, 2, 3, 4, 5].map(elem => Math.pow(elem, 2)));

//let str = 'my-short-string'

//function camelize(str) {
//   return str.split('-')
//      .map((element, index) => index == 0 ? element : element[0].toUpperCase() + element.slice(1))
//      .join('')
//}
//console.log(camelize(str))

//let arr = [5, 3, 8, 1];

//let filter = function (arr, a, b) {

//   return arr.filter(item => item >= a && item < b)
//}

//console.log(filter(arr, 1, 4))
//console.log(arr)


//ДЛЯ АККАРДИОНА 

//const btn = document.querySelectorAll('.accordeon_btn');
//const item = document.querySelectorAll('.accordeon_item');
//btn.forEach(triger => triger.addEventListener('click', () => {
//   const parent = triger.parentNode;
//   if (parent.classList.contains('active')) {
//      parent.classList.remove('active')
//   } else {
//      item.forEach(el => {
//         el.classList.remove('active');
//         parent.classList.add('active')
//      })
//   }


//}))



//function genRange(arr, letter, start, end, count) {
//   var taken = [];
//   for(var i = 0; i < count; ) {
//     r = Math.floor(Math.random() * (end - start) + start);
//     if(taken.indexOf(r) == -1) {
//       taken.push(r);
//       arr.push(letter + r);
//       i++;
//     }
//   }
//   console.log(taken)
// }
// function getCard()
// {
//   var arr = [];
//   genRange(arr, "B", 1, 15, 5);
//   genRange(arr, "I", 16, 30, 5);
//   genRange(arr, "N", 31, 45, 4);
//   genRange(arr, "G", 46, 60, 5);
//   genRange(arr, "O", 61, 75, 5);
//   console.log(arr)
//   return arr;
// }

// getCard()

//var countBits = function(n) {
//   let num = n.toString(2);
//   let count=0;

//   for(let i =0; i<num.length;i++){
//      if(num[i]==='1'){

//         count++
//      }
//   }
//   return count
//};


//var whatTimeIsIt = function(angle) {
//   const time = Math.floor(angle * 2);
//   console.log('time' ,time)
//   const hours = Math.floor(time / 60)
//   console.log('hours' ,hours)
//   const minutes = time - (hours * 60);
//   console.log('minutes' ,minutes)
//   const hoursTitle = (hours === 0) ? 12 : (hours < 10) ? `0${hours}` : hours;
//   console.log('hoursTitle' ,hoursTitle)
//   const minutesTitle = (minutes < 10) ? `0${minutes}` : minutes;
//   console.log('minutesTitle' ,minutesTitle)
//   return `${hoursTitle}:${minutesTitle}`;
// }

//console.log( whatTimeIsIt(250))


//Круто)
//let closeBtn = document.querySelectorAll('.remove-button');
//closeBtn.forEach(el=>{
//  el.addEventListener('click', ()=>{
//   el.parentElement.hidden = !el.parentElement.hidden;
//  })
//})


//let time = document.querySelector('.time');
//function showTime() {
//   const date = new Date();
//      const currentTime = date.toLocaleTimeString();
//   setTimeout(() => {
//      showTime()
//      time.textContent = currentTime;
//   }, 1000);
//}
//showTime()

//console.log(showTime())
//let newDate = addZerro(date.getHours())+':'+date.getMinutes()+':'+date.getSeconds()+' '+ date.getDate()+'.'+ (date.getMonth()+1)+'.'+date.getFullYear();

//function addZerro(num){

//   if(num >=0 && num <= 9){
//      return '0'+ num;
//   } else {
//      return num
//   }
//}
//console.log(newDate);
//console.log(date.getHours())

//console.log(addZerro(date.getMonth()+1))
////document.querySelector('.date').innerHTML = 'date';

//function addZero(num) {
//	if (num >= 0 && num <= 9) {
//		return '0' + num;
//	} else {
//		return num;
//	}
//}

//console.log(
//	addZero(date.getFullYear()) + '-' + 
//	addZero(date.getMonth() + 1) + '-' +
//	addZero(date.getDate())
//);


//! Из цифр в прописные числа
//function toReadable(number) {
//   const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
//   const decimel = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
//   let resDecimel = decimel[Math.floor(number / 10) - 2];
//   let hundred = Math.floor(number / 100);
//   let remainder = number % 100;
//   if (number >= 100 && number < 1000 && number % 100 > 0 && number % 100 < 20 && 10 != 0) {
//      return numbers[hundred - 1] + ' hundred' + ' ' + numbers[remainder % 100 - 1];
//   } else if (number >= 100 && number < 1000 && number % 100 === 0) {
//      return numbers[hundred - 1] + ' hundred';
//   }

//   if (number == 0) {
//      return 'zero';
//   } else if (number < 20) {
//      return numbers[number - 1];
//   } else if (number >= 20 && number < 100 && number % 10 == 0) {
//      return resDecimel;
//   } else if (number >= 20 && number < 100) {
//      return resDecimel += ' ' + numbers[number % 10 - 1];
//   } else if (number >= 100 && number < 1000 && number % 10 != 0) {
//      return numbers[hundred - 1] + ' hundred' + ' ' + decimel[Math.floor(remainder / 10) - 2] + ' ' + numbers[remainder % 10 - 1];
//   } else {
//      return numbers[hundred - 1] + ' hundred' + ' ' + decimel[Math.floor(remainder / 10) - 2];
//   }
//};
//console.log(toReadable(70))

//! Реверс
//function reverse(n) {
//   return +Math.abs(n).toString().split('').reverse().join('')
//}

//console.log(reverse(-538))

//! матрица
//const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//];
//function aaa(matrix) {
//   let arr = [];
//   let arr2 = [];
//   for (let i = 0; i < matrix.length; i++) {
//      if (i % 2 == 0) {
//         arr.push(matrix[i]);
//      } else {
//         arr.push(matrix[i].reverse())
//      }
//   }
//   for (let num of arr) {
//      for (let num2 of num) {
//         arr2.push(num2)
//      }
//   }
//   return arr2.join().split(',').map(Number);
//};
//console.log(aaa(matrix))
//console.log(matrix)

//(!(numArr % 2) ? arr : arr.reverse())
//acc.concat();

//for (let i= 0; i<matrix.length && matrix[i].length>1;i++){
//   if(i%2 !==0){
//      matrix[i].reverse();
//   }
//}
//return matrix.join().split(',').map(Number);


//! Шифр Морзе
//const MORSE_TABLE = {
//   'a': '.-',
//   'b': '-...',
//   'c': '-.-.',
//   'd': '-..',
//   'e': '.',
//   'f': '..-.',
//   'g': '--.',
//   'h': '....',
//   'i': '..',
//   'j': '.---',
//   'k': '-.-',
//   'l': '.-..',
//   'm': '--',
//   'n': '-.',
//   'o': '---',
//   'p': '.--.',
//   'q': '--.-',
//   'r': '.-.',
//   's': '...',
//   't': '-',
//   'u': '..-',
//   'v': '...-',
//   'w': '.--',
//   'x': '-..-',
//   'y': '-.--',
//   'z': '--..',
//   '1': '.----',
//   '2': '..---',
//   '3': '...--',
//   '4': '....-',
//   '5': '.....',
//   '6': '-....',
//   '7': '--...',
//   '8': '---..',
//   '9': '----.',
//   '0': '-----',
//   ' ': ' ',
//};
////obj[keys[i]] = values[i];
//let expr = 'hello world'

//function decode(expr) {
//   let arr = [];
//   let str = '';
//   for (let i = 0; i < expr.length; i++) {
//      arr.push(MORSE_TABLE[expr[i]])
//   }
//   let str2 = arr.join(',').split(',');
//   for (let j = 0; j < str2.length; j++) {
//      console.log(str2[j])

//      //padStart(10,'0')
//      //if (str2[j] === '.') {
//      //   str += '10'
//      //}
//      //if (str2[j] === '-') {
//      //   str += '11'
//      //}
//      //if (str2[j] === ' ') {
//      //   str += '**********'
//      //}
//   }
//   return str2
//}



//console.log(decode(expr))

//function isSquare(n) {
//   console.log(Math.sqrt(27) % 1)
//   return Math.sqrt(n) % 1 === 0;
//}

//console.log(isSquare(26))

let obj1 = { 1: 2 };
let obj2 = { 2: 3 };

console.log(obj1 + obj2)

