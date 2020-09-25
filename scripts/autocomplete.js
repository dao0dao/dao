//About
let codeLine = [...document.querySelectorAll('.codeLine')];
const elIndex = (el) => {
    if (codeLine.indexOf(el) < 9) {
        return `0${codeLine.indexOf(el) + 1}`
    } else {
        return codeLine.indexOf(el) + 1
    }
};
const removePadding = () => {
    codeLine.map(el => el.removeAttribute('style'))
}
const addPadding = () => {
    codeLine.map(el => el.style.paddingLeft = el.dataset.pl)
}
codeLine.map(el => {
    el.dataset.lineNr = elIndex(el);
    el.style.paddingLeft = el.dataset.pl;
});
window.addEventListener('resize', () => {
    if (window.innerWidth < 576) {
        removePadding()
    } else {
        addPadding()
    }
})