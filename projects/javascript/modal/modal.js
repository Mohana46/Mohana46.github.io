"use strict";
const modal = document.querySelector(".modal");
const overlay=document.querySelector('.overlay');
const btncloseModal = document.querySelector(".close-modal");
const btnopenModal = document.querySelectorAll(".m1");
console.log(btnopenModal);


const openModal=function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal=function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0;i<btnopenModal.length;i++)
    btnopenModal[i].addEventListener('click',openModal);

    
btncloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);