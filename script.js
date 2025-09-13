const channels = Array.from(document.getElementById('channels').children);
const content = Array.from(document.getElementById('content').children);

const changeTab = (tab) => {
    content.forEach(child => {
        child.id === tab ? child.classList.add('active') : child.classList.remove('active');
    });
    channels.forEach(child => {
        child.getAttribute('data-tab') === tab ? child.classList.add('active') : child.classList.remove('active');
    });
};

channels.forEach(tab => {
    tab.addEventListener('click', (event) => {
        changeTab(event.currentTarget.getAttribute('data-tab'));
    })
});

//switch tab on load when tab name is appended to url
document.addEventListener('DOMContentLoaded', () => {
    window.location.hash && changeTab(window.location.hash.substring(1));
});