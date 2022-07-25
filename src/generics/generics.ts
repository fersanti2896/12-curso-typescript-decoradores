
export const printObject = ( argument: any ) => {
    console.log( argument );
}

/* <T> Generalmente es para Tipo Genérico */
export function genericFunction<T>( argument: T ) {
    return argument;
}

export const genericFunctionArrow = <T>( arg: T ) => arg;