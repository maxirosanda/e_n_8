"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var operacion = function (numero1, numero2, opera) { return __awaiter(void 0, void 0, void 0, function () {
    var Sumadoras, sumadora, resultado, Restadora, restadora, resultado;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(opera == "suma")) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./Calculadora')); })];
            case 1:
                Sumadoras = (_a.sent()).Sumadoras;
                sumadora = new Sumadoras();
                resultado = sumadora.operacion(numero1, numero2);
                _a.label = 2;
            case 2:
                if (!(opera == "resta")) return [3 /*break*/, 4];
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./Calculadora')); })];
            case 3:
                Restadora = (_a.sent()).Restadora;
                restadora = new Restadora();
                resultado = restadora.operacion(numero1, numero2);
                _a.label = 4;
            case 4: return [2 /*return*/, new Promise(function (resolve) {
                    resolve(resultado);
                })];
        }
    });
}); };
var operaciones = function (numero1, numero2, opera) {
    return __awaiter(this, void 0, void 0, function () {
        var a;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operacion(numero1, numero2, opera)];
                case 1:
                    a = _a.sent();
                    return [2 /*return*/, a];
            }
        });
    });
};
operaciones(10, 5, "resta").then(function (v) {
    console.log(v);
});
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
