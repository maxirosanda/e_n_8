"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restadora = exports.Sumadoras = void 0;
var Sumadoras = /** @class */ (function () {
    function Sumadoras() {
        var _this = this;
        this.operacion = function (a, b) {
            _this.a = a;
            _this.b = b;
            return a + b;
        };
        this.a = 0;
        this.b = 0;
    }
    return Sumadoras;
}());
exports.Sumadoras = Sumadoras;
var Restadora = /** @class */ (function () {
    function Restadora() {
        var _this = this;
        this.operacion = function (a, b) {
            _this.a = a;
            _this.b = b;
            return a - b;
        };
        this.a = 0;
        this.b = 0;
    }
    return Restadora;
}());
exports.Restadora = Restadora;
