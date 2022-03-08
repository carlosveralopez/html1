import { MarvelModel } from "./model";

export const detailLink = (model: MarvelModel): string => {
  const arr = model.urls.filter(it => it.type == "detail");
  return arr.length ? arr[0].url : "";
};

export const wikiLink = (model: MarvelModel): string => {
  const arr = model.urls.filter(it => it.type == "wiki");
  return arr.length ? arr[0].url : "";
};
