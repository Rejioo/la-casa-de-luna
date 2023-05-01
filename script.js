const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const a = document.querySelector('a');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = 'white';
        body.style.color = 'black';
        a.style.color="black";
        
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        a.style.color="white";
        body.style.card.background='black';
        body.style.transition = '2s';
    }
});