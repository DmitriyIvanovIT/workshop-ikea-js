// eslint-disable-next-line strict
'use strict';
import generateHeader from './Modules/generateHeader.js';
import generateFooter from './Modules/generateFooter.js';
import generateCatalog from './Modules/generateCatalog.js';
import { loadData } from './Modules/loadData.js';
import generateGoodsPage from './Modules/generateGoodsPage.js';


generateHeader();
generateFooter();
generateCatalog();
loadData();
generateGoodsPage();


