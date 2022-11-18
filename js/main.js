import {data} from './data.js';

const containerRow = document.querySelector('.container > .row');

function createCard(array) {
	const col = document.createElement('div');
	col.classList.add('col');

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

data.forEach((element) => {
	const card = createCard(element);
	containerRow.append(card);
});
