// SCROLL SECTIONS

window.onscroll = () => {
    // when scroll over 100px, header receive sticky CSS properties
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}