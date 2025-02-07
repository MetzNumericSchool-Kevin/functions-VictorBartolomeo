const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
    potion_soin: {
        ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
        temps_de_fabrication: 3, // exprimé en secondes
    },
};
const inventaire = [
    {
        id: "potion_soin", // identifiant unique de la potion
        prix: 10,
        stock: 0,
    },
];

// Salutation Aventurier

function salutations(nom_sorcier) {
    return "Salutations Aventurier ! Je me nomme " + nom_sorcier + " pour vous servir.";
}

console.log(salutations(nom_sorcier));

// Quel est le tarif d'une potion ?

function potionCost(potionID,inventaire,quantity=1){
    const findPotion=inventaire.find(p=>p.id === potionID);
    if(findPotion){
        return findPotion.prix*quantity;
    } else {
        return "Je ne trouve pas la potion dans l'arrière boutique..."
    }
}

console.log(potionCost("potion_soin",inventaire,3))