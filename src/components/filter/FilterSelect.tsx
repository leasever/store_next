"use client";
import { useFilterContext } from "@/context/filter.context";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";

export const FilterActions = [
  { id: "selectBy", name: "Seleccionar por:" },
  { id: "sortAlphabetically", name: "Alfabéticamente" },
  { id: "sortByDateNewest", name: "Nuevos" },
  { id: "sortByRating", name: "Populares" },
  { id: "filterDiscountedProducts", name: "Ofertas" },
];

export default function FilterSelect() {
  const {
    sortAlphabetically,
    sortByDateNewest,
    sortByRating,
    filterDiscountedProducts,
    selected,
    setSelected,
  } = useFilterContext();

  const filterActionMap: Record<string, () => void> = {
    sortAlphabetically,
    sortByDateNewest,
    sortByRating,
    filterDiscountedProducts,
  };

  const handleFilterChange = (value: { id: string; name: string }) => {
    setSelected(value);

    const selectedAction = filterActionMap[value.id];
    if (selectedAction) {
      selectedAction();
    }
  };

  return (
    <div className="block w-44">
      <Listbox value={selected} onChange={handleFilterChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left border text-sm  border-gray-400 hover:border-gray-900  text-gray-800 transition-all duration-300">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown className="h-7 w-7 " aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-40">
              {FilterActions.map((action, actionIdx) => (
                <Listbox.Option
                  key={actionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                    }`
                  }
                  value={action}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {action.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                          <AiOutlineCheck
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
