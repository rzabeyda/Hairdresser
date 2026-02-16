let lastScroll = 0;
const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 50) {
        topBar.classList.add('top-bar-hidden');
    } else {
        topBar.classList.remove('top-bar-hidden');
    }
    lastScroll = currentScroll;
});
