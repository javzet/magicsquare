import { useState } from 'react';
import { MagicSquare } from '../helpers/magicSquare';
import { DataCell, MS_Base } from '../types';

export default function useMagicSquare() {
  const [currentCellState, setCurrentCellState] = useState<DataCell | {}>({});
  const [magicSquare, setMagicSquare] = useState<MS_Base | []>([]);
  const [originalMagicSquare, setOriginalMagicSquare] = useState<any>([]);
  const [msO, setMsO] = useState<MagicSquare | null>(null);

  const createMagicSquare = () => {
    const magicSquare = new MagicSquare();
    setMsO(magicSquare);
    magicSquare.buildMagicSquare();
    return magicSquare.getData();
  };

  const setCurrentCell = (cell: DataCell) => {
    setCurrentCellState(cell);
  };

  const evalMagicSquare = (magicSquare: MS_Base) => {
    const resp = msO?.evalMagicSquare(magicSquare);
    return resp;
  };

  return {
    currentCellState,
    magicSquare,
    createMagicSquare,
    setMagicSquare,
    setCurrentCell,
    originalMagicSquare,
    setOriginalMagicSquare,
    evalMagicSquare,
  };
}
