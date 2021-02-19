module.exports = class Sumadoras {
    protected a : number
    protected b: number
    protected c: string
    constructor(){
        this.a = 0
        this.b = 0
        this.c = "suma"
    }
    public Sumadora = (a: number, b: number, c : string) => {
        this.a=a
        this.b=b
        this.c=c
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


