/************Question 1************** *
function myFunction(){
    document.getElementById("demo").innerHTML = "Muskan"; 
}*/

/**********Q2************** 
let button = document.getElementById("myFunction");
button.addEventListener("click", function(){
 alert("button clicked!");
}); *


/*************Q3***************** 
 var create = document.createElement('li');
 create.textContent = ('ishika');
 document.getElementById('demo').appendChild(create); */

/**********Q4************
function motivational(){
    var letterWrite = document.getElementById("myDream");
        if(letterWrite.style.display === "none"){
            letterWrite.style.display = "block";
        }
        else(letterWrite.style.display = "none");
            
        

        
    } */

    /****************************Q5*************************** 

function valideForm(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === '' ||password === ''){
      alert("please fillup the form.");
      return false;
    }
    return true;

} */
/**********************Q6***************************
var common = 0;
var images = document.querySelectorAll(".carousel-img");
function myFunction(){
    images[common].style.display = 'none';
    common = (common + 1) % images.length;
    images[common].style.display = 'block';
} */


/****Q7****************
document.getElementById('filter').addEventListener('input', function(){
    var content = this.value.toLowerCase();
    var filterItems = document.querySelectorAll('#filterList li');
    filterItems.forEach(function(item){
        var itemText = item.textContent.toLowerCase();
        item.style.display = itemText.includes(filterList) ? 'block' : 'none';
    })
    
}) 
 
function drangstart(event){
    event.dataTransfer.setdata('text/plain', 'Dragged Element');
}
function allowdrop(event){
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var draggedElement = document.createElement('div');
    draggedElement.textContent = data;
    document.getElementById('dropZone').appendChild(draggedElement);
} */
let x = 7;
if( x > 7 ){
    console.log("x is greater then than 5");
}
    
        
    

/*function myDream(){
    var id = document.getElementsByName("button")[0].id;
    if(id == 1){
        document.getElementById("good").innerHTML = "hey there";
        document.getElementsByName("button")[0].id=0;
    }
    else{
        document.getElementById("good").innerHTML = " kon who are you";
        document.getElementsByName("button")[0].id=1;
    }
}


















/*let fullName = "tony stark";
let age = 24;
console.log(fullName);

fullName="muskan";
console.log(fullName);
let a="100";
let name="765";
console.log(name-a);
alert("my first javascript");
const m = "23"*/
//console.dir(document.body);
//console.log(document.body);
//document.body.style.h1="muskan";
//let muskan = document.getElementById("muskan");
//console.dir(muskan);
//let heading = document.getElementsByClassName("heading")
//console.dir(heading);
//let element = document.querySelector("p");
//console.dir(element);
//let allEl = document.querySelectorAll("p");
//console.dir(allEl);
//let div = document.querySelector("div");
//console.log(div);

//let id = div.getAttribute("id");
//console.log(id);
//let div = document.querySelector("div");
//div.style.backgroundColor = "blue";

//div.style.fontSize = "24px";
//div.style.color = "pink";
//let newBtn = document.createElement("button");
//newBtn.innerText = "Click me!";
//console.log(newBtn);
//let div = document.querySelector("div");
//div.append(newBtn);


//let newBtn = document.createElement("button");
//newBtn.innerText = "Click me!";
//console.log(newBtn);
//let div = document.querySelector("div");
//div.prepend(newBtn);


/*****************problem solving***************** */


/*****************Create A button**********************/
//let newBtn =document.createElement("button");
//newBtn.innerText = "Click me";
//console.log(newBtn);


//let body = document.querySelector("body");
//body.prepend(newBtn);


//newBtn.style.color = "white";
//newBtn.style.backgroundColor = "red";
//newBtn.style.border = "1px sollid pink";


/*const student = {
    fullName: "Muskan kumari",
    marks:94,
    printMarks: function (){
        console.log("marks = ", this.marks);
        
        
    },
}; */





/***********************************10 questions****************************************/

/**function changeText() {
    var element =
    document.getElementById("myElement");
    element.textContent = "New Text";
}



/*********Q2********** */

/**let button = document.getElementById("myButton");
button.addEventListener("click",function(){
    alert("Button clicked!");
});


/***********Q3****************** */

/**function addElement() {
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("this is a dynamically added paragraph.");
    newParagraph.appendChild(textNode);
    var container = document.getElementById("container");
    container.appendChild(newParagraph);

}

/***************Q4********************/
/**function toggleVisibility() {
    var element = document.getElementById("toggleElement");
    if (element.style.display === "none"){
        element.style.display = "block";

    }
    else{
        element.style.display = "none";
    }
}


/******************Q5************************/

/**function validateForm(){
    var name = document.getElementById("name").Value;
    
    var email = document.getElementById("email").value;

    if(name == ""){
        alert("please enter your name");
        return false;
    }
    if(email == ""){
        alert("please enter your email id ");
        return false;
    }
    var emailRegex = /^\s+@\.\s+$/;
    if(!emailRegex.test(email)){
        alert("please enter a valid email address");
        return false;
    }

}


/**********************Q6*****************************/
let next = document.querySelector('.next');
let pre = document.querySelector('.pre');


next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slider').appendChild(items[0]);
})



