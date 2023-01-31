import {stickHeader} from "./modules/_animations";


function forwardUTM() {
    const linksNodeList = document.getElementsByTagName('a'),
        allLinks = Array.prototype.slice.call(linksNodeList),
        tale = window.location.search;

    allLinks.forEach(link => {
        let href = link.getAttribute('href');
        link.href = href + tale;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    forwardUTM();
    stickHeader();
});
