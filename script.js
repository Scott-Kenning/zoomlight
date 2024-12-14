const resizableBox = document.getElementById('resizable-box');
const sizeSlider = document.getElementById('size-slider');

sizeSlider.addEventListener('input', () => {
    const size = sizeSlider.value;
    resizableBox.style.width = `${size}vw`;
    resizableBox.style.height = `${size}vh`;
});
