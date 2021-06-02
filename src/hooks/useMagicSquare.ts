import {useState} from 'react';

const initalState = {
  1: {1: '', 2: '', 3: ''},
  2: {1: '', 2: '', 3: ''},
  3: {1: '', 2: '', 3: ''},
};

const [magicSquare, setMagicSquare] = useState(initalState);
const [usedSquare, setUsedSquare] = useState(false);

const generateRandomNumber = (min: number = 1, max: number = 9) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buildMagicSquare = (pos: number, val: number) => {
  setUsedSquare(true);

  switch (pos) {
    case 1:
      setMagicSquare({
        ...magicSquare,
        [1]: {...magicSquare[1], '1': val.toString()},
      });
      break;
    case 2:
      setMagicSquare({
        ...magicSquare,
        [1]: {...magicSquare[1], '2': val.toString()},
      });
      break;

    case 3:
      setMagicSquare({
        ...magicSquare,
        [1]: {...magicSquare[1], '3': val.toString()},
      });
      break;
    case 4:
      setMagicSquare({
        ...magicSquare,
        [2]: {...magicSquare[1], '1': val.toString()},
      });
      break;
    case 5:
      setMagicSquare({
        ...magicSquare,
        [2]: {...magicSquare[1], '2': val.toString()},
      });
      break;
    case 6:
      setMagicSquare({
        ...magicSquare,
        [2]: {...magicSquare[1], '3': val.toString()},
      });
      break;
    case 7:
      setMagicSquare({
        ...magicSquare,
        [3]: {...magicSquare[1], '1': val.toString()},
      });
      break;
    case 8:
      setMagicSquare({
        ...magicSquare,
        [3]: {...magicSquare[1], '2': val.toString()},
      });
      break;
    case 9:
      setMagicSquare({
        ...magicSquare,
        [3]: {...magicSquare[1], '3': val.toString()},
      });
      break;
  }
};

const cleanMagicSquare = () => {
  setMagicSquare(initalState);
  setUsedSquare(false);
};

const generateMagicSquare = () => {
  const generateRandomPosition = generateRandomNumber();
  const generateRandomValue = generateRandomNumber();

  cleanMagicSquare();
  buildMagicSquare(generateRandomPosition, generateRandomValue);
};

export function useMagicSquare() {
  return {
    generateMagicSquare,
    magicSquare,
  };
}
