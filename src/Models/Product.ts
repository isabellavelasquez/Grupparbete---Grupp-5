export class Product {
  constructor(
    public title: string,
    public price: number,
    public imgSrc: string,
    public imgAlt: string,
    public description: string,
    public id: string,
    public isInCart: boolean,
    public amount: number
  ) {}
}
