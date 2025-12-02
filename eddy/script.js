const lien1 = document.getElementById("1");
const lien2 = document.getElementById("2");
const lien3 = document.getElementById("3");
const popup_1 = document.querySelector(".popup_1");
const popup_2 = document.querySelector(".popup_2");
const popup_3 = document.querySelector(".popup_3");

lien1.addEventListener('mouseover', () => {
    popup_1.style.display = "block";
})

lien1.addEventListener('mouseout', () => {
    popup_1.style.display = "none";
})

lien2.addEventListener('mouseover', () => {
    popup_2.style.display = "block";
})

lien2.addEventListener('mouseout', () => {
    popup_2.style.display = "none";
})

lien3.addEventListener('mouseover', () => {
    popup_3.style.display = "block";
})

lien3.addEventListener('mouseout', () => {
    popup_3.style.display = "none";
})