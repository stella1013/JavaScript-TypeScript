/*
DOM is the API that allows you to interact with the rendered HTML CODE. BUT NOT THE SAME AS THE HTML CODE OR PART OF IT
<script src="app.js" defer></script>
defer -> download file but run after everything is loaded.

Querying Elements
querySelector()
getElementById()
ocument.querySelector('.list-item')
Returns single elementns. Direct referenct to dom element/live

querySelectorAll()
document.querySelector('ul li:first-of-type')
returns collection as NodeList. non live/snapshot of dom.

Nodes & Elements
Everything is a node.

Elements are a type of node
special properties and methods
const listItemElement = document.querySelectorAll('li'); //live
const listItemElement = document.getElementsByTagName('li'); // not live

TRAVERSING THE DOM
Child - direct child node or element
Descendant - direct or indirect child nodes
Parent - direct parent node/element
Ancestor - direct/indirect parent node/element
*/
