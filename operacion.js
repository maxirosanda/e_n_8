"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadoras = void 0;
var Calculadoras = /** @class */ (function () {
    function Calculadoras() {
        var _this = this;
        this.calculadora = function (a, b, c) {
            _this.a = a;
            _this.b = b;
            _this.c = c;
            var solucion;
            if (c == "suma") {
                solucion = a + b;
            }
            if (c == "resta") {
                solucion = a - b;
            }
            return solucion;
        };
        this.a = 0;
        this.b = 0;
        this.c = "suma";
    }
    return Calculadoras;
}());
exports.Calculadoras = Calculadoras;
/*
export const calculadora = (a: number, b: number, c : string) => {
    let solucion
    if(c == "suma") {solucion =  a + b}
    if(c == "resta") {solucion = a - b}
    
    return solucion
}
*/
