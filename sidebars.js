/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

var active = document.getElementById('main_menu');

function handleOnClick(event){
    if(event.target.id!==active.id+"_btn"){
      active.classList.toggle('hidden');
      let section_id = event.target.id.replace("_btn", "");
      active = document.getElementById(section_id);
      active.classList.toggle('hidden')
    }
}