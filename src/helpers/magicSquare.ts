import { DefaultData, LevelType, MS_Base } from '../types';

export class MagicSquare {
  private readonly size: number;
  private ms_base: MS_Base;
  private defaultData: Array<DefaultData>;
  private readonly level: LevelType;

  constructor(size: number = 3, level: LevelType = 2) {
    if (size < 3) {
      this.size = 9;
    } else if (size > 5) {
      this.size = 25;
    } else {
      this.size = size * size;
    }
    this.ms_base = [];
    this.defaultData = [];
    this.level = level;

    this.defaultData = this.setDefaultData();
  }

  private setDefaultData() {
    let defaultData = this.generateDefualtData();

    const defaultDataChecked: Array<any> = this.checkDefaultData(defaultData);

    while (defaultDataChecked.length > 0) {
      defaultData = this.generateDefualtData();
    }

    return defaultData;
  }

  private generateDefualtData() {
    let defaultData: any[] = [];
    for (let i = 1; i <= this.level; i++) {
      defaultData = [...defaultData, this.generateRandomNumber()];
    }

    this.checkDefaultData(defaultData);

    return defaultData;
  }

  private checkDefaultData(defaultData: Array<DefaultData>) {
    const planeList = defaultData.map(data => data.value);
    let duplied = [];

    const tempArray = [...planeList].sort();
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplied.push(tempArray[i]);
      }
    }

    return duplied;
  }

  private generateRandomNumber() {
    const min = this.size - (this.size - 1);
    const max = this.size;

    return {
      position: Math.floor(Math.random() * (max - min + 1) + min),
      value: Math.floor(Math.random() * (max - min + 1) + min),
    };
  }

  public buildMagicSquare() {
    let ms_base: MS_Base = [];

    for (let i = 1; i <= this.size; i++) {
      ms_base = [
        ...ms_base,
        {
          position: i,
          value: '',
        },
      ];
    }

    this.ms_base = this.recorrerDefaultData(ms_base);
  }

  private recorrerDefaultData(ms_base: Array<DefaultData>) {
    const base = ms_base.map((cell: DefaultData) => {
      this.defaultData.forEach(data => {
        if (data.position === cell.position) {
          cell.value = data.value;
        }
      });
      return cell;
    });
    return base;
  }

  public getData() {
    return {
      defaultData: { ...this.defaultData },
      size: this.size,
      generatedMagicSquare: this.ms_base,
      originalMagicSquare: JSON.stringify(this.ms_base),
    };
  }

  public evalMagicSquare(completedMagicSquare: MS_Base) {
    const test1 = this.checkDefaultData(completedMagicSquare);

    if (test1.length > 0) {
      return;
    }

    let tests: any = {
      test1: [],
      test2: [],
      test3: [],
      test4: [],
      test5: [],
      test6: [],
    };

    for (let i = 0; i < 3; i++) {
      tests.test1 = [...tests.test1, completedMagicSquare[i]];
    }

    for (let i = 3; i < 6; i++) {
      tests.test1 = [...tests.test1, completedMagicSquare[i]];
    }
    for (let i = 6; i < 9; i++) {
      tests.test1 = [...tests.test1, completedMagicSquare[i]];
    }

    const t1 = tests.test1.reduce((acc, el) => acc + el.value, 0);
    const t2 = tests.test2.reduce((acc, el) => acc + el.value, 0);
    const t3 = tests.test3.reduce((acc, el) => acc + el.value, 0);
    const t4 = tests.test4.reduce((acc, el) => acc + el.value, 0);
    const t5 = tests.test5.reduce((acc, el) => acc + el.value, 0);
    const t6 = tests.test6.reduce((acc, el) => acc + el.value, 0);

    console.log(t1);

    if (
      t1 === 15 &&
      t2 === 15 &&
      t3 === 15 &&
      t4 === 15 &&
      t5 === 15 &&
      t6 === 15
    ) {
      return true;
    } else {
      return false;
    }
  }
}
