import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var serieDetailsCard = document.getElementById('serie-details');
var SeasonsAvgElm = document.getElementById("avg-seasons");
renderSeriesInTable(dataSeries);
SeasonsAvgElm.innerHTML = "".concat(getSeasonsAvg(dataSeries));
// Function to render the series table
function renderSeriesInTable(series) {
    console.log('Desplegando Series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td class=\"fw-bold text-center\">".concat(serie.id, "</td>\n      <td>\n        <a href=\"#\" class=\"text-decoration-none serie-link\" data-id=\"").concat(serie.id, "\">\n          ").concat(serie.name, "\n        </a>\n      </td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var linkElement = trElement.querySelector('.serie-link');
        linkElement.addEventListener('click', function (event) {
            event.preventDefault();
            showSeriesDetail(serie);
        });
    });
}
function getSeasonsAvg(series) {
    var avgSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    return avgSeasons / series.length;
}
function showSeriesDetail(serie) {
    var cardImage = serieDetailsCard.querySelector('.card-img-top');
    var cardTitle = serieDetailsCard.querySelector('.card-title');
    var cardText = serieDetailsCard.querySelector('.card-text');
    var cardLink = serieDetailsCard.querySelector('.card-link');
    cardImage.src = serie.image;
    cardImage.alt = serie.name;
    cardTitle.textContent = serie.name;
    cardText.textContent = serie.sinopsis;
    cardLink.textContent = serie.link;
    serieDetailsCard.classList.remove('d-none');
}
