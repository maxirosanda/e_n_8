
const operacion = async (numero1 : number, numero2 : number, opera: string) : Promise<number> =>{
    if( opera == "suma"){
    
        const {Sumadoras} = await import('./Calculadora')
        const sumadora = new Sumadoras()
        var resultado: number = sumadora.operacion(numero1,numero2)
    
    }

    if( opera == "resta"){
    
        const {Restadora} = await import('./Calculadora')
        const restadora = new Restadora()
        var resultado: number = restadora.operacion(numero1,numero2)
    
    }
    
    
    return new Promise ((resolve) => {
         resolve(resultado)
        })
        
   
     
 }



const operaciones = async function (numero1 : number, numero2 : number, opera: string) {
    let a = await operacion(numero1,numero2,opera)
    return a
}
operaciones(10,5,"resta").then((v)=>{
console.log(v)
})



/*
const operacion = async (numero1 : number, numero2 : number, opera: string): Promise<number> =>{
        let resultado: number
                const {Sumadoras} = await import('./Sumadoras')
                const sumadora = new Sumadoras()
                resultado = sumadora.Sumadora(numero1, numero2)
                return new Promise(resolve => {
                    resolve(resultado)
                })
    }


    const operaciones = async function (numero1 : number, numero2 : number, opera: string) {
        let a = await operacion(numero1,numero2,opera)
        return a
    }
    operaciones(10,9,"suma").then((v)=>{
    console.log(v)
    })
  */