import {data} from './data.js';

const containerRow = document.querySelector('.container > .row');
const filterEl = document.getElementById('filter');
const cardsArray = [];

/**
 * Crea una card con i dati estrapolati dall'ogetto passatogli
 * @param {*} array ogetto da cui prendere i dati per la creazione della carta
 * @returns {HTMLElement} ritorna la colonna da appendere in pagina
 */
function createCard(array) {
	const col = document.createElement('div');
	col.classList.add('col');
	col.ariaLabel = array.type;
	cardsArray.push(col);

	const card = document.createElement('div');
	card.classList.add('my-card');

	const icon = document.createElement('i');
	icon.classList.add(`${array.family}`, `${array.prefix}${array.name}`);

	icon.style.color = array.color;

	card.innerHTML = `<span>${array.name.toUpperCase()}</span>`;
	card.prepend(icon);

	col.append(card);

	return col;
}

/**
 * Mostra o nasconde gli elementi in pagina (con la classe d-none) in base al filtro selezionato
 * @param {string} filter elemento filtro passato dalla select
 */
function filterSwap(filter) {
	cardsArray.forEach((element) => {
		if (filter === 'all') {
			element.classList.remove('d-none');
		} else {
			if (filter !== element.ariaLabel) {
				element.classList.add('d-none');
			} else {
				element.classList.remove('d-none');
			}
		}
	});
}

//Appendo le carte che creo con la funzione di creazione cards
data.forEach((element) => {
	const card = createCard(element);
	containerRow.append(card);
});

//aggiungo un evento al cambio del filtro selezionato
filterEl.addEventListener('change', function () {
	const filter = this.value.toLowerCase();
	filterSwap(filter);
});
