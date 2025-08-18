
document.addEventListener("DOMContentLoaded" , function(){


    const dropDownMenu = document.querySelector('.dropdown_menu');
    const dropDownMenuIcon = document.querySelector('.toggle_btn');
    const  toggleBtnIcon =document.querySelector('.toggle_btn i');

    dropDownMenuIcon.onclick= function(){
        dropDownMenu.classList.toggle('open');
        const isOpen =dropDownMenu.classList.contains('open');

            toggleBtnIcon.classList= isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';

    }
});