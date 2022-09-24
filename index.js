function ganjilGenap(params) {
  let ganjil = [];
  let genap = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i] % 2 != 0) {
      ganjil.push(params[i]);
    } else {
      genap.push(params[i]);
    }
  }

  return [ganjil, genap];
}

console.log(ganjilGenap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ganjilGenap([101, 200, 333, 984, 939, 367, 888, 576]));

//2a
let myFruits = [
  {
    genus: "Malus",
    name: "Apple",
    id: 6,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.3,
      fat: 0.4,
      calories: 52,
      sugar: 10.3,
    },
  },
  {
    genus: "Prunus",
    name: "Apricot",
    id: 35,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.5,
      fat: 0.1,
      calories: 15,
      sugar: 3.2,
    },
  },
  {
    genus: "Musa",
    name: "Banana",
    id: 1,
    family: "Musaceae",
    order: "Zingiberales",
    nutritions: {
      carbohydrates: 22,
      protein: 1,
      fat: 0.2,
      calories: 96,
      sugar: 17.2,
    },
  },
  {
    genus: "Rubus",
    name: "Blackberry",
    id: 64,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 9,
      protein: 1.3,
      fat: 0.4,
      calories: 40,
      sugar: 4.5,
    },
  },
  {
    genus: "Fragaria",
    name: "Blueberry",
    id: 33,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 5.5,
      protein: 0,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
  },
  {
    genus: "Prunus",
    name: "Cherry",
    id: 9,
    family: "Rosaceae",
    order: "None",
    nutritions: {
      carbohydrates: 12,
      protein: 1,
      fat: 0.3,
      calories: 50,
      sugar: 8,
    },
  },
  {
    genus: "Durio",
    name: "Durian",
    id: 60,
    family: "Malvaceae",
    order: "Malvales",
    nutritions: {
      carbohydrates: 27.1,
      protein: 1.5,
      fat: 5.3,
      calories: 147,
      sugar: 6.75,
    },
  },
  {
    genus: "Ficus",
    name: "Fig",
    id: 68,
    family: "Moraceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 19,
      protein: 0.8,
      fat: 0.3,
      calories: 74,
      sugar: 16,
    },
  },
  {
    genus: "Ribes",
    name: "Gooseberry",
    id: 69,
    family: "Grossulariaceae",
    order: "Saxifragales",
    nutritions: {
      carbohydrates: 10,
      protein: 0.9,
      fat: 0.6,
      calories: 44,
      sugar: 0,
    },
  },
  {
    genus: "Vitis",
    name: "Grapes",
    id: 47,
    family: "Vitaceae",
    order: "Vitales",
    nutritions: {
      carbohydrates: 18.1,
      protein: 0.72,
      fat: 0.16,
      calories: 69,
      sugar: 15.48,
    },
  },
  {
    genus: "Malus",
    name: "GreenApple",
    id: 72,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 3.1,
      protein: 0.4,
      fat: 0.1,
      calories: 21,
      sugar: 6.4,
    },
  },
  {
    genus: "Psidium",
    name: "Guava",
    id: 37,
    family: "Myrtaceae",
    order: "Myrtales",
    nutritions: {
      carbohydrates: 14,
      protein: 2.6,
      fat: 1,
      calories: 68,
      sugar: 9,
    },
  },
  {
    genus: "Apteryx",
    name: "Kiwi",
    id: 66,
    family: "Actinidiaceae",
    order: "Struthioniformes",
    nutritions: {
      carbohydrates: 15,
      protein: 1.1,
      fat: 0.5,
      calories: 61,
      sugar: 9,
    },
  },
  {
    genus: "Citrus",
    name: "Lemon",
    id: 26,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 9,
      protein: 1.1,
      fat: 0.3,
      calories: 29,
      sugar: 2.5,
    },
  },
  {
    genus: "Citrus",
    name: "Lime",
    id: 44,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 8.4,
      protein: 0.3,
      fat: 0.1,
      calories: 25,
      sugar: 1.7,
    },
  },
  {
    genus: "Vaccinium",
    name: "Lingonberry",
    id: 65,
    family: "Ericaceae",
    order: "Ericales",
    nutritions: {
      carbohydrates: 11.3,
      protein: 0.75,
      fat: 0.34,
      calories: 50,
      sugar: 5.74,
    },
  },
  {
    genus: "Litchi",
    name: "Lychee",
    id: 67,
    family: "Sapindaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 17,
      protein: 0.8,
      fat: 0.44,
      calories: 66,
      sugar: 15,
    },
  },
  {
    genus: "Mangifera",
    name: "Mango",
    id: 27,
    family: "Anacardiaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 15,
      protein: 0.82,
      fat: 0.38,
      calories: 60,
      sugar: 13.7,
    },
  },
  {
    genus: "Cucumis",
    name: "Melon",
    id: 41,
    family: "Cucurbitaceae",
    order: "Cucurbitaceae",
    nutritions: {
      carbohydrates: 8,
      protein: 0,
      fat: 0,
      calories: 34,
      sugar: 8,
    },
  },
  {
    genus: "Citrus",
    name: "Orange",
    id: 2,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 8.3,
      protein: 1,
      fat: 0.2,
      calories: 43,
      sugar: 8.2,
    },
  },
  {
    genus: "Carica",
    name: "Papaya",
    id: 42,
    family: "Caricaceae",
    order: "Caricacea",
    nutritions: {
      carbohydrates: 11,
      protein: 0,
      fat: 0.4,
      calories: 43,
      sugar: 1,
    },
  },
  {
    genus: "Passiflora",
    name: "Passionfruit",
    id: 70,
    family: "Passifloraceae",
    order: "Malpighiales",
    nutritions: {
      carbohydrates: 22.4,
      protein: 2.2,
      fat: 0.7,
      calories: 97,
      sugar: 11.2,
    },
  },
  {
    genus: "Pyrus",
    name: "Pear",
    id: 4,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 15,
      protein: 0.4,
      fat: 0.1,
      calories: 57,
      sugar: 10,
    },
  },
  {
    genus: "Diospyros",
    name: "Persimmon",
    id: 52,
    family: "Ebenaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 18,
      protein: 0,
      fat: 0,
      calories: 81,
      sugar: 18,
    },
  },
  {
    genus: "Ananas",
    name: "Pineapple",
    id: 10,
    family: "Bromeliaceae",
    order: "Poales",
    nutritions: {
      carbohydrates: 13.12,
      protein: 0.54,
      fat: 0.12,
      calories: 50,
      sugar: 9.85,
    },
  },
  {
    genus: "Prunus",
    name: "Plum",
    id: 71,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.7,
      fat: 0.28,
      calories: 46,
      sugar: 9.92,
    },
  },
  {
    genus: "Rubus",
    name: "Raspberry",
    id: 23,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 12,
      protein: 1.2,
      fat: 0.7,
      calories: 53,
      sugar: 4.4,
    },
  },
  {
    genus: "Fragaria",
    name: "Strawberry",
    id: 3,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 5.5,
      protein: 0.8,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
  },
  {
    genus: "Solanum",
    name: "Tomato",
    id: 5,
    family: "Solanaceae",
    order: "Solanales",
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.9,
      fat: 0.2,
      calories: 74,
      sugar: 2.6,
    },
  },
  {
    genus: "Spondias",
    name: "Umbu",
    id: 73,
    family: "Anacardiaceae",
    order: "0",
    nutritions: { carbohydrates: 0, protein: 0, fat: 0, calories: 0, sugar: 0 },
  },
  {
    genus: "Citrullus",
    name: "Watermelon",
    id: 25,
    family: "Cucurbitaceae",
    order: "Cucurbitales",
    nutritions: {
      carbohydrates: 8,
      protein: 0.6,
      fat: 0.2,
      calories: 30,
      sugar: 6,
    },
  },
];

