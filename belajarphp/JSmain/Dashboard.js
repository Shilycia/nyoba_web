function checkElementPosition() {
    const bodyContents = document.querySelectorAll('.body_content');
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    bodyContents.forEach(bodyContent => {
        const rect = bodyContent.getBoundingClientRect();
        if (rect.top >= (windowHeight / 2)) {
            bodyContent.classList.add('white');
        } else {
            bodyContent.classList.remove('white');
        }
    });
}

window.addEventListener('scroll', checkElementPosition);
window.addEventListener('resize', checkElementPosition);


window.onload = checkElementPosition();
// Initial check
checkElementPosition();

window.onload = function unmuted() {
    const video = document.getElementById('myVideo');
    video.muted = false;
}