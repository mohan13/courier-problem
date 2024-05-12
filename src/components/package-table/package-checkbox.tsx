/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { package_table } from "../constant/packages";
import { AddedCart } from "../added-cart/addedCart";
import { coruierCharge } from "../../utils/courierCheck";
import { PackageCalculation } from "../added-cart/packageCalculation";

export interface Ipackage {
  name: string;
  price: number;
  weight: number;
}
[];

export const PackageWithCheckbox = () => {
  const [checkeState, setCheckedState] = useState(
    new Array(package_table.length).fill(false),
  ); //package_table ma vayeko data ko length jati value false ma conver gareko

  const [packages, setPackage] = useState({ name: "", price: 0, weight: 0 });
  const [total, setTotal] = useState(0);
  const [totalWeight, setWeight] = useState(0);
  const [items, seItems] = useState("");

  //its selected data and calculate price
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkeState.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedState(updatedCheckedState);

    const Items = updatedCheckedState.reduce((items, currentState, index) => {
      if (currentState === true) {
        return items + package_table[index].name;
      }
      return items;
    }, "");

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + package_table[index].price;
        }
        return sum;
      },
      0,
    );

    const totalWeight = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + package_table[index].weight;
        }
        return sum;
      },
      0,
    );

    setTotal(totalPrice);
    setWeight(totalWeight);
    seItems(Items);
  };

  //it's send selected packeges
  const totalPackage = () => {
    setPackage({ name: items, price: totalAmount, weight: totalWeight });
  };

  //to calculate amounte with couriercharge
  const totalAmount = total + coruierCharge(totalWeight);

  return (
    <>
      <section className="mx-auto w-full  px-4 py-4">
        <div className="mt-6 flex justify-between">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Select Item</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Weight
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {package_table?.map((item: Ipackage, idx: number) => {
                      return (
                        <tr key={idx + 1}>
                          <td className="whitespace-nowrap px-12 py-4">
                            <input
                              type="checkbox"
                              value={item.price}
                              checked={checkeState[idx]}
                              onChange={() => handleOnChange(idx)}
                            />
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-700">
                              {item.name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {item.price}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {item.weight}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <button
                disabled={totalAmount > 250 ? true : false}
                onClick={() => totalPackage()}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Place Order
              </button>
            </div>
          </div>
          <PackageCalculation
            items={items}
            price={total}
            weight={totalWeight}
          />

          <AddedCart items={packages.name} price={packages.price} />
        </div>
      </section>
    </>
  );
};
