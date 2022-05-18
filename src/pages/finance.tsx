import React from "react";
import { BsFilter } from "react-icons/bs";
import { CardFinance } from "../components/CardFinance";
import { ICardFinance, Idata } from "../interfaces/Iprops";
import { Page } from "./components/Page";

const data: Idata[] = [
  {
    id: 0,
    name: "Calendar",
    value: "calendar",
  },
  {
    id: 1,
    name: "Day",
    value: "day",
  },
];

const data2: ICardFinance[] = [
  {
    title: "Restaurants & Cafe",
    date: "20 Auguest 2022",
    price: "-90,000 XAF",
  },
  {
    title: "Clothes & Shopping",
    date: "25 Auguest 2022",
    price: "-100,000 XAF",
  },
  {
    title: "Clothes & Shopping",
    date: "25 Auguest 2022",
    price: "-100,000 XAF",
  },
  {
    title: "Gifts Cardsqdsdsqd",
    date: "10 October 2022",
    price: "88,000 XAF",
  },
  {
    title: "Loans",
    date: "15 October 2022",
    price: "48,00 XAF",
  },
  {
    title: "Shopping",
    date: "20 October 2022",
    price: "18,000 XAF",
  },
];

export default function () {
  const [_type, setType] = React.useState<string>();
  return (
    <Page title="Home Wallet" subtitle="Change default wallet" select>
      <div className="mt-6 ">
        <div className="flex flex-row items-center gap-2 w-full">
          <div className="w-full">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full h-12 pl-3 pr-10 py-2 bg-bg-0 border-2 text-base border-gray-300 focus:outline-none focus:ring-primary-100 focus:border-primary-100 sm:text-sm rounded-md"
              defaultValue="Group By"
            >
              <option>Group By</option>
              <option>Group By</option>
              <option>Group By</option>
            </select>
          </div>
          <div className="w-full">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full h-12 pl-3 pr-10 py-2 text-base bg-bg-0 border-2 border-gray-300 focus:outline-none focus:ring-primary-100 focus:border-primary-100 sm:text-sm rounded-md"
              defaultValue="Date"
            >
              <option>Date</option>
              <option>Date</option>
              <option>Date</option>
            </select>
          </div>
          <div className="w-full">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full h-12 pl-3 pr-10 py-2 text-base bg-bg-0 border-2 border-gray-300 focus:outline-none focus:ring-primary-100 focus:border-primary-100 sm:text-sm rounded-md"
              defaultValue="Types"
            >
              <option>Types</option>
              <option>Types</option>
              <option>Types</option>
            </select>
          </div>
          <div className="w-full">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full h-12 pl-3 pr-10 py-2 text-base bg-bg-0 border-2 border-gray-300 focus:outline-none focus:ring-primary-100 focus:border-primary-100 sm:text-sm rounded-md"
              defaultValue="Sample"
            >
              <option>Sample</option>
              <option>Sample</option>
              <option>Sample</option>
            </select>
          </div>
          <div className="w-full">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full h-12 pl-3 pr-10 py-2 text-base bg-bg-0 border-2 border-gray-300 focus:outline-none focus:ring-primary-100 focus:border-primary-100 sm:text-sm rounded-md"
              defaultValue="Extended"
            >
              <option>Extended</option>
              <option>Extended</option>
              <option>Extended</option>
            </select>
          </div>
          <div className="flex items-center justify-center h-12 w-64 rounded-xl bg-bg-1">
            <BsFilter className="text-gray-400 text-2xl" />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-row w-full justify-between mb-4">
            <h1 className="text-2xl text-black font-semibold">
              January 17 2022
            </h1>
            <div className="flex justify-center">
              <h1 className="text-gray-400 text-lg px-6">
                Number of transaction: 04
              </h1>
              <h1 className="text-gray-400 text-lg">Value: 7408.00 XAF</h1>
            </div>
          </div>
          <div
            className=" overflow-auto scrollbar-hidden"
            style={{ height: "26rem" }}
          >
            {data2.map((item: ICardFinance) => {
              return (
                <CardFinance
                  title={item.title}
                  date={item.date}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
