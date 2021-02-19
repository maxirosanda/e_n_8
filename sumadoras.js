"use strict";
module.exports = /** @class */ (function () {
    function Sumadoras() {
        var _this = this;
        this.Sumadora = function (a, b, c) {
            _this.a = a;
            _this.b = b;
            _this.c = c;
            return a + b;
        };
        this.a = 0;
        this.b = 0;
        this.c = "suma";
    }
    return Sumadoras;
}());
/*
export const calculadora = (a: number, b: number, c : string) => {
    let solucion
    if(c == "suma") {solucion =  a + b}
    if(c == "resta") {solucion = a - b}
    
    return solucion
}
*/
