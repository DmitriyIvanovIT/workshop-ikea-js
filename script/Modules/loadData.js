import { getData } from './getData.js';

const cartList = [{
        id: 'idd005',
        count: 3
    },
    {
        id: 'idd055',
        count: 2
    },
    {
        id: 'idd075',
        count: 5
    }
];

export const loadData = () => {

    if (location.hash) {
        getData.item(location.hash.slice(1), data => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, data => console.log(data));
    }

    // getData.catalog(data => console.log(data));
    // getData.subCatalog('Мебель',data => console.log(data));
};