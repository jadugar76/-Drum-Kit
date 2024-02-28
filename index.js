
let xy = document.querySelectorAll(".drum").length;
for (let i=0 ; i<xy; i++){
  document.querySelectorAll(".drum")[i].addEventListener('click', function(){

     let x = this.innerHTML;

      // let y= this.style.color="white";
    //   Toggle(y);
      ttt(x);
     anik(x);

 });
     document.addEventListener('keypress', function(wxy){

    // let x = this.innerHTML;
     ttt(wxy.key);
     anik(wxy.key);
    

});

 

    
 }

  function ttt (x){
    switch(x){
        case  "w":
            let y = new Audio("sounds/crash.mp3")
    
        y.play();
        break;
        case  "a":
            let s = new Audio("sounds/kick-bass.mp3")
    
        s.play();
        break;
        case  "s":
            let trtr = new Audio("sounds/snare.mp3")
            trtr.play();
            break;
            case  "d":
            let xq = new Audio("sounds/tom-1.mp3")
    
        xq.play();
        break;
        case  "j":
            let yu = new Audio("sounds/tom-2.mp3")
    
        yu.play();
      break;
      case  "k":
        let yt = new Audio("sounds/tom-3.mp3")

    yt.play();
  break;
  case  "l":
      let yq = new Audio("sounds/tom-4.mp3")

      yq.play();
  break;
    
    
     }

  
    }


  function anik(yyyyy) {
      let xx = document.querySelector("."+yyyyy)
       xx.classList.add("pressed");
       setTimeout (function(){
        xx.classList.remove("pressed");
       }, 200)
         }
 


 
//  let Audio = new Audio('sounds/');
// x.play();

// ("sounds"+ "/crash"+".mp3");
//     // console.log("aniket");



// for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
//  {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function()
//   {
//    var sound= this.innerHTML;
//    makeSound(sound)
//   });

 
//  function (){
//     alert("fuck me");
// //     // let aniket = ("sounds"+ "/crash"+".mp3");
// //     // console.log("aniket");
//  }



// document.querySelector("button").addEventListener("click", sound );

 
// function sound(){
//     alert("fuck me");
//     // let aniket = ("sounds"+ "/crash"+".mp3");
//     // console.log("aniket");
// }
