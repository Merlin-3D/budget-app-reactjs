import { isEmpty } from "lodash";
interface IDataTableColumn<M = any> {
  title: React.ReactNode;
  dataIndex: string | number | null;
  key: string;
  headerClassName?: string;
  bodyClassName?: string;
  checkbox?: boolean;
  render?(text: string | number, record: M): React.ReactNode;
}

interface DataTableProps<T> {
  columns?: IDataTableColumn<T>[];
  data: T[];
  header?: boolean;
  titleTable?: string;
  descriptionTable?: string;
  headerRender?: React.ReactNode[];
}

export function DataTable<T>({
  columns,
  data,
  titleTable,
  descriptionTable,
  headerRender,
}: React.PropsWithChildren<DataTableProps<T>>) {
  const headerItems = columns!.map((field) => {
    return (
      <th
        key={field.key}
        scope="col"
        className="sticky   top-0 py-3.5 pl-4 pr-3 right-0 text-left text-sm font-semibold bg-bg-0 text-gray-900 sm:pl-6"
      >
        {field.title}
      </th>
    );
  });

  const bodyItems =
    !isEmpty(data) &&
    data.map((item, key) => {
      const fields2 =
        !isEmpty(columns) &&
        columns!.map((field) => {
          return (
            <td
              className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
              key={field.key}
            >
              {field.render
                ? // @ts-ignore
                  field.render(item[field.key], item)
                : // @ts-ignore
                  item[field.key]}
            </td>
          );
        });

      return <tr key={key}>{fields2}</tr>;
    });

  return (
    <div className=" sm:px-1 bg-white rounded-lg h-full ">
      {/* {tableTitle && ( )} */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          {titleTable && (
            <h1 className="text-xl font-semibold text-gray-900">
              {titleTable}
            </h1>
          )}
          {descriptionTable && (
            <p className="mt-2 text-sm text-gray-700">{descriptionTable}</p>
          )}
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">{headerRender}</div>
      </div>

      <div className="flex flex-col h-full ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="flex-grow overflow-auto scrollbar-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg px-4 h-full ">
            <table className="min-w-full divide-y divide-gray-300 relative">
              <thead>
                <tr>{headerItems}</tr>
              </thead>
              <tbody className="divide-y divide-gray-200">{bodyItems}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
