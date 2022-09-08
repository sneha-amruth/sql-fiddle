import React from "react";
import "./SQLQueryOutput.css";

function SQLQueryOutput({ data }) {
  const heading = data[0];
  const body = data.slice(1, data.length - 1);

  return (
    <div className="table-container">
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {heading.map((colHeader, index) => {
                return <th key={index}>{colHeader}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {body.map((dataList) => (
              <tr>
                {dataList.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SQLQueryOutput;
