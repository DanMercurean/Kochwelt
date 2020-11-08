/**
 * Calculates amount of needed ingredients
 */
function calculate() {
    let number = +document.getElementById('number').value;

    // alert(number + 'Salatgurke')
    let cucumbers = number * 0.25;
    document.getElementById('cucumbers').innerHTML = cucumbers + ' Salatgurken';
    let pepper = number * 0.5;
    document.getElementById('pepper').innerHTML = pepper + ' Paprikaschot(n), rot und grün';
    let tomato = number * 125;
    document.getElementById('tomato').innerHTML = tomato + 'g Tomate';
    let onion = number * 0.5;
    document.getElementById('onion').innerHTML = onion + ' Zwiebel(n)';
    let cheese = number * 50;
    document.getElementById('cheese').innerHTML = cheese + 'g Schafskäse';
    let olives = number * 25;
    document.getElementById('olives').innerHTML = '1 Glas Oliven, schwarze, ca. Gramm ' + olives;
    let lemon = number * 0.25;
    document.getElementById('lemon').innerHTML = lemon + ' Zitrone(n)';
    let oliveoil = number * 31.25;
    document.getElementById('oliveoil').innerHTML = oliveoil + 'ml Olivenöl';
}

function loadRepice() {
    const urlParams = new URLSearchParams(window.location.search); // Alle Variablen aus der URL
    const id = urlParams.get('id');// Load ID from URL
    if (id == 1) {
        loadRepice1();
    }
    if (id == 2) {
        loadRepice2();
    }
    if (id == 3) {
        loadRepice3();
    }
}

function loadRepice1() {
    document.getElementById('headline').innerHTML = 'Bunte Nudel-Bowl';
    document.getElementById('image').src='./img/NudelBowl.jpeg';
    document.getElementById('time').innerHTML = '15 Min';
    document.getElementById('difficulty').innerHTML = 'simpel';
    document.getElementById('date').innerHTML = '3.11.2020';
    document.getElementById("preparation1").innerHTML = '<span>1.</span> Die Aubergine waschen, putzen und in längs in dünne Scheiben schneiden, danach salzen und 10 bis 15 Minuten ziehen lassen';
    document.getElementById("preparation2").innerHTML = '<span>2.</span> Den Ofen vorheizen. Das restlicge Gemüse waschen und mit 2 EL Öl, Salz und Pfeffer vermengen. Danach für ca. 15 Minuten im Ofen schmoren lassen. Die Aubergine trocken tupfen, dünn mit Öl bestreichen, pfeffern und in einer beschichteten Pfanne unter mehrmaligem Wenden anbraten, bis die Aubergine fertig ist. Anschließend werden die Nudeln mit heißem Wasser übergossen.';
    document.getElementById("preparation3").innerHTML = '  <span>3.</span> Den Knoblauch schälen, in feine Scheibchen schneiden und im übrigen Öl in einer Pfanne goldbraun anbraten. Mit dem Zucker bestreuen, mit dem Essig ablöschen und das gegrillte Gemüse unterschwenken. Die Mi-Nudeln untermischen und das Ganze nach Bedarf abschmecken. Vor dem Servieren noch mit etwas Sesam und Petersilie verzieren.';
    document.getElementById("person").innerHTML = 'Yvonne';
    document.getElementById("title").innerHTML ='Bunte Nudel Bowl';
}

function loadRepice2() {
    document.getElementById('headline').innerHTML = 'Brokkoli';
    document.getElementById('image').src='./img/broccoli.jpg';
    document.getElementById('time').innerHTML = '20 Min';
    document.getElementById('difficulty').innerHTML = 'normal';
    document.getElementById('date').innerHTML = '3.11.2020';
    document.getElementById("preparation1").innerHTML = '<span>1.</span> Zwiebel und Knoblauch schälen und klein würfeln. Brokkoli waschen, putzen und klein schneiden/zupfen. Möhren waschen, putzen und in Scheiben schneiden.';
    document.getElementById("preparation2").innerHTML = '<span>2.</span> Zwiebel und Knoblauch im Wok oder in einer großen Pfanne in Öl anbraten. Brokkoli und Möhren hinzufügen und ein paar Minuten lang mitbraten. Ingwer, Sojasauce und Zucker hinzufügen, alles gut vermischen und bei geschlossenem Deckel bei mittlerer Hitze 7-10 Min. lang dünsten. Mit Salz abschmecken.';
    document.getElementById("preparation3").innerHTML = '<span>3.</span> Als Beilage zu z. B. Basmatireis mit einer asiatischen Sauce (z. B. Soja- oder Erdnusssauce) servieren.';
    document.getElementById("person").innerHTML = 'Dan & Yvonne';
    document.getElementById("title").innerHTML ='Brokkoli';
    // document.getElementById('imgid').src = './img/nudelbild.png';
}

