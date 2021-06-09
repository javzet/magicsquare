import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../helpers/createContext';
import { MagicSquare } from '../helpers/magicSquare';
import { DataCell, MS_Base } from '../types';

export default function useMagicSquare() {
  const [currentCellState, setCurrentCellState] = useState<DataCell | {}>({});
  const [magicSquare, setMagicSquare] = useState<MS_Base | []>([]);
  const { dataTrasnfer, setdataTrasnfer } = useContext(DataContext);

  const createMagicSquare = () => {
    const magicSquare = new MagicSquare();
    magicSquare.buildMagicSquare();
    return magicSquare.getData();
  };

  const setCurrentCell = (cell: DataCell) => {
    setCurrentCellState(cell);
    setdataTrasnfer({ ...dataTrasnfer, currentCell: cell });
  };

  return {
    currentCellState,
    magicSquare,
    createMagicSquare,
    setMagicSquare,
    setCurrentCell,
  };
}
