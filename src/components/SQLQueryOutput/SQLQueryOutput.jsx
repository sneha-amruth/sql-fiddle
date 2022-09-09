import React from "react";
import "./SQLQueryOutput.css";

function SQLQueryOutput({ data }) {
  const heading = data[0];
  const body = data.slice(1, data.length - 1);

  return (
    <>
      {data.length > 0 && (
        <div className="output-title">
          <h4>Output</h4>
        </div>
      )}
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
              {body.map((dataList, index) => (
                <tr key={index}>
                  {dataList.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default SQLQueryOutput;
