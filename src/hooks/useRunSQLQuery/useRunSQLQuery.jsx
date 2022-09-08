import React, { useState } from "react";
import { usePapaParse } from "react-papaparse";

function useRunSQLQuery() {
  const [data, setData] = useState([]);
  const { readRemoteFile } = usePapaParse();

  const getData = (query) => {
    const url =
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/territories.csv";
    readRemoteFile(url, {
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return { getData, data };
}

export default useRunSQLQuery;
