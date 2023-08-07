// let arr = [1,2,3,4,5];

// function arrConsole (arr)
// {
//     for (let value of arr) {
//         console.log(value);
//     }
// };

// arrConsole(arr);

// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];

// fruits.pop();
// fruits.pop();
// fruits.push('Пиво', 'Коньяк', 'Вобла');
// console.log(fruits)

// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];

// console.log(pets.slice(3, 7));

// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let newNums = nums.splice(4, 3);
// console.log(newNums);

// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];

// fruits.forEach( function (fru, index){
//     let str = `<h3>Сегодня фруктовая корзина состоит из фрукта ${fru} под номером ${index}<h3>`;
//     document.write(str);
// })

// let shopItems = [
//     {
//     item: 'book',
//     qty: 2,
//     price: 100,
//     },
//     {
//     item: 'table',
//     qty: 1,
//     price: 1000,
//     },
//     {
//     item: 'PC',
//     qty: 1,
//     price: 3000,
//     },
//     ];
    
//     let Price = shopItems.map(function(product) {
//     return product.qty * product.price;
//     })
    
//     let sum = 0

//     for (let value of Price){
//         sum += value
//     }

//     console.log(sum)

// let sum = (num1 = 0, num2 = 0) => {
//     return num1 + num2;
// }

// alert(sum(1, 2));

let authors = [
    {
    author_id: 1,
    first_name: "Иван",
    last_name: "Бунин",
    },
    {
    author_id: 2,
    first_name: "Лев",
    last_name: "Толстой",
    },
    {
    author_id: 3,
    first_name: "Александр",
    last_name: "Пушкин",
    },
    {
    author_id: 4,
    first_name: "Федор",
    last_name: "Достоевский",
    },
    {
    author_id: 5,
    first_name: "Максим",
    last_name: "Горький",
    },
    {
    author_id: 6,
    first_name: "Николай",
    last_name: "Гоголь",
    },
    ];

    

    // let sum222 =[];
    
    // for(let i = 0; i < authors.length; i++ ) {
    //     sum222.push(authors[i].last_name)
    // }

    // console.log(sum222)
    
    // let sum333 = sum222.reduce(function (last_name, currVal){
    //     return last_name + currVal + ", ";
    // })

    // console.log(sum333);

    let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];

    let min = nums.reduce((min, carrValue) => Math.min(min, carrValue));
    console.log(min);