function loadRepice3() {
    document.getElementById('headline').innerHTML = 'Französische Croissant';
    document.getElementById('image').src='./img/croissant.jpg';
    document.getElementById('time').innerHTML = '90 Min';
    document.getElementById('difficulty').innerHTML = 'simpel';
    document.getElementById('date').innerHTML = '3.11.2020';
    document.getElementById("preparation1").innerHTML = '<span>1.</span> Milch erwärmen, Zucker und Hefe unter Rühren darin auflösen. Hefemilch, Mehl, Salz, Eigelb, Ei, Zitronenschale, Vanille und Margarine zu einem geschmeidigen Teig verarbeiten. Dann abgedeckt über Nacht im Kühlschrank gehen lassen.';
    document.getElementById("preparation2").innerHTML = '<span>2.</span> Die Butter zwischen Klarsichtfolie ca. 30 x 15 cm ausrollen und kühlstellen.';
    document.getElementById("preparation3").innerHTML = '<span>3.</span> Den Hefeteig auf der bemehlten Arbeitsfläche kreuzförmig einschneiden. So ausrollen, dass ein Kreuz entsteht. Die Butterplatte in die Mitte legen. Die Teigkanten mit etwas Wasser bestreichen. Die Teiglappen über die Butterplatte legen, sodass diese vollständig eingehüllt ist. Den Teig rundherum leicht andrücken und 15 Minuten kalt stellen.';
    document.getElementById("preparation4").innerHTML = '<span>4.</span> Den Teigblock auf der bemehlten Arbeitsfläche auf etwa 50 x 30 cm ausrollen. Ein Teigdrittel zur Mitte hin einschlagen, das andere Drittel darüberlegen. 20 Minuten kalt stellen.';
    document.getElementById("preparation5").innerHTML = '<span>5.</span> Ausrollen, Einschlagen und Kaltstellen einmal wiederholen (einfache Tour). Nun dem Teig noch eine doppelte Tour geben, d.h. die rechte und die linke Teigkante bis zur Mitte hin einschlagen, sodass sie in der Mitte aneinander stoßen. Nach dieser Tour sollte der Teig mindestens 30 Minuten im Kühlschrank entspannen.';
    document.getElementById("preparation6").innerHTML = '<span>6.</span> Den Teig auf der bemehlten Arbeitsfläche auf ca. 60 x 20 cm ausrollen. Aus der Platte 8 gleichgroße Dreiecke schneiden. An der Schmalseite in der Mitte jeweils 2 cm tief einschneiden, um die Hörnchen besser biegen zu können.';
    document.getElementById("preparation7").innerHTML = '<span>7.</span> Die Dreiecke von der Schmalseite her zu Hörnchen aufrollen, dabei die Teigspitzen leicht andrücken. Auf ein mit Backpapier belegtes Backblech setzen. Ca. 30 Minuten gehen lassen, nach 20 Minuten die Croissants mit dem verquirlten Eigelb bestreichen.';
    document.getElementById("preparation8").innerHTML = '<span>8.</span> Im vorgeheizten Backofen auf der 2. Einschubleiste von unten bei 210 Grad 15-18 Minuten backen (Gas 3-4, Umluft ca. 15 Minuten bei 190 Grad). Aus dem Ofen nehmen und leicht abkühlen lassen.';
    document.getElementById("person").innerHTML = 'Yvonne';
    document.getElementById("title").innerHTML ='Französische Croissant';

}
//Responsive Menu//

function showMenu() {
    document.getElementById("menu").classList.add("show-overlay-menu");
}

function buttonClose() {
    document.getElementById("menu").classList.remove("show-overlay-menu");
}

//Slider Show //

function startSlider() {

    setTimeout(function () {
        document.getElementById("img-1").style = "transform: translateX(-100%)"
        document.getElementById("img-2").style = "transform: translateX(-100%)"
        document.getElementById("img-3").style = "transform: translateX(-100%)"
    }, 4000);

    setTimeout(function () {
        document.getElementById("img-1").style = "transform: translateX(-200%)"
        document.getElementById("img-2").style = "transform: translateX(-200%)"
        document.getElementById("img-3").style = "transform: translateX(-200%)"
    }, 8000);

    setTimeout(function () {
        document.getElementById("img-1").style = "transform: translateX(0%)"
        document.getElementById("img-2").style = "transform: translateX(0%)"
        document.getElementById("img-3").style = "transform: translateX(0%)"

        startSlider();
    }, 12000);
}


