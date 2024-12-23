export class Products {
    constructor (
        public title:string, 
        public img:HTMLImageElement, 
        public price:number, 
        public id:string, 
        public isInCart:boolean, 
    ) {}
}