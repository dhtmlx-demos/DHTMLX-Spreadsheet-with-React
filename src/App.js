import "./styles.css";

import DHTMLXSpreadsheet from "./Spreadsheet";
import { getData } from "./data";
import { useState } from "react";

function App() {
  let [data] = useState(getData())
  return <DHTMLXSpreadsheet data={data} />;
}

export default App;
