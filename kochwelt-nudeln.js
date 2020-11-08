function calculate() {
    let number = +document.getElementById('number').value;
    let aubergine = number * 0.5;
    document.getElementById('aubergine').innerHTML = aubergine + ' Aubergine(n)';
    let pepper = number * 1;
    document.getElementById('pepper').innerHTML = pepper + ' Spitzpaprikaschoten rot und gelb';
    let oil = number * 3; 
    document.getElementById('oil').innerHTML = oil + ' EL Olivenöl';
    let noodle = number * 175;
    document.getElementById('noodle').innerHTML = noodle + ' g Mi-Nudeln';
    let garlic = number * 1;
    document.getElementById('garlic').innerHTML = garlic +  ' Knoblauchzehe';
    let sugar = number * 1;
    document.getElementById('sugar').innerHTML =  sugar + " Prise Zucker";
    let vinegar = number * 1;
    document.getElementById('vinegar').innerHTML = vinegar + ' EL Weißweinessig';
    let parsley = number * 1;
    document.getElementById('parsley').innerHTML = parsley + ' Bund Petersilie';

}

function loadRepice() {
    const urlParams = new URLSearchParams(window.location.search); // Alle Variablen aus der URL
    const id = urlParams.get('id');// Load ID from URL
    if(id == 1) {
        loadRepice1();
    }
    if(id == 2) {
        loadRepice2();
    }
}

function loadRepice1() {
    document.getElementById('headline').innerHTML = 'Bunte Nudel-Bowl durch ID';
   document.getElementById('imgid').src = './img/NudelBowl.jpeg';
}

function loadRepice2() {
    document.getElementById('headline').innerHTML = 'Rezept 2 wurde geladen';
   // document.getElementById('imgid').src = './img/nudelbild.png';
}


//Responsive Menu//

function showMenu() {
    document.getElementById("menu").classList.add("show-overlay-menu");
}

function buttonClose() {
    document.getElementById("menu").classList.remove("show-overlay-menu");
}