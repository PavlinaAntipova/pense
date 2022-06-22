const menu = document.querySelector('.js-menu')
const btnClose = document.querySelector('.js-close');
const btnOpen = document.querySelector('.js-open');


const onClose = () => {
  menu.classList.remove('isOpen');
  bodyScrollLock.enableBodyScroll(document.body);
};
  
const onOpen = () => {
  menu.classList.add('isOpen');
  bodyScrollLock.disableBodyScroll(document.body);
  };


btnClose.addEventListener('click', onClose);
btnOpen.addEventListener('click', onOpen);
menu.addEventListener('click', onClose);


  


  




