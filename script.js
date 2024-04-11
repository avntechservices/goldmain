const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
  $(".productsmenu").hide();
    nav.classList.add("active");
});

siderbarClose.addEventListener("click" , () =>{
  nav.classList.remove("active");
});

body.addEventListener("click" , e =>{
let clickedElm = e.target;
// if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
//          nav.classList.remove("active");
//      }
 });

$(document).ready(function() {
  $(".homepage").show();
  $(".soldoutpage").hide();
  $(".aboutpage").hide();
  $(".contactpage").hide();
  $(".forsalepage").hide();
  // $(".productsmenu").hide();
});

$("#homeid").on("click" , function(){
  $(".homepage").show();
  $(".soldoutpage").hide();
  $(".aboutpage").hide();
  $(".contactpage").hide();
  $(".forsalepage").hide();
  nav.classList.remove("active");
});
$("#soldout").on("click focusout" , function(){
   $(".homepage").hide();
  $(".soldoutpage").show();
  $(".aboutpage").hide();
  $(".contactpage").hide();
  $(".productsmenu").hide();
  $(".forsalepage").hide();
  nav.classList.remove("active");
});

$("#Aboutid").on("click" , function(){
  nav.classList.remove("active");
  $(".homepage").hide();
  $(".soldoutpage").hide();
  $(".aboutpage").show();
  $(".contactpage").hide();
  $(".forsalepage").hide();
});
$("#Contactid").on("click" , function(){
  nav.classList.remove("active");
  $(".homepage").hide();
  $(".soldoutpage").hide();
  $(".aboutpage").hide();
  $(".contactpage").show();
  $(".forsalepage").hide();
});

$("#productsid").on("click" , function(){
  debugger;
  $(".productsmenu").show();
  nav.classList.add("active");
});

$("#forsale").on("click" , function(){
    $(".forsalepage").show();
    $(".homepage").hide();
  $(".soldoutpage").hide();
  $(".aboutpage").hide();
  $(".contactpage").hide();
  $(".productsmenu").hide();
  nav.classList.remove("active");
});