import { useContext } from 'react';
import { DataContext } from '../helpers/createContext';
import { DataCell, DefaultData } from '../types';

export default function useKeyboard() {
  const context = useContext(DataContext);

  const setNumber = (number: string, cellData?: DataCell) => {
    if (cellData) {
      if (cellData === undefined || cellData === null) {
        return;
      } else {
        const newMagicSquare = [...context.magicSquare];
        const cellToChange = newMagicSquare.find(
          (data: DefaultData) =>
            data.position.toString() === context.currentCellState.position,
        );
        cellToChange.value = Number.parseInt(number, 10);
        context.setMagicSquare(newMagicSquare);
      }
    } else {
      return;
    }
  };

  const resetMagicSquare = (value?: string) => {
    context.setMagicSquare(JSON.parse(context.originalMagicSquare));
  };

  const evalMS = () => {
    const result = context.evalMagicSquare(context.magicSquare);
    console.log(result);
    if (result !== false) {
      console.log('listo');
      resetMagicSquare();
    }
  };

  return { setNumber, resetMagicSquare, evalMS };
}