//2b

function highNutrition(nutrition, value) {
  let result = [];
  for (let x = 0; x < myFruits.length; x++) {
    if (
      myFruits[x].nutritions.toLowerCase() <= value.toLowerCase()
    ) {
      result.push(myFruits[x]);
    }
  }
  return result;
}

// let searchHighNutrition = myFruits.filter((nutrition) =>
//   nutrition.nutritions.toLowerCase().includes("carbohydrates".toLowerCase())
// );

let state = {
  token: "",
  user: {},
};
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
function register() {
  const dataToSend = {
    name: prompt("Enter your name"),
    email: prompt("Enter your email"),
    password: prompt("Enter your password"),
    age: prompt("Enter your age"),
  };

  const init = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(dataToSend),
  };

  fetch("https://api-nodejs-todolist.herokuapp.com/user/register", init)
    .then((res) => res.json())
    .then((res) => {
      state.token = res.token;
      console.log(res);
    })
    .catch((err) => console.error(err));

  return "Please Wait. . .";
}

function login() {
  const dataToSend = {
    email: prompt("Enter your email"),
    password: prompt("Enter your password"),
  };

  const init = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(dataToSend),
  };

  fetch("https://api-nodejs-todolist.herokuapp.com/user/login", init)
    .then((res) => res.json())
    .then((res) => {
      state.token = res.token;
      state.user = res.user;
      console.log(res);
    })
    .catch((err) => console.error(err));

  return "Please Wait. . .";
}

function addTask() {
  const myHeadersPrivate = new Headers();
  myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
  myHeadersPrivate.append("Content-Type", "application/json");

  const dataToSend = {
    description: prompt("Enter your task"),
  };

  const init = {
    method: "POST",
    headers: myHeadersPrivate,
    body: JSON.stringify(dataToSend),
  };

  fetch("https://api-nodejs-todolist.herokuapp.com/task", init)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return "Please Wait. . .";
}

function allTask() {
  const myHeadersPrivate = new Headers();
  myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
  myHeadersPrivate.append("Content-Type", "application/json");

  const init = {
    method: "GET",
    headers: myHeadersPrivate,
  };

  fetch("https://api-nodejs-todolist.herokuapp.com/task", init)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return "Please Wait. . .";
}

function taskById(id) {
  const myHeadersPrivate = new Headers();
  myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
  myHeadersPrivate.append("Content-Type", "application/json");

  const init = {
    method: "GET",
    headers: myHeadersPrivate,
  };

  fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return "Please Wait. . .";
}

function updateById(id) {
  const myHeadersPrivate = new Headers();
  myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
  myHeadersPrivate.append("Content-Type", "application/json");

  const dataToSend = {
    completed: true,
  };

  const init = {
    method: "PUT",
    headers: myHeadersPrivate,
    body: JSON.stringify(dataToSend),
  };

  fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return "Please Wait. . .";
}

function deletetask(id) {
  const myHeadersPrivate = new Headers();
  myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
  myHeadersPrivate.append("Content-Type", "application/json");

  const init = {
    method: "DELETE",
    headers: myHeadersPrivate,
  };

  fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return "Please Wait. . .";
}
