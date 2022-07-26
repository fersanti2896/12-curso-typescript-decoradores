
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

@printToConsoleConditional( false )
export class Pokemon {
    public api: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}
}