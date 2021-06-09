import { useContext } from 'react';
import { DataContext } from '../helpers/createContext';

export default function useKeyboard() {
  const {
    dataTrasnfer,
    setdataTrasnfer,
    generalMagicSquare,
    setGeneralMagicSquare,
    originalMagicSquare,
  } = useContext(DataContext);

  const setNumber = (number: string) => {
    setdataTrasnfer({ ...dataTrasnfer, keyPressed: number });

    const newGeneralMagicSquare = [...generalMagicSquare];
    const changeCell = newGeneralMagicSquare.find(
      (cell: any) =>
        cell.position.toString() === dataTrasnfer.currentCell.position,
    );
    changeCell.value = Number.parseInt(number, 10);
    setGeneralMagicSquare(newGeneralMagicSquare);
  };

  const resetMagicSquare = (value: string) => {
    console.log(value);
    setGeneralMagicSquare(originalMagicSquare);
  };

  return { setNumber, resetMagicSquare };
}
