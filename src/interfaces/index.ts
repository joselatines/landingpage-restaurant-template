export interface IFoodCard {
	link?: string;
	img: string;
	title: string;
	price: number;
}

export interface IFoodItems {
	items: IFoodCard[];
}
