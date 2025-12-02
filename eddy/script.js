const cal2025 = document.querySelector(".y2025");
const cal2026 = document.querySelector(".y2026");
const select = document.getElementById("year");

let annee;

select.addEventListener('change', () => {
    annee = select.value;
    console.log(annee);
    if (annee == "2025") {
        cal2025.style.display = "table";
        cal2026.style.display = "none";
    } else if (annee == "2026") {
        cal2025.style.display = "none";
        cal2026.style.display = "table";
    }
    
})

