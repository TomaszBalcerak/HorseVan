//Scrollspy//
$('body').scrollspy({ target: '#navbar-example', offset:300 });

//Usunięcie defektu skaczącego widoku na mobile//
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {

    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//Changing hamburger icon
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

//zamykanie menu gdy kliknie sie gdziekolwiek//

const $menu = $('.first-button');
const ariaValue = document.querySelector(".first-button").getAttribute("aria-expanded");

$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
    $(".first-button").addClass("collapsed");
    $(".first-button").attr("aria-expanded", "false");
    $("#navbar-example").removeClass("show",);
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
  }
 });

//Zamykanie również na ESC
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
    $(".first-button").addClass("collapsed");
    $(".first-button").attr("aria-expanded", "false");
    $("#navbar-example").removeClass("show",);
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
  }
});

//TEST KULKI
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 300)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.querySelector("#HorseCars").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

//TEST
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header").style.height = "16vh";
    document.querySelector(".logo").style.height = "14vh";
  } else {
    document.querySelector(".header").style.height = "22vh";
    document.querySelector(".logo").style.height = "18vh";
  }
}

//efekt zanikania zdjęcia//
  //zmienne globalne wykorzystywane we wszystkich projektach ponizej//
  const $doc = $(document);/*pozwala stosować jquery*/
  const $Home = $('#Home');
  const $main = $('main');

//zanikanie zdjęcia głównego//
$doc.on("scroll", function(){
  const scrollPos = $doc.scrollTop();//aktualna wartość scrolla//
  const sectionOffset = $main.offset().top;//ile od początku strony//
  const HomeHeight = $Home.outerHeight();//wysokość z borderem i paddingiem//

  $Home.css({
  'opacity' : 1 - scrollPos/HomeHeight,//działanie pozwalające utrzymywać wartość opacity jako zmienną wyliczaną z pozycji scrollTop-outerHeight-mega fajny efekt!!//
  'filter': 'grayscale(' +scrollPos/HomeHeight +')'//tez korzysta ze zmiennej wyliczającej pozycję. Dwójkę daliśmy by szybciej efekt szarości zachodzil//
  })
  //zmiana przejrzystości headera gdy zaczniemy scrollować//
  if(sectionOffset<0){
    $(".logo").css("transform", "rotate(360deg)");
  }
})

//Czy element jest w widoku//

const section1 = document.querySelectorAll(".subtitle");
const section2 = document.querySelectorAll(".text");
const sectiontest = document.querySelectorAll(".test");
const section3 = document.querySelectorAll(".offerlist");
const section4 = document.querySelectorAll(".offerheading");

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
//mechanizm wjezdzania rowerów//
  function callbackFunc() {
    for (var i = 0; i < section1.length; i++) {
      if (isElementInViewport(section1[i])) {
        section1[i].classList.add("in-view");
      }
    }
  }

  function callbackFunc2() {
    for (var i = 0; i < section2.length; i++) {
      if (isElementInViewport(section2[i])) {
        section2[i].classList.add("text-in-view");
      }
    }
  }

   function callbackFunc3() {
    for (let i = 0; i < section3.length; i++) {
      if (isElementInViewport(section3[i])) {
        section3[i].classList.add("list-in-view");
      }
    }
  }

  function callbackFunc4() {
    for (let i = 0; i < section4.length; i++) {
      if (isElementInViewport(section4[i])) {
        section4[i].classList.add("head-in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc,);
  window.addEventListener("resize", callbackFunc,);
  window.addEventListener("scroll", callbackFunc,);

  window.addEventListener("load", callbackFunc2,);
  window.addEventListener("resize", callbackFunc2,);
  window.addEventListener("scroll", callbackFunc2,);

  window.addEventListener("load", callbackFunc3,);
  window.addEventListener("resize", callbackFunc3,);
  window.addEventListener("scroll", callbackFunc3,);

  window.addEventListener("load", callbackFunc4,);
  window.addEventListener("resize", callbackFunc4,);
  window.addEventListener("scroll", callbackFunc4,);


//Show google maps//
let item = document.querySelectorAll(".item")[0];
let googlemaps = document.querySelector(".googlemaps");
let showmap = document.querySelector(".showmap");

item.addEventListener("click", showfunction);

function showfunction(){
  googlemaps.classList.toggle("googlemapsyes");
  if(googlemaps.classList.contains("googlemapsyes")){
  showmap.innerHTML="Ukryj";
} else {
showmap.innerHTML="Kliknij by nas znaleźć"
}
}