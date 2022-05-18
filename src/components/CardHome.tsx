import classNames from "classnames";

export type ColorType = "success" | "danger" | "primary";
interface ICardHomeProps {
  url: string;
  color: ColorType;
  title: string;
  price: string;
}

const colortype = {
  success: ["text-green-500"],
  danger: ["text-red-500"],
  primary: ["text-blue-500"],
};

export default function CardHome({ url, color, title, price }: ICardHomeProps) {
  return (
    <div className="flex py-2 flex-col">
      <div className="rounded-full w-12 h-12 shadow-md flex items-center justify-center">
        <img src={url} className="h-9" />
      </div>
      <span>{price}</span>
      <h1 className={classNames(`text-base font-semibold `, colortype[color])}>
        {title}
      </h1>
    </div>
  );
}
