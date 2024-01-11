"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pica_1 = require("./models/Pica");
const form = document.querySelector('.create');
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const data = new FormData(form);
    const naujaPica = {
        pavadinimas: data.get('pavadinimas'),
        aprašymas: data.get('aprašymas'),
        priedai: data.getAll('priedai'),
        kaina: parseInt(data.get('kaina'))
    };
    const res = yield Pica_1.Pica.save(naujaPica);
    if (!res.ok) {
        console.log('Nepavyko išsaugoti šios picos.');
    }
    if (res.ok) {
        window.location.href = 'index.html';
    }
}));
