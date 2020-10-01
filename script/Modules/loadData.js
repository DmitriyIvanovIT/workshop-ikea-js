import {
    getData
} from './getData.js';

const wishList = ['idd005', 'idd100', 'idd077', 'idd033'];

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

    if (location.search) {
        const search = decodeURI(location.search),
            prop = search.split('=')[0].slice(1),
            value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, data => console.log(data));
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, data => console.log(data));
        } else {
            getData.category(prop, value, data => console.log(data));
        }
    }

    if (location.hash) {
        getData.item(location.hash.slice(1), data => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, data => console.log(data));
    }

    getData.catalog(data => console.log(data));
    getData.subCatalog(data => console.log(data));
};