import {
  ColorSwatchIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import React, { Fragment } from "react";
import {
  BsCreditCard2BackFill,
  BsCreditCard2Front,
  BsPencil,
  BsTrash,
  BsX,
} from "react-icons/bs";
import { AccountResponseData } from "../../api/interfaces";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Confirm } from "../../components/Confirm";
import { DataTable } from "../../components/DataTable";
import { SwitchElement } from "../../components/Switch";
import { MAccount } from "../../models/Account";

const data: AccountResponseData[] = [
  {
    id: "0",
    amount: 100,
    name: "test 1",
    date: "23/02/2023",
    status: "Active",
    icon: "",
    color: "",
  },
  {
    id: "1",
    amount: 100,
    name: "test 1",
    date: "23/02/2023",
    status: "No Active",
    icon: "",
    color: "",
  },
  {
    id: "2",
    amount: 100,
    name: "test 1",
    date: "23/02/2023",
    status: "No Active",
    icon: "",
    color: "",
  },
  {
    id: "1",
    amount: 100,
    name: "test 1",
    date: "23/02/2023",
    status: "No Active",
    icon: "",
    color: "",
  },
  {
    id: "2",
    amount: 100,
    name: "test 1",
    date: "23/02/2023",
    status: "No Active",
    icon: "",
    color: "",
  },
  {
    id: "1",
    amount: 100,
    name: "test 1",
    date: "23/02/2023",
    status: "No Active",
    icon: "",
    color: "",
  },
  {
    id: "2",
    amount: 100,
    name: "test 1",
    date: "23/02/2023",
    status: "No Active",
    icon: "",
    color: "",
  },
];
export function Account() {
  const [_articles, setArticles] = React.useState<MAccount[]>([]);
  const [_confirmOpen, setConfirmOpen] = React.useState<boolean>(false);
  const [_id, setId] = React.useState<string>();

  React.useEffect(() => {
    return () => {
      data.map((item) => setArticles((old) => [...old, item]));
    };
  }, []);

  const handleDeleteAccount = React.useCallback(() => {}, [_id]);

  return (
    <Fragment>
      <DataTable<MAccount>
        data={_articles}
        columns={[
          {
            key: "id",
            title: "Default",
            dataIndex: "id",
            render: (value: string, item) => {
              return <SwitchElement />;
            },
          },
          {
            key: "id",
            title: "Theme",
            dataIndex: "id",
            render: (value: string, item: MAccount) => {
              return (
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-red-500">
                  <BsCreditCard2BackFill className="text-white text-lg" />
                </div>
              );
            },
          },

          {
            key: "name",
            title: "Name",
            dataIndex: "name",
          },
          {
            key: "amount",
            title: "Amount",
            dataIndex: "amount",
          },
          {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: (value: string) => {
              return (
                <Badge color={value === "Active" ? "success" : "primary"}>
                  {" "}
                  {value.toString()}{" "}
                </Badge>
              );
            },
          },

          {
            key: "date",
            title: "Date",
            dataIndex: null,
            render: (id: string, item: MAccount) => {
              return <span> {item.date} </span>;
            },
          },
          {
            key: "actions",
            title: "Actions",
            dataIndex: 33,
            render: (text: string, item) => {
              return (
                <div className="flex items-center justify-evenly">
                  <div className="flex items-center justify-center h-8 w-8 rounded-xl bg-gray-100 cursor-pointer">
                    <BsPencil className="text-blue-400 text-xl" />
                  </div>
                  <div
                    className="flex items-center justify-center h-8 w-8 rounded-xl bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setId(item.id);
                      setConfirmOpen(true);
                    }}
                  >
                    <BsTrash className="text-red-400 text-xl" />
                  </div>
                </div>
              );
            },
          },
        ]}
      />
      <Confirm
        title="Delete Account?"
        open={_confirmOpen!}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDeleteAccount}
      >
        Are you sure you want to delete this account?
      </Confirm>
    </Fragment>
  );
}
