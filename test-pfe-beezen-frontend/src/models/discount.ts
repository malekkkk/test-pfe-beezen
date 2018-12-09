export class Discount {
  public Type: string;
  public Value: number;
  public SliceValue: number;
  constructor(type: string, value: number, sliceValue: number) {

    this.Type = type;
    this.Value = value;
    this.SliceValue = sliceValue;
  }
}
