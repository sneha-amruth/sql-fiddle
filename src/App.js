import "./App.css";
import SQLQueryInput from "./components/SQLQueryInput/SQLQueryInput";

function App() {
  return (
    <div>
      <h3 className="title">SQL Fiddle - Run SQL Queries</h3>
      <SQLQueryInput></SQLQueryInput>
    </div>
  );
}

export default App;
