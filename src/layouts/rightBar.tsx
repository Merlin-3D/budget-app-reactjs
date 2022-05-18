import classNames from "classnames";
import { isEmpty, isNil, lowerCase } from "lodash";
import React from "react";
import {
  BsBasket2Fill,
  BsFillCameraFill,
  BsPlus,
  BsShop,
} from "react-icons/bs";
import { FaGamepad, FaStore } from "react-icons/fa";
import { iconData } from "../api/data";
import { AccountRequestData, AccountResponseData } from "../api/interfaces";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { ModalRight } from "../components/ModalRight";

export default function RightBar() {
  const [form, setRefForm] = React.useState<HTMLFormElement | null>(null);
  const [_modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [_modalOpenR, setModalOpenR] = React.useState<boolean>(false);
  const [_searchIcon, setSearchIcon] = React.useState<string>();
  const [_icon, setIcon] = React.useState<string>("");

  const handleSearch = React.useCallback(
    (value: string) => {
      setSearchIcon(value);
    },
    [_searchIcon]
  );
  const memoizedIcon = React.useMemo(() => {
    if (isEmpty(_searchIcon)) return iconData;
    return iconData.filter((item) => {
      return lowerCase(item.title).includes(lowerCase(_searchIcon));
    });
  }, [iconData, _searchIcon]);

  const _onFormSubmitAccount = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const form = e.currentTarget;
      const formElements = form.elements as typeof form.elements & {
        usernameInput: { value: string };
        name: { value: string };
        amount: { value: number };
        color: { value: string };
        date: { value: string };
      };

      const payload: AccountRequestData = {
        name: formElements.name.value,
        amount: formElements.amount.value,
        color: formElements.color.value,
        date: formElements.date.value,
        icon: _icon,
      };
    },
    [_icon]
  );

  const onConfirmForm = React.useCallback(() => {
    if (!isNil(form)) {
      form.requestSubmit();
    }
  }, [form]);

  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="text-black text-2xl font-bold pb-4">Accounts</h1>
          <div
            className="flex items-center justify-center h-10 w-10 rounded-xl border-dashed border-2 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <BsPlus className="text-gray-500 text-2xl" />
          </div>
        </div>

        <div className="flex flex-col  overflow-auto scrollbar-hidden h-48">
          <div className="flex flex-row py-4">
            <div className="flex items-center justify-center h-12 w-16 rounded-xl bg-purple-500">
              <BsShop className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <h1 className="text-base font-bold">Home Loan</h1>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
          <div className="flex flex-row py-6">
            <div className="flex items-center justify-center h-12 w-16 rounded-xl bg-red-600">
              <FaGamepad className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <h1 className="text-base font-bold">Earphone</h1>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
          <div className="flex flex-row py-6">
            <div className="flex items-center justify-center h-12 w-16 rounded-xl bg-red-600">
              <FaGamepad className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <h1 className="text-base font-bold">Earphone</h1>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-black text-2xl font-bold pb-4">Categories</h1>
          <div className="flex items-center justify-center h-10 w-10 rounded-xl border-dashed border-2 cursor-pointer">
            <BsPlus className="text-gray-500 text-2xl" />
          </div>
        </div>

        <div className="flex flex-col overflow-auto scrollbar-hidden xl:h-80 md:h-96">
          <div className="flex flex-row py-4">
            <div className="flex items-center justify-center h-12 w-16 rounded-full bg-purple-500">
              <BsShop className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-bold">Home Loan</h1>
                <h1 className="text-base font-semibold text-gray-500">
                  250,00 XAF
                </h1>
              </div>

              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
          <div className="flex flex-row  py-4">
            <div className="flex items-center justify-center h-12 w-16 rounded-full bg-red-600">
              <FaGamepad className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-bold">Game</h1>
                <h1 className="text-base font-semibold text-gray-500">
                  250,00 XAF
                </h1>
              </div>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
          <div className="flex flex-row  py-4">
            <div className="flex items-center justify-center h-12 w-16 rounded-full bg-yellow-300">
              <BsFillCameraFill className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-bold">Camera</h1>
                <h1 className="text-base font-semibold text-gray-500">
                  250,00 XAF
                </h1>
              </div>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
          <div className="flex flex-row  py-4">
            <div className="flex items-center justify-center h-12 w-16 rounded-full bg-blue-600">
              <BsBasket2Fill className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-bold">Shopping</h1>
                <h1 className="text-base font-semibold text-gray-500">
                  250,00 XAF
                </h1>
              </div>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
          <div className="flex flex-row  py-4">
            <div className="flex items-center justify-center h-12 w-16 rounded-full bg-blue-600">
              <BsBasket2Fill className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-bold">Shopping</h1>
                <h1 className="text-base font-semibold text-gray-500">
                  250,00 XAF
                </h1>
              </div>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
          <div className="flex flex-row  py-4">
            <div className="flex items-center justify-center h-12 w-16 rounded-full bg-blue-600">
              <BsBasket2Fill className="text-white text-2xl" />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-bold">Shopping</h1>
                <h1 className="text-base font-semibold text-gray-500">
                  250,00 XAF
                </h1>
              </div>
              <h1 className="text-sm font-normal text-gray-400">15 April</h1>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Add account"
        open={_modalOpen!}
        onClose={() => setModalOpen(false)}
        onConfirm={onConfirmForm}
      >
        <form
          ref={setRefForm}
          className="space-y-4"
          onSubmit={_onFormSubmitAccount}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <Input
                type="text"
                size="normal"
                placeholder="Name"
                id="name"
                name="name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <div className="mt-1">
              <Input
                type="number"
                size="normal"
                placeholder="Amount"
                id="amount"
                name="amount"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              date
            </label>
            <div className="mt-1">
              <Input
                type="date"
                size="normal"
                placeholder="Date"
                id="date"
                name="date"
              />
            </div>
          </div>
          <div>
            <Button onClick={() => setModalOpenR(true)} block color="dash">
              {_icon ? _icon.slice(2) : " Choose icon"}
            </Button>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Color
            </label>
            <div className="mt-1">
              <Input
                type="color"
                size="normal"
                placeholder="Color"
                id="color"
                name="color"
              />
            </div>
          </div>
        </form>
      </Modal>
      <ModalRight
        onSearch={handleSearch}
        title="Choose Icon"
        open={_modalOpenR!}
        onClose={() => setModalOpenR(false)}
      >
        <div className="grid grid-cols-3 p-2 overflow-auto  scrollbar-hidden  w-full items-stretch gap-2 content-start">
          {memoizedIcon.map((item) => {
            return (
              <div
                onClick={() => {
                  setIcon(item.title);
                  setModalOpenR(false);
                }}
                className={classNames(
                  item.title === _icon && "border-primary-100 ",
                  ` h-20 shadow rounded-lg border-2 flex flex-col justify-center items-center hover:bg-primary-100 hover:text-white hover:cursor-pointer`
                )}
              >
                <span>{item.icon}</span>
                <h1 className="text-gray-500 text-xs font-normal mt-2 hover:text-white">
                  {item.title.slice(2)}{" "}
                </h1>
              </div>
            );
          })}
        </div>
      </ModalRight>
    </>
  );
}
