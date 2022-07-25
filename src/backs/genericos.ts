import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero } from "../interfaces/";


/* printObject( 123 );
printObject( new Date() );
printObject( { a:1, b:2, c:3 } );
printObject( [1, 2, 3, 4, 5, 6] );
printObject( 'Hola Mundo!' ); */

/* console.log( genericFunctionArrow(3.1416).toFixed(2) );
console.log( genericFunctionArrow('Hola mundo').toLocaleUpperCase() );
console.log( genericFunctionArrow( new Date() ) ); */

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson', 
    dangerLevel: 130
}

console.log( genericFunctionArrow<Hero>(deadpool) );