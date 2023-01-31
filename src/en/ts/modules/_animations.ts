export const stickHeader = () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    })
}



