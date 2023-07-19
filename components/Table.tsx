import { TableInterface } from "@/types";
interface propsInterface {
  data: TableInterface;
}

export default function Table({ data }: propsInterface) {
  const splitter: string = data.splitter;
  const title: string = data.title;
  const headers = data.headers
    .split(splitter)
    .map((header) => ({ title: header.trim() }));
  const rows = data.content.map((row) => ({
    col: row.split(splitter).map((content) => ({ content: content.trim() })),
  }));

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
      <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
        <caption className="p-5 text-lg text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          {title}
          {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            {"description"}
          </p> */}
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map(({ title }, ...index) => (
              <th scope="col" className="px-6 py-3" key={index.toString()}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ col }, ...index) => (
            <tr
              key={index.toString()}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {col.map(({ content }, ...index) => (
                <th
                  key={index.toString()}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {content}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
