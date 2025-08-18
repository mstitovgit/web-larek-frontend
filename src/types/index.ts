export type TCategory =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил';

export type TPayment = 'online' | 'offline';

export interface IItem {
	id: string;
	title: string;
	image: string;
	price: number;
	description: string;
	category: TCategory;
}

export interface IItemList {
	total: number;
	items: IItem[];
}

export interface ICart {
	total: number;
	items: string[];
}

export interface IContactData {
	email: string;
	phone: string;
}

export interface IPaymentData {
	address: string;
	payment: TPayment;
}

export type IOrder = ICart & IContactData & IPaymentData;


export interface IItemData {
	items: IItem[];
	preview: string | null;
	getItem(id: string): IItem;
}

export interface ICartData extends ICart {
	addItem(id: string): void;
	removeItem(id: string): void;
	hasItem(id: string): boolean;
	getItemsLength(): number;
	clear():void
}

export interface IOrderData extends IOrder{
	setData(data:Partial<IOrder>):void;
	validatePayment(): boolean;
  validateContacts(): boolean;
}
