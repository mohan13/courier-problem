import { coruierCharge } from "../../utils/courierCheck";

export const PackageCalculation = ({
  items,
  price,
  weight,
}: {
  items: string;
  price: number;
  weight: number;
}) => {
  const totalAmount = price + coruierCharge(weight);

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Selected Items
        </h1>
        <div className="mt-12 lg:grid  ">
          <section className="mt-16 rounded-md bg-white  lg:mt-0 lg:p-0">
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Package Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Items:</dt>
                  <dd className="text-sm font-medium text-gray-900">{items}</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="text-sm text-gray-800">Items Price:</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    $ {price}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="text-sm text-gray-800">Total Weight</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {weight} kg
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Courier Price:</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    {coruierCharge(weight)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount:
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    $ {totalAmount}
                  </dd>
                </div>
                {totalAmount > 250 ? (
                  <div className="px-2 pb-4 font-medium text-red-700">
                    Your amount can not exceed more than $ 250
                  </div>
                ) : null}
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
