const jedi = [];

jedi[jedi.length] = "Luke";
console.log(jedi);

jedi.push("Obi-Wan Kenobi")
console.log(jedi);

jedi.unshift("Yoda");
console.log(jedi);

console.log(jedi[1]);

jedi.splice(2,2)
console.log(jedi);

jedi.shift();
console.log(jedi);

const sithLords = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
];

const imperialOfficers = [
    "Grand Moff Tarkin",
    "Orson Krennic"
];

const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

console.log(starWarsVillians.slice(0,2));

