
let bg = document.querySelector('.main__decoration');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth * 0.3;
    let y = e.clientY / window.innerHeight * 0.3;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});