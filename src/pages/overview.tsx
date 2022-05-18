import React from "react";
import CardHome from "../components/CardHome";
import Chart from "chart.js";
import { IBiggestExpense, ICard, Idata } from "../interfaces/Iprops";
import { BsBasket2Fill, BsFillCameraFill } from "react-icons/bs";
import { FaTshirt, FaStore, FaBox, FaTruckMoving } from "react-icons/fa";
import BiggestExpense from "../components/BiggestExpense";
import { Select } from "../components/Selected";
import { MyChart } from "../components/Chart";
import { CircularChart } from "../components/CircularChart";
import { Page } from "./components/Page";

const card: ICard[] = [
  {
    title: "Expenses",
    color: "danger",
    price: "- 24,500 XAF",
    url: "https://img.icons8.com/fluency/48/000000/no-hidden-fee.png",
  },
  {
    title: "Expense & Revenues",
    color: "primary",
    price: "10,500 XAF",
    url: "https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-revenue-crowdfunding-kmg-design-outline-color-kmg-design.png",
  },
  {
    title: "Revenues",
    color: "success",
    price: "14,455 XAF",
    url: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-revenue-digital-nomading-relocation-flaticons-flat-flat-icons-3.png",
  },
];

const biggest: IBiggestExpense[] = [
  {
    logo: <BsBasket2Fill className="text-5xl text-red-500 pt-4" />,
    price: "1200 XAF",
    title: "Shopping Cost",
  },
  {
    logo: <FaTshirt className="text-5xl text-blue-500 pt-4" />,
    price: "2500 XAF",
    title: "Clothes a Shoes",
  },
  {
    logo: <BsFillCameraFill className="text-5xl text-green-300 pt-4" />,
    price: "3805 XAF",
    title: "Canon Camera",
  },
  {
    logo: <FaStore className="text-5xl text-yellow-500 pt-4" />,
    price: "3000 XAF",
    title: "Home Loan",
  },
  {
    logo: <FaBox className="text-5xl text-green-500 pt-4" />,
    price: "1200 XAF",
    title: "Birthday Gift",
  },
  {
    logo: <FaTruckMoving className="text-5xl text-gray-500 pt-4" />,
    price: "4500 XAF",
    title: "Pickup Loah",
  },
];

export default function () {
  return (
    <Page title="Home Wallet" subtitle="Change default wallet" select>
      {" "}
      <div className="flex justify-between my-6 w-full h-4/6 bg-white rounded-md">
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-row px-8 w-full justify-between mb-4">
            {card.map((item) => {
              return (
                <CardHome
                  color={item.color}
                  price={item.price}
                  title={item.title}
                  url={item.url}
                />
              );
            })}
          </div>
          <MyChart />
        </div>

        <div className=" w-6/12 h-full border-dashed  border-l-2">
          <div className="flex flex-row w-full justify-between mt-6 mb-1 px-6">
            <h1 className="text-2xl font-semibold">Budget</h1>
            <h1 className="text-2xl font-semibold text-primary-10">
              50,000 XAF
            </h1>
          </div>
          <CircularChart />

          <div className="flex flex-row w-full justify-between px-6">
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">35,000 XAF</h1>
              <h1 className="text-sm font-semibold text-gray-500">
                Monthly Limit
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold ">30,000 XAF</h1>
              <h1 className="text-sm font-semibold text-gray-500">Ramaining</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl text-black">
          Categories with Biggest Expense
        </h1>
        <div className="py-4 flex flex-row justify-between ">
          {biggest.map((item) => {
            return (
              <BiggestExpense
                logo={item.logo}
                price={item.price}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </Page>
  );
}
