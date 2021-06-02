import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Keyboard} from '../components/Keyboard';
import {KeyboardButton} from '../components/KeyboardButton';
import {MSCell} from '../components/MSCell';
import {styles} from '../theme/AppTheme';

export const CuadroMagicoScreen = () => {
  const initalState = {
    1: {1: '', 2: '', 3: ''},
    2: {1: '', 2: '', 3: ''},
    3: {1: '', 2: '', 3: ''},
  };

  const [magicSquare, setMagicSquare] = useState(initalState);
  const [usedSquare, setUsedSquare] = useState(false);
  const [state, setState] = useState(0);

  const generateRandomNumber = (min: number = 1, max: number = 9) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const buildMagicSquare = (pos: number, val: number) => {
    console.log({pos, val});
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
    // setMagicSquare({});
    if (usedSquare) {
      setMagicSquare(initalState);
      setUsedSquare(false);
      console.log({usedSquare, magicSquare});
    }
    return;
  };

  const generateMagicSquare = () => {
    const generateRandomPosition = generateRandomNumber();
    const generateRandomValue = generateRandomNumber();

    cleanMagicSquare();
    buildMagicSquare(generateRandomPosition, generateRandomValue);
  };

  useEffect(() => {
    console.log('cambio');
  }, [magicSquare]);

  return (
    <View style={styles.container}>
      <View style={styles.magic_square}>
        {/* Fila 1 */}
        <View style={styles.row}>
          <MSCell value={magicSquare[1][1]} textStyle={styles.emtyCell} />
          <MSCell
            value={magicSquare[1][2]}
            viewStyle={styles.VerticalBorderMiddle}
          />
          <MSCell value={magicSquare[1][3]} />
        </View>

        {/* Fila 2 */}
        <View style={[styles.row, styles.HorizontalBorderMiddle]}>
          <MSCell value={magicSquare[2][1]} />
          <MSCell
            value={magicSquare[2][2]}
            viewStyle={styles.VerticalBorderMiddle}
          />
          <MSCell value={magicSquare[2][3]} />
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <MSCell value={magicSquare[3][1]} />
          <MSCell
            value={magicSquare[3][2]}
            viewStyle={styles.VerticalBorderMiddle}
          />
          <MSCell value={magicSquare[3][3]} />
        </View>
      </View>
      <Text onPress={generateMagicSquare}>Generar</Text>
      <Keyboard />
    </View>
  );
};
