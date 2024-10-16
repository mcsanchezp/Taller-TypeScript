import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let serieDetailsCard: HTMLElement = document.getElementById('serie-details')!;
const SeasonsAvgElm: HTMLElement = document.getElementById("avg-seasons")!;

renderSeriesInTable(dataSeries);

SeasonsAvgElm.innerHTML = `${getSeasonsAvg(dataSeries)}`

// Function to render the series table
function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando Series');
  
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td class="fw-bold text-center">${serie.id}</td>
      <td>
        <a href="#" class="text-decoration-none serie-link" data-id="${serie.id}">
          ${serie.name}
        </a>
      </td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`;
      
    
    seriesTbody.appendChild(trElement);

    
    const linkElement = trElement.querySelector('.serie-link') as HTMLElement;
    linkElement.addEventListener('click', (event) => {
      event.preventDefault();
      showSeriesDetail(serie);
    });
  });
}

function getSeasonsAvg(series: Serie[]): number {
  let avgSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);

  return avgSeasons/series.length;
}



function showSeriesDetail(serie: Serie): void {
  const cardImage = serieDetailsCard.querySelector('.card-img-top') as HTMLImageElement;
  const cardTitle = serieDetailsCard.querySelector('.card-title') as HTMLElement;
  const cardText = serieDetailsCard.querySelector('.card-text') as HTMLElement;
  const cardLink = serieDetailsCard.querySelector('.card-link') as HTMLAnchorElement;


  cardImage.src = serie.image;
  cardImage.alt = serie.name;
  cardTitle.textContent = serie.name;
  cardText.textContent = serie.sinopsis;
  cardLink.textContent = serie.link; 

  serieDetailsCard.classList.remove('d-none');
}


