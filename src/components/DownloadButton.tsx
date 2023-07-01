import { OutputFileData } from "../types";

const handleDownload = (data: string[][], filename: string) => {
  const csv = data.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadButton = ({ outputFile }: { outputFile: OutputFileData }) => {
  return (
    <button onClick={() => handleDownload(outputFile.data, outputFile.name)}>
      Download {outputFile.name}
    </button>
  );
};

export default DownloadButton;
