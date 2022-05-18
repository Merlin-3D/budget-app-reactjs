import React, { Children } from "react";
import { Select } from "../../components/Selected";
import { Idata } from "../../interfaces/Iprops";

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
interface IPageProps {
  url?: string;
  title: string;
  subtitle: string;
  select?: boolean;
}

export function Page({
  url,
  title,
  subtitle,
  select,
  children,
}: React.PropsWithChildren<IPageProps>) {
  const [_type, setType] = React.useState<string>();

  return (
    <div className="h-5/6">
      <div className="w-full flex  flex-row justify-between">
        <div className="flex">
          <img src={url} className="h-16" />

          <div className="flex flex-col ml-8 justify-evenly">
            <h1 className="font-semibold text-2xl text-primary-10">{title}</h1>
            <h1 className="font-normal text-sm text-test-5">{subtitle}</h1>
          </div>
        </div>
        <div className="w-2/12">
          {select && (
            <Select data={data} type="default" onChange={setType} block />
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

Page.defaultProps = {
  url: "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-wallet-ecommerce-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
};
