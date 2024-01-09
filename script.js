burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navlist =document.querySelector('.navlist')
rightnav =document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
})

window.onscroll=()=>{
    navbar.classList.remove('fa-times');
    navlist.classList.remove('active');
};


let loadMoreBtn = document.querySelector('.home-package .load-more .btn2');
let currentItem = 3;

loadMoreBtn.onclick =() =>{
let boxes=[...document.querySelectorAll('.home-package .box-container .box')];
for(var i= currentItem; i< currentItem+3; i++)
{
boxes[i].style.display ='inline-block';
};
currentItem += 3;
if(currentItem>=boxes.length){
    loadMoreBtn.style.display ='none';
}
}