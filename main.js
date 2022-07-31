var n = new Number(7);

var s = new String("7");

var d = new Date(2022, 7, 31);

var b = new Boolean(false);

a = new Array(1,2,3,4,5,6,7);

o = new Object( {firstName : "John", lastName : "Doe", age : 7});

sss = "n = " + n + "; s = '" + s + "'; d = " + d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() 
+ "; b = " + b
+ "; a = " + a + "; o = " + o.firstName + " " + o.lastName + " " + o.age;


var boxElem = document.activeElement.querySelector(".exsample");

boxElem.innerHTML = sss;

if (n == Number(s)) {
    var boxElem1 = document.activeElement.querySelector(".exsample1");
    boxElem1.innerHTML = boxElem1.innerHTML + " True";
} ;

if (n == s) {
}
else{
    var boxElem2 = document.activeElement.querySelector(".exsample2");
    boxElem2.innerHTML = boxElem2.innerHTML + " False";
} ;

if (n == d.getMonth()) {
    var boxElem3 = document.activeElement.querySelector(".exsample3");
    boxElem3.innerHTML = boxElem3.innerHTML + " True";
} ;

if (b != true) {
    var boxElem4 = document.activeElement.querySelector(".exsample4");
    boxElem4.innerHTML = boxElem4.innerHTML + " True";
} ;

if  (Number(s) == a[6]) {
    var boxElem5 = document.activeElement.querySelector(".exsample5");
    boxElem5.innerHTML = boxElem5.innerHTML + " True";
} ;

if  (n == o.age) {
    var boxElem6 = document.activeElement.querySelector(".exsample6");
    boxElem6.innerHTML = boxElem6.innerHTML + " True";
} ;

/* 
if (s == String(n)) {
    alert("Да действительно s=n");
  } else {
    alert("Нет s!=n");
} ;

 */



//var boxElem = document.activeElement.querySelector(".result");

//boxElem.innerHTML =  a;




