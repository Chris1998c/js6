const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

person2.firstName = "simon";


console.log(person1);
console.log(person2);


/la soluziona precendente non era possibile perchè const person2 = person1; non viene creato nessun nuovo oggetto ma fa riferimento al primo creato, quindi utilizzando person2.firstname="simon" cambierebbero nuovamente entrambi, la soluzione che ho prosto invece permette di modificare solo il nome del secondo ogetto, mantenendo 2 soluzioni separate*/