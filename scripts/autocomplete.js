'use strict'
//About
let codeLine = [...document.querySelectorAll('.codeLine')];
const elIndex = (index) => {
    if (index < 9) {
        return `0${index + 1}`
    } else {
        return index + 1
    }
};
const removePadding = () => {
    codeLine.map(el => el.removeAttribute('style'))
}
const addPadding = () => {
    codeLine.map(el => el.style.paddingLeft = el.dataset.pl)
}
codeLine.map((el, i) => {
    el.dataset.lineNr = elIndex(i);
    el.style.paddingLeft = el.dataset.pl;
});
window.addEventListener('resize', () => {
    if (window.innerWidth < 576) {
        removePadding()
    } else {
        addPadding()
    }
})