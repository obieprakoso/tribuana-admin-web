import React, { FC, useState, useEffect } from "react";
import ColumnAttributes from "../../interface/ColumnInterface";
import { useNavigate } from "react-router-dom";

interface TableProps {
  data: Array<any>;
  column: Array<ColumnAttributes>;
  useAction: boolean;
  urlEdit?: string;
  onDelete: () => void;
  isLoading: boolean;
}

const Table: FC<TableProps> = ({
  data,
  column,
  useAction,
  urlEdit,
  onDelete,
  isLoading,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-8">
      <div className="py-1 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                {column.map((item: ColumnAttributes, index: number) => (
                  <th
                    key={"th" + index}
                    scope="col"
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    {item.heading}
                  </th>
                ))}
                {useAction ? (
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Action
                  </th>
                ) : null}
              </tr>
            </thead>

            <tbody className="bg-white">
              {data.map((item, index) => (
                <tr key={"tr" + index}>
                  {column.map((dt, idx) => (
                    <td
                      key={"td" + idx}
                      className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                    >
                      {item[dt.keyValue] ? item[dt.keyValue]?.toString() : ""}
                    </td>
                  ))}
                  {useAction ? (
                    <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
