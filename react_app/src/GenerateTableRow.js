import { React } from "react";

export const GenerateTableRow = ({ project_data }) => {
  //   console.log(project_data);
  if (project_data) {
    return (
      <tbody>
        {project_data.map((row, table_row) => (
          <tr key={table_row}>
            {Object.values(row).map((rowValue, table_data) => (
              <td key={table_data}>{rowValue}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  } else {
    return (
      <tbody>
        <tr>
          <td>No data found</td>
        </tr>
      </tbody>
    );
  }
};
