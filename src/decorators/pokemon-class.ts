
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

/* Decorador para una propiedad */
function readOnly( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string ) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this )
                return 'Fernando';
            }, 
            set( this, val ) {
                Object.defineProperty( this, propertyKey, { 
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                 });
            }
        }

        return descriptor;
    }
}

@blockPrototype
@printToConsoleConditional( false )
export class Pokemon {
    @readOnly() 
    public api: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}

    @checkValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log( `Pokemon guardado en BD: ${ id }` )
    }
}