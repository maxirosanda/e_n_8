
 
const operacion = (numero1 : number, numero2 : number, opera: string) =>{
 return new Promise ((resolve) =>{
     if(opera =="suma"){
        import('operacion')
        .then(Calculadoras =>{
            const calcu = new Calculadoras()
             resolve(calcu.calculadora(numero1,numero2,opera))
        })
        
     }
     
 })

}

const operaciones = async function (numero1 : number, numero2 : number, opera: string) {
    let a = await operacion(numero1,numero2,opera)
    return a
}
operaciones(10,5,"resta").then((v)=>{
console.log(v)
})