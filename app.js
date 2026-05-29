//
// MAAK EEN INPUT OF TEXTAREA
//
function updateProgress(){

    // Enkel velden die niet readonly zijn
    const fields = document.querySelectorAll(
        "input:not([readonly]), textarea:not([readonly])"
    );

    let filled = 0;

    fields.forEach(field => {

        if(field.value.trim() !== ""){
            filled++;
        }

    });

    const progress = Math.round((filled / fields.length) * 100);

    progressText.textContent = progress + "%";

    progressFill.style.width = progress + "%";
}

//
// MAAK EEN MELDING
//
function notice(text){

    return `
        <div class="notice">
            ${text}
        </div>
    `;
}

//
// TAB: ALGEMEEN
//
algemeen.innerHTML = `
    <h2>Algemeen</h2>

    ${notice("Vul eerst je basisgegevens in.")}

    ${field("Naam","naam","input","Naam leerling")}
    ${field("Klas","klas","input","Klas leerling")}
    ${field("Richting","richting","input","Richting leerling")}
    ${field("Schooljaar","schooljaar","input","Schooljaar leerling")}
`;

//
// TAB: OPDRACHT
//
opdracht.innerHTML = `
    <h2>Opdracht</h2>

    ${notice("Neem de opdracht grondig door.")}

    ${field("Omschrijving","omschrijvingText","textarea","","",true)}
`;

//
// TAB: ANALYSE
//
analyse.innerHTML = `
    <h2>Analyse</h2>

    ${notice("Ontwerp hier je IPO-lijst (interactieve elementen, input, verwerking en output)")}

    ${field("Analyse","analyseText","textarea","","",false)}
`;

//
// TAB: FEEDBACK
//
feedback.innerHTML = `
    <h2>Feedback</h2>

    ${notice("Feedback van de leerkracht.")}

    ${field("Feedback","feedbackText","textarea")}
`;

//
// TAB: HANDLEIDING
//
handleiding.innerHTML = `
    <h2>Handleiding</h2>

    ${notice("Beschrijf hier hoe de toepassing gebruikt wordt.")}

    ${field("Handleiding","handleidingText","textarea")}
`;

//
// TAB WISSELEN
//
document.querySelectorAll(".tab").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".tab")
            .forEach(tab => tab.classList.remove("active"));

        document.querySelectorAll("section")
            .forEach(section => section.classList.remove("active"));

        button.classList.add("active");

        document.getElementById(button.dataset.tab)
            .classList.add("active");

    });

});

//
// UPDATE PROGRESS BAR
//
function updateProgress(){

    const fields = document.querySelectorAll("input, textarea");

    let filled = 0;

    fields.forEach(field => {

        if(field.value.trim() !== "") filled++;

    });

    const progress = Math.round((filled / fields.length) * 100);

    progressText.textContent = progress + "%";

    progressFill.style.width = progress + "%";
}

//
// LUISTER NAAR WIJZIGINGEN
//
document.addEventListener("input", updateProgress);

//
// EERSTE UPDATE
//
updateProgress();