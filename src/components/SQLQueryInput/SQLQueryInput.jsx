import React, { useEffect, useRef, useState } from "react";
import useRunSQLQuery from "../../hooks/useRunSQLQuery/useRunSQLQuery";
import SQLQueryOutput from "../SQLQueryOutput/SQLQueryOutput";
import "./SQLQueryInput.css";
import CopyIcon from "../assets/CopyIcon";
import TickIcon from "../assets/TickIcon";

function SQLQueryInput() {
  const [query, setQuery] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const { getData, data, loading } = useRunSQLQuery();
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const textAreaRef = useRef(null);

  const handleRunQuery = () => {
    getData(query);
  };

  const handleCopy = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess(true);
  };
  const handleClear = () => {
    setQuery("");
  };

  useEffect(() => {
    setTimeout(() => {
      if (copySuccess) {
        setCopySuccess(false);
      }
    }, 500);
  }, [copySuccess]);
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
            ref={textAreaRef}
            placeholder="enter your SQL query"
            value={query}
            onChange={handleQueryChange}
          ></textarea>
          {!copySuccess && query && (
            <CopyIcon className="copy-icon" onClick={handleCopy}></CopyIcon>
          )}
          {copySuccess && <TickIcon className="tick-icon"></TickIcon>}
        </div>
      </div>
      <SQLQueryOutput data={data} loading={loading}></SQLQueryOutput>
    </>
  );
}

export default SQLQueryInput;
