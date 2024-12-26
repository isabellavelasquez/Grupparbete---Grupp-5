export class Product {
  constructor(
    public title: string,
    public price: number,
    public imgSrc: string,
    public imgAlt: string,
    public id: string,
    public isInCart: boolean
  ) {}
}
