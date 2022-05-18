import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";
import classNames from "classnames";
import { isNil } from "lodash";

export type SelectType = "ghost" | "default" | "outlined";

type SelectTypeStyles = {
  [type in SelectType]: string[];
};

const selecttype: SelectTypeStyles = {
  ghost: ["bg-bg-0", "h-12", "border-2", "w-44"],
  default: [
    "bg-white",
    "border",
    "border-gray-300",
    "cursor-default",
    "focus:outline-none",
    "focus:ring-1",
    "focus:ring-primary-100",
    "focus:border-primary-100",
    "h-12",
  ],
  outlined: [
    "text-base",
    "bg-other-0",
    "border-2",
    "border-blue-dark-5",
    "focus:outline-none",
    "focus:ring-blue-100",
    "focus:border-blue-100",
  ],
};

export interface SelectItem<T = string> {
  id: React.Key;
  name: string;
  value: T;
}

export interface SelectedProps<T = string> {
  block?: boolean;
  type: SelectType;
  data: SelectItem<T>[];
  value?: T;
  onChange(value: T): void;
  disabled?: boolean;
  horizontal?: boolean;
}

export function Select<T = string>({
  type,
  data,
  value,
  onChange,
  disabled,
  horizontal,
}: SelectedProps<T>) {
  const [_selected, _setSelected] = React.useState<T | undefined>(value);
  return (
    <Listbox
      value={_selected}
      onChange={(item) => {
        _setSelected(item);
        if (!isNil(item)) onChange(item);
      }}
      disabled={disabled}
      horizontal={horizontal}
    >
      {({ open }) => (
        <div className="mt-1 relative">
          <Listbox.Button
            className={classNames(
              `relative w-full rounded-md pl-3 pr-10 py-2 text-left sm:text-sm`,
              selecttype[type]
            )}
          >
            <span className="">
              {data.find((item) => item.value === _selected)?.name}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {data.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    classNames(
                      active ? "text-white bg-primary-100" : "text-gray-900",
                      "cursor-default select-none relative py-2 pl-8 pr-4"
                    )
                  }
                  value={item.value}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {item.name}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-primary-100",
                            "absolute inset-y-0 left-0 flex items-center pl-1.5"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
Select.defaultProps = {
  typeSelect: "normal",
};
