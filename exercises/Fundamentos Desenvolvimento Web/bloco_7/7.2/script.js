const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(
    `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N: ${order.address.numbermResid}, AP: ${order.address.apartment}`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  const newBuyer = (order.name = "Luiz Silva");
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = (order.payment.total = "50");
  console.log(
    `Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00.`
  );
};

orderModifier(order);

// Parte 2

/* Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
Crie uma função para mostrar o tamanho de um objeto.
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 
Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:*/

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, "turno", "tarde");
const listKey = (obj) => Object.keys(obj);
console.log(listKey(lesson1));
//------------------------------------------

const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson3));
//------------------------------------------

const valueObj = (obj) => Object.values(obj);
console.log(valueObj(lesson3));
//------------------------------------------

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const numberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(numberOfStudents(allLessons));
// ------------------------------------------

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson2, 2));
// ------------------------------------------

const checkKeyValue = (obj, key, value) => {
  const arr = Object.entries(obj);
  let equal = false;
  for (index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) {
      equal = true;
      return equal;
    }
  }
};
console.log(checkKeyValue(lesson2, "professor", "Carlos"));
// ------------------------------------------

const checkMath = (obj) => {
  const arr = Object.keys(obj);
  let total = 0;
  for (index in arr) {
    if (obj[arr[index]].materia === "Matemática") {
      total += obj[arr[index]].numeroEstudantes;
      return total;
    }
  }
};
console.log(checkMath(allLessons));
// ------------------------------------------

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia);
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
};

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
};
console.log(createReport(allLessons, "Carlos"));
