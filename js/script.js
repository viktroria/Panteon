let scrolllDown = document.querySelector('#scroll-down');
let point = document.querySelector('#point');

scrolllDown.addEventListener('click', function(){
    point.scrollIntoView({block: "center", behavior: "smooth"});
});

let openMenu = document.querySelector('.menu');
let showMenu = document.querySelector('.show-menu');

openMenu.addEventListener('click', function (e){
    e._isClick = true;
    this.classList.toggle('burger-active');
    showMenu.classList.toggle('hide');
})

document.body.addEventListener('click', function(e){
    if(e._isClick == true) return;
    showMenu.classList.add('hide')
})

