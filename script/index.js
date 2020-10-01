// eslint-disable-next-line strict
'use strict';
import generateHeader from './Modules/generateHeader.js';
import generateFooter from './Modules/generateFooter.js';
import generateCatalog from './Modules/generateCatalog.js';
import generateSubCatalog from './Modules/generateSubCatalog.js';
import catalogMenu from './Modules/catalog.js';
import { loadData } from './Modules/loadData.js';

generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();
catalogMenu();
loadData();

