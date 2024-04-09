
const figures = document.querySelectorAll(".thumbnail   ");
const figcaptions = document.querySelectorAll("figcaption");

const figure1 = figures[0];
const figure2 = figures[1];
const figure3 = figures[2];

window.addEventListener("load", () => {
    figure1.addEventListener('mouseover', displayAltText(figcaptions[0], figure1.alt));
});

function displayAltText(figcaption, alttext) {
    console.log("Hover");
    figcaption = alttext;
}