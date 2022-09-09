import React, { useState } from "react";
import { usePapaParse } from "react-papaparse";
import remoteCSVFiles from "../../data/remoteCSVFiles";

function useRunSQLQuery() {
  const [data, setData] = useState([]);
  const { readRemoteFile } = usePapaParse();
  const [loading, setLoading] = useState(false);

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getData = (query) => {
    setLoading(true);
    const url = remoteCSVFiles[randomInteger(0, 3)];
    readRemoteFile(url, {
      complete: (results) => {
        setData(results.data);
      },
    });
    setLoading(false);
  };

  return { getData, data, loading };
}

export default useRunSQLQuery;
