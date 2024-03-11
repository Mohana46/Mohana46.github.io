"use strict";
function openModal(element) {
    document.getElementById('modal-image').src = element.src;
    document.getElementById('modal').classList.remove('hidden');
    document.getElementsByClassName('overlay')[0].classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementsByClassName('overlay')[0].classList.add('hidden');
  }