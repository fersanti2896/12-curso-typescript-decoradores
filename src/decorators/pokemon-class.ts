
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

/* Está destinado a trabajar con métodos */
function checkValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        const originalMethod = descriptor.value;
        
        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                return console.error('El pokemon debe estar entre 1 a 800!')
            } else {
                return originalMethod( id );
            }
        }
    }
}

@blockPrototype
@printToConsoleConditional( true )
export class Pokemon {
    public api: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}

    @checkValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log( `Pokemon guardado en BD: ${ id }` )
    }
}