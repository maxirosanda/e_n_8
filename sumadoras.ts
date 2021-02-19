export = class Sumadoras {
    protected a : number
    protected b: number

    constructor(){
        this.a = 0
        this.b = 0
    }
    public Sumadora = (a: number, b: number) => {
        this.a=a
        this.b=b
        return a + b
    } 

}




/*
export const calculadora = (a: number, b: number, c : string) => {
    let solucion 
    if(c == "suma") {solucion =  a + b}
    if(c == "resta") {solucion = a - b}
    
    return solucion
} 
*/


