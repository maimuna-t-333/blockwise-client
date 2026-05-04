export type UserRole= 'user' |'member'| 'admin';

export interface User{
    _id:string;
    email:string;
    name:string;
    displayName?:string;
    photoURL?:string;
    role:UserRole;
}

export interface Apartment{
    _id:string;
    apartmentNo:string;
    blockName:string;
    floorNo:string;
    rent:number;
    apartmentImage?:string;
    description?:string;
}

export interface Agreement {
  _id?: string;
  email: string;
  name: string;
  apartmentNo: string;
   floorNo: string;
  blockName: string;
  rent:number;
  status: 'pending' | 'checked';
  acceptDate?: string;
  createdAt?:string;
}

export interface Payment {
  _id?: string;
  email: string;
  amount: number;
  transactionId: string;
  date: string;
  month: string;
}

export interface Announcement {
  _id?: string;
  title: string;
  description: string;
  date: string;
}

export interface Coupon {
  _id?: string;
  code: string;
  discount: number;
  description?: string;
}

export interface ApartmentResponse {
    apartments:Apartment[];
    total:number;
}