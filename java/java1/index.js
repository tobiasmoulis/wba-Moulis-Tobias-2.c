alert("Hello world");
console.log("Hello js");

let number = 3;
let text = "text JS";
const isReady = false;
const isDown = true;

console.log(text);

const cars = ["Honda","BMW","VW","Audi","Toyota"]

console.log(cars[4]);

cars.forEach((car) => {
    console.log("Tohle je moje oblibene auto");
})

const oneCar = {
    brand: "Honda",
    type: "Civic",
    year: "2006",
    color: "Black",
};

console.log(oneCar.type);

function clickMe() {
    let x = 5;
    let y = 58

    let sum = y + x;
    if ( sum > 10) {
        console.log("cislo je vetsi nez 10")
    } else {
        console.log("cislo je mensi nez 10")
    }

    console.log(sum);
    console.log("klik na button");
}