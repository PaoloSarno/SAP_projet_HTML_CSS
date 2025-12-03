const giantDipp1 = document.getElementById('giantDipp1')
const giantDipp2 = document.getElementById('giantDipp2')
const beast = document.getElementById('theBeast')
const wildfire = document.getElementById('wildFire')
const wildFire2 = document.getElementById('bankHill')


    function scaleUp(element) {
        element.style.transform = "scale(1.05)";
        element.style.transition = "transform 0.3s ease";
    }

    function scaleDown(element) {
        element.style.transform = "scale(1)";
    }

        giantDipp1.addEventListener('mouseover' , () => scaleUp(giantDipp1));
        giantDipp1.addEventListener('mouseout' , () => scaleDown(giantDipp1));
        giantDipp1.addEventListener('click' , () => {window.open('https://fr.wikipedia.org/wiki/Giant_Dipper', '_blank')});

        giantDipp2.addEventListener('mouseover' , () => scaleUp(giantDipp2));
        giantDipp2.addEventListener('mouseout' , () => scaleDown(giantDipp2));
        giantDipp2.addEventListener('click' , () => {window.open('https://fr.wikipedia.org/wiki/Giant_Dipper', '_blank')});

    beast.addEventListener('mouseover' , () => scaleUp(beast));
    beast.addEventListener('mouseout' , () => scaleDown(beast));
    beast.addEventListener('click' , () => {window.open('https://fr.wikipedia.org/wiki/Beast_(Kings_Island)', '_blank')});
