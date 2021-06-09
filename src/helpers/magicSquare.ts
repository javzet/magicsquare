import { DefaultData, LevelType, MS_Base } from '../types';

export class MagicSquare {
  private readonly size: number;
  private ms_base: MS_Base;
  private readonly defaultData: Array<DefaultData>;
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
    // if (this.level === 2) {
    //   this.defaultData = this.generateRandomNumber();
    // } else {
    for (let i = 1; i <= this.level; i++) {
      this.defaultData = [...this.defaultData, this.generateRandomNumber()];
    }
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
          value:
            /* this.defaultData.position === i ? this.defaultData.value : "" */ '',
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
    };
  }
}
