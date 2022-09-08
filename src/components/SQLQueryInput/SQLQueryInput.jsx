import React, { useState } from "react";
import useRunSQLQuery from "../../hooks/useRunSQLQuery/useRunSQLQuery";
import SQLQueryOutput from "../SQLQueryOutput/SQLQueryOutput";
import "./SQLQueryInput.css";

function SQLQueryInput() {
  const [query, setQuery] = useState("");
  const { getData, data } = useRunSQLQuery();
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRunQuery = () => {
    getData(query);
  };

  return (
    <>
      <div className="input-container">
        <div className="input-container-header">
          <div className="input-title">
            <h4>Input</h4>
          </div>
          <div className="btn-container">
            <button className="btn" type="submit" onClick={handleRunQuery}>
              Run SQL
            </button>
          </div>
        </div>
        <div className="textarea-container">
          <textarea
            placeholder="enter your SQL query"
            value={query}
            onChange={handleQueryChange}
          ></textarea>
        </div>
      </div>
      <SQLQueryOutput data={data}></SQLQueryOutput>
    </>
  );
}

export default SQLQueryInput;
