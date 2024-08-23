var backdrop = document.querySelector('.back-drop');
var modal = document.querySelector('.modal');
var modalNo = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click',function(){
        backdrop.style.display='block';
        modal.style.display='block';
    })
backdrop.addEventListener('click',function(){
    backdrop.style.display='none';
    modal.style.display='none';
})
modalNo.addEventListener('click',function(){
    backdrop.style.display='none';
    modal.style.display='none';
})
    
}