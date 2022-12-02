const firstElDOM = document.querySelector("div").firstChild.nodeValue;  // Para acceder al primer elemento de un etiqueta usamos TAG.firstchild


alert("El elmento DIV es el primer elemento del body usaríamos:\n" + firstElDOM);

const ulDOM =  document.querySelector("div").nextElementSibling.outerHTML;  // Para acceder al siguiente elemento de un etiqueta usamos TAG.nextElementSibling y para mostramos añadimos .outerHTML


alert("El siguiente elemento del DIV es el UL:\n" + ulDOM);



const ilDOM = document.querySelector("ul > li:last-child").outerHTML;  // PODEMOS ACCEDER A UN ELEMENTO USANDO SELECTORES CSS EN ESTE CASO TAG:LAST-CHILD

alert("El valor del segundo il es:\n" + ilDOM);