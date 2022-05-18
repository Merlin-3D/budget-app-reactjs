import { BsBookmark, BsFillCameraFill, BsX } from "react-icons/bs";

interface ICardFinanceProps {
  title: string;
  date: string;
  price: string;
}
export function CardFinance({ title, date, price }: ICardFinanceProps) {
  return (
    <div className="rounded-xl h-20 bg-white w-full flex flex-row px-8 items-center justify-between mb-4">
      <div className="flex justify-center items-center w-1/2">
        <div className="flex items-center justify-center h-12 w-14 rounded-full bg-red-500">
          <BsFillCameraFill className="text-white text-lg" />
        </div>
        <div className="flex flex-col ml-4 w-full">
          <h1 className="text-2xl text-black font-semibold">{title}</h1>
          <h1 className="text-base font-semibold text-gray-400">{date}</h1>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <h1 className="text-lg text-black font-bold pr-10">{price}</h1>
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 mr-4 cursor-pointer">
          <BsBookmark className="text-blue-500 text-lg" />
        </div>
        <div className="flex items-center justify-center h-12 w-14 rounded-xl bg-gray-100 cursor-pointer">
          <BsX className="text-gray-400 text-4xl" />
        </div>
      </div>
    </div>
  );
}
