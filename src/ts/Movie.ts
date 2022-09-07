import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly titleEng: string,
        readonly isIMAX: boolean,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: Array<string>,
        readonly time: number | Date,
        readonly img: string,
        readonly price: number,
        readonly isDigital: boolean
    ) { }
}
