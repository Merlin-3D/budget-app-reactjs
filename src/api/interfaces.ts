import { StatusType } from "./types";

export interface AccountRequestData {
  name: string;
  amount: number;
  date: string;
  color: string;
  icon: string;
}

export interface AccountResponseData {
  id: string;
  name: string;
  amount: number;
  status: StatusType;
  date: string;
  color: string;
  icon: string;
}

export interface CategoriesResponseData {
  icon: React.ReactNode;
  color: string;
  title: string;
  price: string;
}

export interface IconData {
  icon: React.ReactNode;
  title: string;
}
