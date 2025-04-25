window.onload = function () {
    // window.scrollTo(0, 0);
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
    const bsboxes = document.querySelectorAll('.bscard');
    bsboxes.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('show');
        }
    })

    const lsboxes = document.querySelectorAll('.lscard');
    lsboxes.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('show');
        }

    })
});


function openPrivacyPolicy() {
    var element = document.getElementById("privacy_policy");
    element.style.display = "flex";
}

function closePrivacyPolicy() {
    var element = document.getElementById("privacy_policy");
    element.style.display = "none";
}




