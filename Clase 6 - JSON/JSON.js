let personas = ["Maria","Pablo","Jona"]
console.log(personas)

let personasJSON=JSON.stringify(personas)// Se usa JSON para compart info con otras tecnologia
console.log(personasJSON)

let personasOriginal=JSON.parse(personasJSON)
console.log(personasOriginal)

personasOriginal.push("Ana")
console.log(personasOriginal)