let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let dominio = pronoun.flatMap((p) =>
  adj.flatMap((a) => noun.map((n) => `${p}${a}${n}.com`))
);

console.log(dominio);
