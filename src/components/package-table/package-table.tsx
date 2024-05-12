// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import { package_table } from "../constant/packages";
// import { useDispatch, useSelector } from "react-redux";
// import { addPackage } from "../../redux/slice";

// export interface Ipackage {
//   name: string;
//   price: number;
//   weight: number;
// }
// [];

// export const PackageTable = () => {
//   const dispatch = useDispatch();

//   const [selecteItem, setSelectedItem] = useState({});

//   const items = useSelector((state: any) => state.package);

//   const add = (item: object) => {
//     dispatch(addPackage(selecteItem));
//     setSelectedItem(item);
//   };

//   return (
//     <>
//       <section className="mx-auto w-full max-w-7xl px-4 py-4">
//         <div>
//           Cart
//           {items.length}
//         </div>
//         <div className="mt-6 flex flex-col">
//           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//               <div className="overflow-hidden border border-gray-200 md:rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         <span>Select Item</span>
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         <span>Name</span>
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Price
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Weight
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200 bg-white">
//                     {package_table?.map((item: Ipackage, idx: number) => {
//                       return (
//                         <tr key={idx + 1}>
//                           <td className="whitespace-nowrap px-12 py-4">
//                             <input type="checkbox" />
//                           </td>
//                           <td className="whitespace-nowrap px-12 py-4">
//                             <div className="text-sm text-gray-700">
//                               {item.name}
//                             </div>
//                           </td>
//                           <td className="whitespace-nowrap px-4 py-4">
//                             <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
//                               {item.price}
//                             </span>
//                           </td>
//                           <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
//                             {item.weight}
//                           </td>
//                           <td
//                             className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium"
//                             onClick={() => add(item)}
//                           >
//                             Place Order
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
