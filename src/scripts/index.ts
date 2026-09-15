import { ElectricRat } from "./models/ElectricRat.class";
import "../styles/style.css"
const init = function () {
    const rats: ElectricRat[] = [];
    document.getElementById("saveRatButton")?.addEventListener("click", () => {
        const nameInputElement = document.getElementById("nameInput") as HTMLInputElement;
        const name = nameInputElement.value;
        const ratPowerValues = getRatPowerValues();
        const rat = new ElectricRat(name, ratPowerValues.atk, ratPowerValues.hp);
        rats.push(rat);
        console.log(rat.toString())
        printCards(rats)
    });
};
const printCards = function (rats: ElectricRat[]) {
    const cardsContainer = document.getElementById("cards");
    while(cardsContainer?.firstChild) cardsContainer.removeChild(cardsContainer.firstChild);
    rats.forEach((rat: ElectricRat) => {
        const card = document.createElement("div");
        const cardHeader = document.createElement("div")
        const cardBody = document.createElement("div")
        const cardTitle = document.createElement('h1');
        const cardHpLabel = document.createElement("strong");
        const cardHpValue = document.createElement("p");
        const cardAtkLabel = document.createElement("strong");
        const cardAtkValue = document.createElement("p");
        const cardValueGroup1 = document.createElement("div");
        const cardValueGroup2 = document.createElement("div");

        card.classList.add("card");
        cardHeader.classList.add("card-header");
        cardBody.classList.add("card-body");
        cardTitle.classList.add("card-title");
        cardHpValue.classList.add("card-value");
        cardHpLabel.classList.add("card-label");
        cardAtkValue.classList.add("card-value");
        cardAtkLabel.classList.add("card-label");
        cardValueGroup1.classList.add("card-value-group")
        cardValueGroup2.classList.add("card-value-group")

        cardTitle.textContent = rat.name;
        cardHpValue.textContent = rat.hp.toString();
        cardAtkValue.textContent = rat.atk.toString();
        cardHpLabel.textContent = "HP:"
        cardAtkLabel.textContent = "ATK:"

        cardsContainer?.appendChild(card);
        card.appendChild(cardHeader);
        card.appendChild(cardBody)
        cardHeader.appendChild(cardTitle);
        cardBody.appendChild(cardValueGroup1);
        cardBody.appendChild(cardValueGroup2);
        cardValueGroup1.appendChild(cardHpLabel);
        cardValueGroup1.appendChild(cardHpValue);
        cardValueGroup2.appendChild(cardAtkLabel);
        cardValueGroup2.appendChild(cardAtkValue);
    });
};
const getRatPowerValues = function () {
    return {
        atk: Math.floor(Math.random() * 10) + 10,
        hp: Math.floor(Math.random() * 50) + 50
    };
};
document.addEventListener("DOMContentLoaded", init);