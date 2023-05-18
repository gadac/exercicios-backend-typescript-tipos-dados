const tabuada = (numeros: number[]) => {
    for (let index = 0; index < numeros.length; index++) {
        const element: number = numeros[index];
        for (let i = 0; i < 11; i++) {
            console.log(`${element} x ${i} = ${element*i}`);            
        }
        console.log('---------------');        
    }
}

tabuada([1,5,2])