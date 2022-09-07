import Buyable from './Buyable';

export default class Good implements Buyable {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly year: number,
        readonly country: string,
        readonly img: string,
        readonly price: number,
        readonly isDigital: boolean
    ) { }
}
