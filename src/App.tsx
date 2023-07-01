import "./style/App.css";
import CsvFileInputParser from "./components/CsvFileInputParser";
import { inputData } from "./types";
import useCsvData from "./hooks/useCsvData";
import DownloadButton from "./components/DownloadButton";

function App() {
  const { quantityOutputData, brandOutputData, handleDataChange } =
    useCsvData();

  return (
    <div>
      <h1>Welcome to Orders Analyzer</h1>
      <p>Please import your orders csv file</p>
      <CsvFileInputParser
        onParse={(data: inputData) => handleDataChange(data)}
      />
      <div className="download-buttons">
        {quantityOutputData.map((outputFile) => (
          <DownloadButton key={outputFile.name} outputFile={outputFile} />
        ))}
        {brandOutputData.map((outputFile) => (
          <DownloadButton key={outputFile.name} outputFile={outputFile} />
        ))}
      </div>
    </div>
  );
}

export default App;
