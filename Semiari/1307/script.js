"use strict";

function num() {
    let num = 123;
    alert(num);
}

// num();

function a() {
   let a = 10;
       a = 20;
    console.log(a);
}

// a();

function aSum() {
    let a = 1 + 2 + 3;
    alert(a);
}

// aSum();

// alert(1+2+3);

function ab() {
    let a = 10;
    let b = 2;
    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a * b);
}

// ab();

function abResult() {
    let a = 10;
    let b = 5;
    let result = a + b;
    console.log(result);
}

// abResult();

function abd() {
    let a = 1;
    let b = 2;
    let d = 3;
    alert(a + b + d);
}

// abd();

function abcd() {
    let a = 10;
    let b = 5;
    let c;
    let d = 7;
    let result;
    c = a - b;
    alert(result = c + d);
}

// abcd();

function floatAB() {
    let a = 1.5;
    let b = 0.75;
    alert(a+b);
}

// floatAB();

function abRemainder() {
    let a = 10;
    let b = 3;
    alert(a % b);
}

// abRemainder();

function aDegree() {
    alert(2**10);
}

// aDegree();

function str() {
    let str = '!!!';
    alert(str);
}

// str();

function jvs() {
    let a = 'java';
    let b = 'script';
    alert(a + b);
}

// jvs();

function HelloWorld() {
    let a = 'Hello';
    let b = 'World';
    alert(a + ' ' + b);
}

// HelloWorld();

function lenWord() {
    let a = 'aaasssddd';
    alert(a.length);
}

// lenWord();

function word() {
    let a = 'a\nb\nc'
    alert(a);
}

// word();

function none() {
    let a;
    alert(a);
}

// none();

function nNone() {
    let a = null;
    alert(a);
}

// nNone();

function tBull() {
    let a = true;
    alert(a);
}

// tBull();

function abMultStr() {
    let a = 'fgbgb';
    let b = 'aaa';
    alert(a*b);
}

// abMultStr();

function del0() {
    alert(10 / 0);
}

// del0();

function del0Minus() {
    alert(-10 / 0);
}

// del0Minus();

function steelA() {
    const PI = 3.14;
    let c = 10;
    alert(c / (2*PI));
}

// steelA();

function strPlusInt() {
    let a = '10';
    let b = '20';
    alert(Number(a) + Number(b));
}

// strPlusInt();

function strPlusPX() {
    let a = '5px';
    let b = '6px';
    let int = Number(a[0]) + Number(b[0])
    alert(int + a.slice(1));
}

// strPlusPX();

function strPlusPxFloat() {
    let a = '5.5px';
    let b = '6.25px';
    let newA = Number(a.slice(0, 3));
    let newb = Number(b.slice(0, 4));
    let float  = newA + newb;
    alert(float + a.slice(3));
}

// strPlusPxFloat();

function intStr() {
    let a = 20;
    let b = 10;
    alert(String(a) + String(b));
}

// intStr();

function numInt() {
    let a = 213;
    let strA = String(a);
    alert(strA.length);
}

// numInt();

function numIntX2() {
    let a = 213;
    let b = 3004;
    let strA = String(a);
    let strB = String(b);
    alert(strA.length + strB.length);
}

// numIntX2();

function newstr() {
    let a = 'abcde'
    console.log(a[0], a[2], a[4]);
}

// newstr();

function reverseString() {
    let a = 'abcde';
    alert(a.split("").reverse().join(""));
}

// reverseString();

function strNum() {
    let a = 'abcde';
    let num = 1;
    alert(a[num]);
}

// strNum();

function strWorld() {
    let a = 'Solo per vendetta';
    console.log(a[16], a[15], a.slice(0, 4))
}

// strWorld();

function intStrSum() {
    let a = '12345'
    alert(Number(a[0]) + Number(a[1]) + Number(a[2]) + Number(a[3]) + Number(a[4]));
}

// intStrSum();

function intStrSumRev() {
    let b = 12345;
    let a = String(b)
    alert(Number(a[0]) + Number(a[1]) + Number(a[2]) + Number(a[3]) + Number(a[4]));
}

// intStrSumRev();

function intStrMultRev() {
    let b = 12345;
    let a = String(b)
    alert(Number(a[0]) * Number(a[1]) * Number(a[2]) * Number(a[3]) * Number(a[4]));
}

// intStrMultRev();

function intStrRev() {
    let b = 12345;
    let a = String(b);
    let newB = a.split("").reverse().join("");
    alert(newB);
}

// intStrRev();


function numb2() {
    let a = 123;
    let num3 = a%10;
    let num2 = Math.floor((a%100)/10)
    let num1 = Math.floor(a/100)
    let res = num3 + num2 + num1
    console.log(res)
}

function userName (name) {
    if (name) {
        alert(`Hi, ${name}`)
    }
    else {
        alert(' Ты кто такой? Давай, досвидания')
    }
}

userName('Lexus');