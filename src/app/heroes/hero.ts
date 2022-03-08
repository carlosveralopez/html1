import { MarvelModel } from "../marvel/model";

export class Hero implements MarvelModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public thumbnail: any,
    public urls: any[]
  ) {}
}
