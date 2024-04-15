const openNavBtn = document.getElementById('open_mobile_nav');
const closeNavBtn = document.getElementById('close_mobile_nav');
const defaultNav = document.querySelector('.nav');
const overlayMenu = document.querySelector('.menu_active');

openNavBtn.onclick = () => {
    defaultNav.style.display = 'none';
    overlayMenu.style.display = 'block';
};
closeNavBtn.onclick = () => {
    defaultNav.style.display = 'flex';
    overlayMenu.style.display = 'none';
};