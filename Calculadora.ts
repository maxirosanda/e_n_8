 export class Sumadoras {
        protected a : number
        protected b: number
    
        constructor(){
            this.a = 0
            this.b = 0
        }
        public operacion = (a: number, b: number) => {
            this.a=a
            this.b=b
            return a + b
        } 
    
    }

    export class Restadora {
        protected a : number
        protected b: number
    
        constructor(){
            this.a = 0
            this.b = 0
        }
        public operacion = (a: number, b: number) => {
            this.a=a
            this.b=b
            return a - b
        } 
    
    }
 
 