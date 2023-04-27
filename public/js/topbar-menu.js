const avatar = document.querySelector('.topbar-avatar img');
const topbarMenu = document.querySelector('#topbar-menu');
const avatarMenu = document.querySelector('.topbar-menu-avatar img');

avatar.addEventListener('click', function(event) {
    topbarMenu.style.left = '0';
})

avatarMenu.addEventListener('click', function(event) {
    topbarMenu.style.left = "-350px";
})