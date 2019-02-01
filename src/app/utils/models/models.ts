export interface ItemData {
  title: string;
  data: ItemModel[];
}

export interface ItemModel {
  id: number;
  title: string;
  comments: string[];
}
