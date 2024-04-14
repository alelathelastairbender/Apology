const button = document.querySelector('.button2');

button.addEventListener('click', function() {
    const randomTop = Math.floor(Math.random() * 500) + 'px';
    const randomLeft = Math.floor(Math.random() * 414) + 'px';

    this.style.top = randomTop;
    this.style.left = randomLeft;

    console.log(randomLeft);
    
});