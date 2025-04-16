window.onload = function () {
    window.scrollTo(0, 0);
};

var defaultString;
function changeText(button) {
    defaultString = button.innerHTML;
    button.innerHTML = "SEE MORE"
}
function resetText(button) {
    button.innerHTML = defaultString;
}



window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.bscard');
    boxes.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('show');
        }
    })
});


function showSections(div) {
    // const section = div
    section.style.visibility = 'visible';
}

function hideSections(div) {
    const section = div.nextElementSibling;
    section.style.visibility = 'hidden';
}




