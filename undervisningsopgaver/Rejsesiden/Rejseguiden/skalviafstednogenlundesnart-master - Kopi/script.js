// link til googlesheet: https://docs.google.com/spreadsheets/d/17cCPrXYs8-feiUxeJUIuVwbp7E7NKghiv-HZvzxHkHw/edit?fbclid=IwAR3ZNoK8Y7okN2vGJQdh_ljMwdiugHh4GvczT-t2bhHplu9eKPH55h10kL0#gid=0


//Globale variabler
let w = window.outerWidth;
let loopView = document.querySelector(".loopview");

//addEventListner("DOMContentLoaded", start);

//Fanger hvor stort browservinduet er når vi er på forsiden, så den rigtige klasse bliver sat på body i html, så de rigtige funktioner kaldes.
if (w > 600 && w < 899 && loopView) {
    console.log("ipad" + w);
    document.querySelector("body").classList = "loopview ipad";
} else if (w > 900 && loopView) {
    console.log("com" + w);
    document.querySelector("body").classList = "loopview computer";
} else if (loopView && w < 550) {
    console.log("mobil" + w);
    document.querySelector("body").classList = "loopview mobile";
}

document.querySelector("#menuknap").addEventListener("click", () => {
    document.querySelector("#menu").classList.toggle("hidden");
})

function start() {
    console.log("start");


    //document.querySelector(".valgt_kategori").textContent = "Valgt: Alle";
    //hentJson();
}

//function async hentJson() {
console.log("hentJson");
//Hent json-fil via link
//if(loopview) -> visLoopView();
//else if (singleview) -> visSingleView();
//}

function visSingleView() {
    console.log("visSingleView");
    //add history.back();
    //Konstant der bestemmer window.location.search
    //Konstant der definerer en unik egenskab (her fx. navn).
    //Konstant der definerer URL til json
    //Andre lokale variabler
    //opret en klon med alle info fra json og sæt ind på siden vha textContent, link til billede + alt.
}

function visLoopView() {
    console.log("visLoopView");
    //sæt listens innerHTML="";
    //Filterknapper/forEach addEventListner("click", filtrering); (HUSK BURGERMENU I MOBIL)
    //???.feed.entry.forEach
    //Opret klon
    //Vis billeder og alt-tags fra json-filen
    //info-div skjules
    //klon oprettes til info-div

    //IPAD
    //if .loopview && .ipad
    //addEventListner("click", function() {sæt klasse på, som viser info-div'en ved klik på billede-div'en});
    //klon.firstElementChild.addEventListner("cilck", function () {location.href = singleView.html?id????} (ved klik på info-div'en)

    //MOBIL
    //if .loopview && .mobile
    //klon.firstElementChild.addEventListner("cilck", function () {location.href = singleView.html?id????}

    //COMPUTER
    //if .loopview && .computer
    //addEventListner("hover", function() {toggle klasse der viser/skjuler hoverbilledet}
    //addEventListner("click", function(){toggle af klasse der viser/skjuler infodiv ved klik på I})
    //klon.firstElementChild.addEventListner("cilck", function () {location.href = singleView.html?id????}

    //Klik på .filter (knap/menu) -> filtrering();
}

function filtrering() {
    console.log("filtrering");
    //querySelectorAll - fjern klassen .valgt på alle.
    //sæt klassen på den der er klikkket på ved hjælp af this.
    //visLoopView();

}
