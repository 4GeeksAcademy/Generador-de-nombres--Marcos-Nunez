let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let dominio = pronoun.flatMap((pronombre) =>
  adj.flatMap((adjetivo) => noun.map((nombre) => `${pronombre}${adjetivo}${nombre}.com`))
);

console.log(dominio);
