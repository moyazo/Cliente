"use strict";

if (-1 || 0) alert( "primero" ); // Si se muestra || se cumple si uno de los dos es true
if (-1 && 0) alert( "segundo" ); // no se cumple && se cumple si los dos son true
if (null || -1 && 1) alert( "tercero" );
