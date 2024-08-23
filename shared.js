var backdrop = document.querySelector('.back-drop');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector(".toggle-button");
var mobileNav =document.querySelector('.mobile-nav');
var selectPlanButtons = document.querySelectorAll('.plan button');
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click',function() {
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
}
toggleButton.addEventListener('click',function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})
backdrop.addEventListener('click',function(){
    mobileNav.classList.remove('open');
    closeModal();
});
modal.addEventListener('click',closeModal);

function closeModal(){
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}
    
