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
// ! - elementas tikrai egzistuoja, todėl traktuok jį kaip elementą
const rootElement = document.querySelector('.root');
function createPizzaTemplate(pica) {
    return `
        <div class="pizza">
            <h2>${pica.pavadinimas}</h2>
            <p class="toppings">${pica.priedai.join(', ')}</p>
            <p>${pica.aprašymas}</p>
            <span>${pica.kaina} €</span>
        </div>
    `;
}
function renderTemplate(templates, parent) {
    const templateElement = document.createElement('template');
    for (const t of templates) {
        templateElement.innerHTML += t;
    }
    parent.append(templateElement.content);
}
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    // užkrauname picų duomenis
    const picos = yield Pica_1.Pica.loadAll();
    console.log(picos);
    // sukuriame masyvą su šabloniniais string kiekvienai picai
    const picosŠablonai = picos.map(createPizzaTemplate);
    // persiunčiame picos šablonus į DOM
    renderTemplate(picosŠablonai, rootElement);
}));
