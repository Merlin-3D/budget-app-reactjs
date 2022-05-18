import { StatusType } from "../api/types";
export class MAccount {
  //   name?: string;
  //   amount?: number;
  //   date?: string;
  //   status?: StatusType;

  public get id(): string {
    return this.id!;
  }

  public set id(value: string) {
    this.id = value;
  }

  public get name(): string {
    return this.name;
  }

  public set name(value: string) {
    this.name = value;
  }

  public get amount(): number {
    return this.amount;
  }

  public set amount(value: number) {
    this.amount = value;
  }

  public get date(): string {
    return this.date;
  }

  public set date(value: string) {
    this.date = value;
  }

  public get color(): string {
    return this.date;
  }

  public set color(value: string) {
    this.date = value;
  }

  public get icon(): string {
    return this.date;
  }

  public set icon(value: string) {
    this.date = value;
  }

  public get status(): StatusType {
    return this.status;
  }

  public set status(value: StatusType) {
    this.status = value;
  }
}
