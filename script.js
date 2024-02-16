
// task1

// let arr= ["bir","iki","uc","dord","bes","alti"]

// arr.pop()
// arr.push("yeddi")
// arr.shift()
// arr.unshift("sifir")
// arr.splice(5,1, "yeddi")
// arr.splice(0,1, "sifir")
// arr.splice(2,2, "on bes")
// console.log(arr);

// task2

// let cumle= "There are many diffirent people in the world"

// cumle.split( " " )
// console.log(cumle.replace("people","animal"));
// console.log(cumle.toLowerCase());
// console.log(cumle.toUpperCase());
// console.log(cumle);

// task3 

// function EnBoyuk(arr) {

//     let maxNum=arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>maxNum) {
//            maxNum=arr[i] 
//         }
//     }
//     return maxNum
// }

// let arr = [ 11,13, 200 , 34]
// console.log(EnBoyuk(arr));


// task4

// let arr = [ 12,25,67,88,24]


// let cut = arr.filter(x=>x%2===0)


// task5

// let arr = [15,9,25,23,45,65]

// function Hasil(params) {

//       return params.filter(x=>x%3===0 && x%5===0).reduce((hasil,num)=>hasil*num,1)

// }
// console.log(Hasil(arr));



// class Calculator{
//       constructor(num1,num2){
//          this.num1=num1
//          this.num2=num2

//       }
//       toplama(){
//             return this.num1+this.num2
//       }
//       cixma(){
//             return this.num1-this.num2
//       }
//       vurma(){
//             return this.num1*this.num2
//       }
//       bolme(){
//             return this.num1/this.num2
//       }
// }
// const newCalc= new Calculator(12,5)

// console.log(newCalc.toplama());
// console.log(newCalc.cixma());
// console.log(newCalc.vurma());
// console.log(newCalc.bolme());



// class cola {
//       constructor(pul) {
//             this.money = pul

//       }
//       #hesab = 0
//       #colaPrice = 5
//       moneyTransfer() {
//             return this.#hesab += this.money
//       }
//       say() {
//             return Math.floor(this.#hesab / this.#colaPrice)
//       }
//       qaliq() {
//             return this.#hesab % this.#colaPrice
//       }

// }
// const cola1 = new cola(13)

// console.log(cola1.moneyTransfer());
// console.log(cola1.say());
// console.log(cola1.qaliq());




// let arr = [2,8,35,8,14,35]
// // let newarr =0

// function tekrarlanan(arr) {
//     let count=0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i]===arr[j]) {
//                 arr.splice(j,1)
//                 count++
//             }

//         }

//     }
//     console.log(arr,count);
// }
// tekrarlanan(arr)



// let cumle = "PF101 qrupu derse gecikir"
// let arr = cumle.split( " " )
// let maxword = ""
// function enuzun(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length>maxword.length) {
//             maxword=arr[i]
//         }

//     }
//     return maxword
// }.                          
// console.log(enuzun(arr));



// function tekcutededler(...num) {
//     let cut = num.filter(x => x % 2 === 0)
//     let tek = num.filter(x => x % 2 === 1)
//     return { cut, tek }
// }


// console.log(tekcutededler(23, 2, 11, 13, 44));


// let product1 = {
//     name: "Alma",
//     category: "Fruit",
//     price: "1,5",
//     weight: "50"
// }
// let product2 = {
//     name: "Ciyelek",
//     category: "Fruit",
//     price: "4",
//     weight: "30"
// }
// let product3 = {
//     name: "Goyce",
//     category: "Fruit",
//     price: "5",
//     weight: "20"
// }
// let product4 = {
//     name: "Banan",
//     category: "Fruit",
//     price: "3",
//     weight: "100"
// }
// let products = [product1, product2, product3, product4]

// let a = prompt("Product add")
// let a1=a.toLowerCase()

// for (let i = 0; i < products.length; i++) {
//    if (a1===products[i].name.toLowerCase()) {
//     console.log(products[i]);
//    }

// }



// task 1

// const div = document.getElementsByClassName("box")
// const ul = document.createElement("ul")
// const li = document.createElement("li")
// const a = document.createElement("a")
// const p = document.createElement("p")
// p.textContent = ("elxan")

// a.appendChild(p)
// li.appendChild(a)
// ul.appendChild(li)
// div[0].appendChild(ul)


// console.log(div);



const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")

const Plus = document.getElementById("btn1")
const Minus = document.getElementById("btn2")
const Mult = document.getElementById("btn3")
const Devide = document.getElementById("btn4")

btn1.addEventListener("click",()=>{
    const number1 = document.getElementById("number1")
    const number2 = document.getElementById("number2")
    const number3 = document.getElementById("number3")

    let sum = Number(number1.value) + Number(number2.value);

    number3.value = sum ;

    console.log(sum);
    number1.value = ""
    number2.value = ""
}) 
    

btn2.addEventListener("click",()=>{
    const number1 = document.getElementById("number1")
    const number2 = document.getElementById("number2")
    const number3 = document.getElementById("number3")

    let minus = Number(number1.value) - Number(number2.value);

    number3.value = minus ;
    console.log(minus);
    number1.value = ""
    number2.value = ""
}) 
    

btn3.addEventListener("click",()=>{
    const number1 = document.getElementById("number1")
    const number2 = document.getElementById("number2")
    const number3 = document.getElementById("number3")

    let mult = Number(number1.value) * Number(number2.value);

    number3.value = mult ;
    console.log(mult);
    number1.value = ""
    number2.value = ""
}) 
    

btn4.addEventListener("click",()=> {
    const number1 = document.getElementById("number1")
    const number2 = document.getElementById("number2")
    const number3 = document.getElementById("number3")

    let devide = Number(number1.value) / Number(number2.value);

    number3.value = devide ;
    console.log(devide);
    number1.value = ""
    number2.value = ""
})