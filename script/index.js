// eslint-disable-next-line strict
'use strict';
import generateHeader from './Modules/generateHeader.js';
import generateFooter from './Modules/generateFooter.js';
import generateCatalog from './Modules/generateCatalog.js';
import generateSubCatalog from './Modules/generateSubCatalog.js';

generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();

// Переменные
const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    catalogList = document.querySelector('.catalog-list'),
    subCatalog = document.querySelector('.subcatalog'),
    subcatalogHeader = document.querySelector('.subcatalog-header'),
    catalogListItem = document.querySelectorAll('.catalog-list__item');

const overlay = document.createElement('div');

overlay.className = 'overlay';

document.body.insertAdjacentElement('beforeend', overlay);

// Функции
const toggleCatalog = () => {
        catalog.classList.toggle('open');
        overlay.classList.toggle('active');
        closeSubMenu();
    },
    openSubMenu = event => {
        event.preventDefault();

        const itemList = event.target.closest('.catalog-list__item');

        if (itemList) {
            subcatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add('subopen');
            catalogListItem.forEach(item => {
                if (item !== itemList) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    },
    closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
        catalogListItem.forEach(item => item.classList.remove('active'));
    };


// Обработчики событей
btnBurger.addEventListener('click', toggleCatalog);
catalogList.addEventListener('click', openSubMenu);

document.body.addEventListener('click', event => {
    const target = event.target;

    if (catalog.classList.contains('open') && !target.closest('.btn-burger')) {
        if (target === overlay ||
            target.closest('.btn-close')) {
            toggleCatalog();
        }
    }

    if (target.closest('.btn-return')) {
        closeSubMenu();
    }
});

document.addEventListener('keydown', event => {
    if (catalog.classList.contains('open')) {
        if (event.code === 'Escape') {
            toggleCatalog();
        }
    }
});