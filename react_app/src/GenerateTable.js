import { React } from "react";

export const GenerateTable = ({ headings, items }) => {
  console.log(items);
  if (items) {
    return (
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row, table_row) => (
            <tr key={table_row}>
              {Object.values(row).map((row_value, table_data) => (
                <td key={table_data}>{row_value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="table">
        <tbody>
          <tr>
            <td>No data found</td>
          </tr>
        </tbody>
      </table>
    );
  }
};
