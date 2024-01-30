if (window.location.href === "http://localhost:3000/a_propos" || window.location.href === "http://www.louka-fauvel/a_propos") {

    const titles = [
        document.querySelectorAll('h1')[0],
        document.querySelectorAll('h2')[0],
        document.querySelectorAll('p')[0],
        document.querySelectorAll('h2')[1],
        document.querySelectorAll('li')[0],
        document.querySelectorAll('li')[1],
        document.querySelectorAll('li')[2],
        document.querySelectorAll('li')[3],
        document.querySelectorAll('li')[4],
        document.querySelectorAll('li')[5]
    ];
    const txts = [
        "A propos",
        "Sérieux et collectif",
        "Je suis élève en deuxième année de BTS Service informatique aux organisations " +
        "au pôle CaenSup Sainte Ursule de Caen en Normandie. " +
        "J'aime beaucoup voyager et découvrir de nouvelles traditions culturelles. " +
        "J'ai eu la chance de participer à deux échanges Erasmus avec la Suède et l'Espagne en 2019. " +
        "Je suis un élève sérieux qui aime travailler en équipe sur de nouveaux projets. ",
        "Centres d'intérêts",
        "Théâtre",
        "Dessin",
        "Animés",
        "Mangas",
        "Voyages",
        "Découvertes culinaires"
    ];
    let nb = 0;
    let nb2 = 0;

    function typewriter(word, index) {
        if (index < word.length) {
            setTimeout(() => {
                titles[nb2].classList.remove('hidden')
                titles[nb2].innerHTML += `<span>${word[index]}</span>`
                typewriter(txts[nb], index + 1)
            }, 10);
        } else {
            nb++;
            nb2++;
            if (nb >= txts.length) {

            } else {
                typewriter(txts[nb], 0)
            }
        }
    }

    setTimeout(() => {
        typewriter(txts[0], 0)
    }, 500);
}