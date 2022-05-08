
/**
 * Define Global Variables
 * 
*/
let secLists = document.querySelectorAll(".landing__container");
let head = document.createElement("header");
let tab = document.createElement("table");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//to make table fixed in the top
function styleHT(){

    head.style.backgroundColor = "#000099";
    tab.style.position.fixed = true ;
}

//other than styling, it name the nav name to the header of the paragraph automatically
function styleTD(eleTD, it){

    eleTD.style.padding = "20px";
    eleTD.textContent = it.firstElementChild.textContent;
    eleTD.style.border = "solid";
    eleTD.style.borderColor = "black";

}

//to see which section being viewed
function active(eleTD, secList){


window.addEventListener("scroll", function(){

    let yx = secList.getBoundingClientRect();
    if (yx.y < 300 && yx.y > -300){
        eleTD.style.backgroundColor = "green";
        secList.style.backgroundColor = "grey";
    } else {
        eleTD.style.backgroundColor = "blue";
        secList.style.backgroundColor = "rgba(255, 255, 255, 0.187)";
    }
});

}

//for hovering color
function styleEle(eleTD){


    eleTD.addEventListener("mouseenter",function(){

        eleTD.style.backgroundColor = "#884dff";
          });

        
     eleTD.addEventListener("mouseleave",function(){
        
         eleTD.style.backgroundColor = "#000099";
            });
}

/**
 * End Helper Functions
 * 
 * 
*/

//the scroll to the paragraph
function scrollEle(eleTD, it){

    eleTD.addEventListener('click',function(){
        let x = it;

         x.scrollIntoView({behavior: "smooth"});
        
    });

}




//it repeats to set every element to the necessary style and functions
for (let secList of secLists) {
    
    let eleTD = document.createElement("li");

    eleTD.style.display = "inline-block";
    
    styleTD(eleTD,secList);

    scrollEle(eleTD, secList);

    styleEle(eleTD);

    active(eleTD, secList);

    tab.appendChild(eleTD);

}




styleHT();


//adding the table to a header and the header to the top (firstelement) of 
//the body
head.appendChild(tab);
document.body.firstElementChild.appendChild(head);
