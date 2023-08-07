// let elements = document.querySelectorAll('.list li');
// elements = [...elements];


// let elementstexts = elements.map(function(element) {
// return element.textContent;
// }).splice(elements.length - 2, 3).join(', ');



// let orderList = document.querySelector(".o-list");
// orderList.textContent = elementstexts;


// let pressBtn = document.querySelector('#press-btn');
// console.log(pressBtn);

// pressBtn.addEventListener('click',function () {
//     console.log(pressBtn.textContent);
// })

// let lastName = document.querySelector("#lastName");
// let lastNameError = document.querySelector("#lastNameError");

// lastName.addEventListener("blur", function () {
// if (lastName.value.length === 0) {
// lastNameError.textContent = "Введите фамилию!";
// } else {
// lastNameError.textContent = "";
// }
// });

// let user = document.querySelector('#users');

// console.log(user.style);

// user.style.color = 'pink';
// user.style.backgroundColor = 'blue';
let shopItemsBtns = document.querySelectorAll(".shop-items .shop-item button");

// перебираем кнопки в цикле
shopItemsBtns.forEach(function (button) {
// вешаем обработчик события по клику на каждую кнопку
button.addEventListener("click", function () {
// получаем родителя кнопки
let parentEl = this.parentElement;

// если добавляется товар в корзину, меняем стили у кнопки и у родителя
if (this.textContent === "В корзине") {
// возвращаем начальные значения
this.textContent = "В корзину";
this.style.background = "rgb(240, 240, 240)";
parentEl.style.background = "aliceblue";
} else {
// меняем стили и текст кнопки
this.textContent = "В корзине";
this.style.background = "#44c767";
parentEl.style.background = "rgb(131, 195, 251)";
}
});
});