export type inputData = string[][];
export type outputFile = {
  filename: string;
  data: string[];
};

export type frequencyTypeObject = {
  [key: string]: number;
};

export type productsBrandsType = {
  [key: string]: string[];
};

export interface CsvFileInputParserProps {
  onParse: (data: inputData) => void;
}

export interface validateAndFilterDataArgs {
  data: inputData;
  callback: (data: inputData) => void;
}

export interface CsvExportProps {
  data: string[];
  filename: string;
}

export interface ProductData {
  productName: string;
  totalQuantity: number;
  brandCounts: Record<string, number>;
}

export interface OutputFileData {
  name: string;
  data: string[][];
}

export interface UseCsvDataOutput {
  productData: ProductData[];
  quantityOutputData: OutputFileData[];
  brandOutputData: OutputFileData[];
  handleDataChange: (data: string[][]) => void;
}
