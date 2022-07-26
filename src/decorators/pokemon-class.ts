
function printToConsole( constructor: Function ) {
    console.log( constructor );
}

const printToConsoleConditional = ( print?: boolean ): Function => {
    if( print ) {
        return printToConsole;
    } else {
        return () => {}
    }
}

/* Decorador que bloquea el prototipo de una clase */
const blockPrototype = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

@blockPrototype
@printToConsoleConditional( true )
export class Pokemon {
    public api: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}
}