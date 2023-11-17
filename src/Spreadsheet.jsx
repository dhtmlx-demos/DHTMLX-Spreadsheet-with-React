import { useEffect, useRef, useState } from "react";
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default function DHTMLXSpreadsheet({ data }) {
  let container = useRef(null);
  let [spreadsheet, setSpreadsheet] = useState(null);
  useEffect(() => {
    const spreadsheet = new Spreadsheet(container.current, {});
    setSpreadsheet(spreadsheet);
    return () => spreadsheet.destructor();
  }, []);

  useEffect(() => {
    if (!spreadsheet || !data) return;
    spreadsheet.parse(data);
  }, [spreadsheet, data]);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
