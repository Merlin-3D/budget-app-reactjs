import {
  BsAlarm,
  BsAlignEnd,
  BsAlt,
  BsApple,
  BsArrow90DegUp,
  BsArrowBarRight,
  BsArrowDownCircle,
  BsArrowUp,
  BsBasket2Fill,
  BsCalendar,
  BsCamera,
  BsPencil,
  BsShop,
  BsTrash,
} from "react-icons/bs";
import { CategoriesResponseData } from "../../api/interfaces";
import { CardCategories } from "../../components/CardCategories";

const cat: CategoriesResponseData[] = [
  {
    color: "blue",
    icon: <BsBasket2Fill className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "red",
    icon: <BsAlarm className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "blue",
    icon: <BsAlignEnd className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "red",
    icon: <BsAlt className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "blue",
    icon: <BsArrow90DegUp className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "red",
    icon: <BsArrowBarRight className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "blue",
    icon: <BsApple className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "red",
    icon: <BsArrowDownCircle className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "blue",
    icon: <BsArrowUp className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "red",
    icon: <BsCamera className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "blue",
    icon: <BsShop className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "red",
    icon: <BsCalendar className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "blue",
    icon: <BsCamera className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
  {
    color: "red",
    icon: <BsShop className="text-white text-2xl" />,
    price: "10,000 XAF",
    title: "Shopping Card",
  },
];
export default function () {
  return (
    <div className="grid grid-cols-5 py-8 ">
      {cat.map((item) => {
        return (
          <CardCategories
            color={item.color}
            icon={item.icon}
            price={item.price}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
