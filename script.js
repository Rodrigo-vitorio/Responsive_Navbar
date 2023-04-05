const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnicon = document.querySelector('.material-symbols-outlined')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
   
    
    
}
