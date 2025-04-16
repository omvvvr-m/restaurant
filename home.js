
var defaultString;
function changeText(button) {
    defaultString = button.innerHTML;
    button.innerHTML = "SEE MORE"
}
function resetText(button) {
    button.innerHTML = defaultString;
}
