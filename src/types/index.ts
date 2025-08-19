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

export interface IContactData {
	email: string;
	phone: string;
}

export interface IPaymentData {
	address: string;
	payment: TPayment;
}

export type IOrder = IContactData & IPaymentData;


export interface IItemData {
	items: IItem[];
	preview: string | null;
	getItem(id: string): IItem;
}

export interface ICartData {
	items:IItem[];
	addItem(item: IItem): void;
	removeItem(id: string): void;
	hasItem(id: string): boolean;
	getItemsLength(): number;
	getTotal():number;
	clear():void
}

export interface IOrderData extends IOrder{
	setData(data:Partial<IOrder>):void;
	validatePayment(): {valid: boolean, error:string};
  validateContacts(): {valid: boolean, error:string};
}
