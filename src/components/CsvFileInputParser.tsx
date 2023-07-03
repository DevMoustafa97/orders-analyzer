import { useRef } from "react";
import * as Papa from "papaparse";
import {
  CsvFileInputParserProps,
  inputData,
  validateAndFilterDataArgs,
} from "../types";

const validateAndFilterData = ({
  data,
  callback,
}: validateAndFilterDataArgs) => {
  if (!data || data?.length === 0) return;
  const filteredInputData = data.filter((row) => {
    // Validate that each row contains 5 columns and each cell has length
    return row.length === 5 && row.every((cell: string) => cell.length);
  });

  if (filteredInputData.length) {
    callback(filteredInputData);
  } else {
    alert("Invalid csv orders file!");
  }
};

function CsvFileInputParser({ onParse }: CsvFileInputParserProps) {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileSelection = () => {
    const file: File | undefined = fileInput.current?.files?.[0];
    if (file) {
      Papa.parse(file, {
        complete: (results: { data: inputData }) => {
          validateAndFilterData({ data: results.data, callback: onParse });
        },
      });
    }
  };

  return (
    <div>
      <input
        role="file-selector"
        type="file"
        ref={fileInput}
        onChange={handleFileSelection}
        accept=".csv"
      />
    </div>
  );
}

export default CsvFileInputParser;
