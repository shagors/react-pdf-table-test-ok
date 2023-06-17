import { Fragment } from "react";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./components/Invoice";
import { invoice } from "./data";

function App() {
  return (
    <Fragment>
      <PDFViewer width="1000" height="600" className="app">
        <Invoice invoice={invoice} />
      </PDFViewer>
    </Fragment>
  );
}

export default App;
