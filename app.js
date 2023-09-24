const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
} 

function close(){
    mainMenu.style.top = '-100%';
}

var words = ['5 words to describe me?', 'Public Speaker', 'Problem Solver', 'Enterprising', 'Empathetic', 'Resilient']
var counter = 0;
var word = document.getElementById("carousel_words");
setInterval(update_carousel_words, 2000);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter=0;
    }
}

var portfolio_words = ['Find all my projects!', 'Follow me on LinkedIn!']
var counter_portfolio = 0;
var portfolio = document.getElementById("stay_tuned");
setInterval(update_stay_tuned, 5000);
function update_stay_tuned(){
    portfolio.innerHTML = portfolio_words[counter_portfolio];
    counter_portfolio++;
    if(counter_portfolio >= 2){
        counter_portfolio=0
    }
}
  
function closeDropdown() {
    var menu = document.getElementById("menu");
    if(window.innerWidth <= 800) {
        menu.style.display = "none";
    }
}
  

