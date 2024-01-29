//Déclaration des variables
let score = document.getElementById('score');
let scoreend = 0;
let restart = document.getElementById('restart')

let qcm =
    [
        { Question: "Qui est le plus fort des Avengers?", value: "Hulk", r1: "Thor", r2: "CaptainMarvel", r3: "Hulk", r4: "IronMan" },
        { Question: "Qui à tué thanos?", value: "Thor", r1: "Thor", r2: "CaptainMarvel", r3: "Hulk", r4: "Rockette" },
        { Question: "Qui est le premier Avengers a avoir combatu thanos?", value: "Hulk", r1: "Thor", r2: "Ironman", r3: "Hulk", r4: "Spiderman" },
        { Question: "Ou les avengers affronte thanos dans avengers Infinity war?", value: "au Wakanda", r1: "au nord de l'état", r2: "à New york", r3: "à Washington ", r4: "au Wakanda" },
        { Question: "Sur quelle planéte s'affronte Thor et Hulk pour la première fois?", value: "la terre", r1: "Asgard", r2: "Sakaar", r3: "la terre", r4: "Sur la lune" },
        { Question: "Qui est le plus agée des avengers?", value: "Thor", r1: "Steve rogers", r2: "Tony stark", r3: "Carole danvers", r4: "Thor" },
        { Question: "A qui devons nous la défaite dans avengers infinity war?", value: "StarLord", r1: "Iron man", r2: "Spiderman", r3: "StarLord", r4: "Doctor strange" },
        { Question: "Qui est le premier des avengers à mourir?", value: "Vision", r1: "Iron man", r2: "Black widow", r3: "Gamora", r4: "Vision" },
    ];


let index = 0;

//fonction affichage
function affichage() {

    if (index > 7) {

        document.getElementById('container').innerHTML = '<img src="asset/anime.gif" alt="mon image">';
    }
    document.getElementById('container').innerHTML = qcm[index].Question;

    document.getElementById('r1').innerHTML = qcm[index].r1;
    document.getElementById('r2').innerHTML = qcm[index].r2;
    document.getElementById('r3').innerHTML = qcm[index].r3;
    document.getElementById('r4').innerHTML = qcm[index].r4;


}

//document.getElementById
document.getElementById('r1').addEventListener('click', function () {
    console.log(qcm[index].value + ':' + this.innerHTML);
    if (qcm[index].value == this.innerHTML) {
        scoreend++
        document.getElementById('score').innerHTML = scoreend;
        index++;

    } else {
        index++;
    } affichage();


})

document.getElementById('r2').addEventListener('click', function () {
    console.log(qcm[index].value + ':' + this.innerHTML);
    if (qcm[index].value == this.innerHTML) {
        scoreend++
        document.getElementById('score').innerHTML = scoreend;
        index++;

    } else {
        index++;
    }
    affichage();
})

document.getElementById('r3').addEventListener('click', function () {
    console.log(qcm[index].value + ':' + this.innerHTML);
    if (qcm[index].value == this.innerHTML) {
        scoreend++
        document.getElementById('score').innerHTML = scoreend;
        index++;

    } else {
        index++;
    }
    affichage();
})

document.getElementById('r4').addEventListener('click', function () {
    console.log(qcm[index].value + ':' + this.innerHTML);
    if (qcm[index].value == this.innerHTML) {
        scoreend++
        document.getElementById('score').innerHTML = scoreend;
        index++;

    } else {
        index++;
    }
    affichage();

})



affichage();

//Recommencer la partie 
restart.addEventListener('click', function () {
    scoreend = 0;
    score.innerHTML = 0;
    index = 0;
    affichage();
}) 