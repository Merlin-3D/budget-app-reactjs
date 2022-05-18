import { BsBasket2Fill, BsPencil, BsTrash } from "react-icons/bs";

interface ICardCategoriesProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  price: string;
  onUpdate?: Function;
  onDelete?: Function;
}
export function CardCategories({
  icon,
  color,
  title,
  price,
  onUpdate,
  onDelete,
}: ICardCategoriesProps) {
  return (
    <div className="group flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-base font-bold mb-2">{title} </h1>
      </div>
      <div
        className={
          `flex items-center justify-center h-16 w-16 rounded-full bg-` +
          color +
          `-600`
        }
      >
        {icon}
      </div>
      <h1 className="text-base font-semibold text-gray-500 pt-2">{price}</h1>
      <div className="invisible grid grid-cols-2 divide-x group-hover:visible w-28 bg-white rounded-md border-2 py-1">
        <div
          className="cursor-pointer flex flex-row items-center justify-center"
          onClick={() => onUpdate}
        >
          <BsPencil className="text-blue-500 text-base text-center" />
        </div>
        <div
          className=" cursor-pointer flex flex-row items-center justify-center"
          onClick={() => onDelete}
        >
          <BsTrash className="text-red-500 text-base" />
        </div>
      </div>
    </div>
  );
}
