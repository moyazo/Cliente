
// ¿Es cierto que elem.lastChild.nextSibling siempre es null?
// ¿Es cierto que elem.children[0].previousSibling siempre es null ?



const elemDOM = document.querySelector("div"); // RECOGEMOS EL ELEMENTO "div"


alert("SALE: \n" + elemDOM.lastChild.nextSibling);  // EL HERMANO DEL ÚLTIMO ELEMENTO HIJO DE "div" NO EXISTE POR LO QUE ES null


alert("SALE: \n" + elemDOM.children[0].previousSibling);// EL HERMANO DEL PRIMER ELEMENTO HIJO DE "div" SI EXISTE POR LO QUE NOS MOSTRARÁ [object Text]


alert("SALE: \n" + elemDOM.children[0].previousSibling.nodeValue);