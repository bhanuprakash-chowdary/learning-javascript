let value = 10;

value=70;

console.log(value);

//object
let myBio = {
    name:'bhanu',
    value:76,
    sex:'male',
    work:function(){
        console.log("started working")
    },
    test:function(){
        console.log(this.name);
    }
}

//constuctor
var Car = function(driver, age, speed){

    this.driver=driver;
    this.age=age;
    this.speed=speed;
    this.drive=function(time){
        console.log(speed*time);
    }
    // return age;
}

var obj1=new Car("Bhanu",40,80);
obj1.drive(2);





console.log(myBio);

myBio.test()

let arr = [1,2,3,4,5,6] 

console.log(arr);

console.log("The Even Numbers for above arr are ");

printEven(arr);

function printEven(sds){
    let i=0;
    while(i<sds.length){
        if(sds[i]%2==0){
            console.log(sds[i])
        }
        i++
    }
}


if(5>8){
    document.writeln("8 is less")
}else{
    document.writeln("5 is less than 8")
}

document.writeln();
let obj=new Object();

obj.maxSpead=90;

obj.driver="Bhanuprakash"

document.writeln(obj.driver);

obj.drive = function(){ console.log("I'm driving ,hey")}

// obj.drive()

console.log(obj.drive())
// alert("Prone to Browser")




// let divContent= document.getElementsByTagName("title");
// divContent[0].innerHTML = "My First JavaScript Application"

//Changing attributes of the element
let divContent= document.getElementsByTagName("h1");
divContent[0].innerHTML = "My First JavaScript Application"


let myContent = document.getElementsByTagName("p")
myContent[0].innerHTML = "Robert Di Niro , Say Hello to my little friend"
// myContent[0].textContent;


//Changing CSS Style of the element
let header=document.getElementsByTagName("h1");
header[0].setAttribute("id","header1")
header=document.getElementById("header1");
header.style = "position: relative"
header.speed=90
header.style.left = "20px"
header.setAttribute("style","position: relative; left: 20px; color: red")
header.style.color ="blue"
header.style.backgroundColor ="red"

header.setAttribute("onClick","alert('You complete me')")



//Adding Elements to the DOM

let menu=document.getElementById("main-nav").getElementsByTagName("ul")[0];

newLi= document.createElement("li")

menu.appendChild(newLi)
newLi.innerText="list 6"

menu.insertBefore(newLi,menu.getElementsByTagName("li")[0])
