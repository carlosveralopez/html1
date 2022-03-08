import { MarvelModel } from "../marvel/model";

export class Comic implements MarvelModel {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public thumbnail: any,
    public isbn: string,
    public images: any[],
    public urls: any[]
  ) {}
}
