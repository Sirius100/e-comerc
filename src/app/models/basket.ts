export interface PropertyItem {
  title_pos: string,
  price_pos: number,
  image_pos: string,
  count_pos: number 
}

export interface Basket { [index: number] : PropertyItem}