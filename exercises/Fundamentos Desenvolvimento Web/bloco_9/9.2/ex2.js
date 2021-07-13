const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray
      .map((number) => number * number)
      .reduce((sum, number) => sum + number);

    sum < 8000 ? resolve(sum) : reject(sum);
  });

  myPromise
    .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
    .then((array) => array.reduce((number, acc) => number + acc, 0))
    .then((result) => console.log(`Promise resolvida ${result}`))
    .catch((sum) => console.log(`Promise rejeitada ${sum}`));
};

/* Bônus
Utilize somente Higher Order Functions para fazer as operações com o array;
Todas as soluções acima realizaram esse bonus.
Refatore a Promise para utilizar somente async e await .
 */
fetchPromise();

const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray
    .map((number) => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
};

const sumArrayFromSum = (sum) =>
  [2, 3, 5, 10]
    .map((number) => sum / number)
    .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log("É mais de oito mil! Essa promise deve estar quebrada!");
  }
};

fetchPromise();
