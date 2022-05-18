import React from "react";
import { ColorType } from "../components/CardHome";

export interface Idata {
  id: number;
  name: string;
  value: string;
}

export interface ICard {
  title: string;
  color: ColorType;
  url: string;
  price: string;
}

export interface IBiggestExpense {
  logo: React.ReactNode;
  title: string;
  price: string;
}

export interface ICircularChart {
  name: string;
  value: number;
}

export interface ICardFinance {
  title: string;
  date: string;
  price: string;
}
