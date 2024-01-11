import { Pica, PicaModelis } from "./models/Pica";

// ! - elementas tikrai egzistuoja, todėl traktuok jį kaip elementą
const rootElement = document.querySelector('.root')!

function createPizzaTemplate(pica: PicaModelis): string {
    return `
        <div class="pizza">
            <h2>${pica.pavadinimas}</h2>
            <p class="toppings">${pica.priedai.join(', ')}</p>
            <p>${pica.aprašymas}</p>
            <span>${pica.kaina} €</span>
        </div>
    `
}

function renderTemplate(templates: string[], parent: Element): void {
    const templateElement = document.createElement('template')
    for(const t of templates) {
        templateElement.innerHTML += t
    }
    parent.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded', async () => {
    // užkrauname picų duomenis
    const picos = await Pica.loadAll()
    console.log(picos)

    // sukuriame masyvą su šabloniniais string kiekvienai picai
    const picosŠablonai = picos.map(createPizzaTemplate)

    // persiunčiame picos šablonus į DOM
    renderTemplate(picosŠablonai, rootElement)
})
