import classNames from "classnames";
import React from "react";
import { Account } from "./components/account";
import Category from "./components/category";
import { Page } from "./components/Page";

const data = [
  {
    id: 0,
    title: "Account",
    page: <Account />,
    //page: <Category />,
  },
  {
    id: 1,
    title: "Categories",
    page: <Category />,
  },
];
export default function () {
  const [_openTab, setOpenTab] = React.useState<number>(0);

  const handleOnTab = React.useCallback(
    (val: number) => {
      setOpenTab(val);
    },
    [_openTab]
  );

  return (
    <Page
      url="https://img.icons8.com/stickers/100/000000/--folder-settings.png"
      title="Options"
      subtitle="Configure your account"
    >
      <div className="border-b border-gray-200 dark:border-gray-700 mt-4">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {data.map((item) => {
            return (
              <li className="mr-2" onClick={() => handleOnTab(item.id)}>
                <a
                  href="#"
                  className={classNames(
                    item.id === _openTab
                      ? "text-primary-100 border-primary-100  dark:text-primary-100 dark:border-primary-100"
                      : "border-transparent hover:text-gray-600 hover:border-primary-100 dark:hover:text-primary-100 ",
                    ` inline-flex p-4 rounded-t-lg border-b-2  group text-lg `
                  )}
                  aria-current="page"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-4/5 bg-white mt-8 rounded-lg   overflow-auto scrollbar-hidden ">
        {data.map((item) => {
          return item.id === _openTab && item.page;
        })}
      </div>
    </Page>
  );
}
