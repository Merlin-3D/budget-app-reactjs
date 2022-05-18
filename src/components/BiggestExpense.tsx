export type ColorType = "success" | "danger" | "primary";

interface IBiggestExpenseProps {
  logo: React.ReactNode;
  title: string;
  price: string;
}

export default function BiggestExpense({
  logo,
  title,
  price,
}: IBiggestExpenseProps) {
  return (
    <div className="flex px-4 flex-col justify-between bg-white rounded-md w-36 h-28 cursor-pointer">
      <span className="">
        {logo}
        {/* <BsFillBasket2Fill className="text-5xl text-red-500 pt-4" /> */}
      </span>
      <div className="flex flex-col mb-4 px-2">
        <h1 className="text-xs text-gray-500 pb-1">{title}</h1>
        <h1 className="text-xs">{price}</h1>
      </div>
    </div>
  );
}
