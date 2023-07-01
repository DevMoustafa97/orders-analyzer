import { useState, useCallback } from 'react';
import { OutputFileData, ProductData, UseCsvDataOutput } from '../types';



function useCsvData(): UseCsvDataOutput {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [quantityOutputData, setQuantityOutputData] = useState<OutputFileData[]>([]);
  const [brandOutputData, setBrandOutputData] = useState<OutputFileData[]>([]);

  const handleDataChange = useCallback((data: string[][]) => {
    const products: Record<string, ProductData> = {};

    data.forEach((row) => {
      const productName = row[2];
      const brand = row[4];
      const quantity = parseInt(row[3], 10);

      // Update the products object with the new row data
      if (!products[productName]) {
        products[productName] = {
          productName,
          totalQuantity: 0,
          brandCounts: {},
        };
      }
      products[productName].totalQuantity += quantity;
      if (!products[productName].brandCounts[brand]) {
        products[productName].brandCounts[brand] = 0;
      }
      products[productName].brandCounts[brand]++;
    });

    // Generate the output files
    const productNames = Object.keys(products);

    // 0_input_file_name.csv
    const quantityData = productNames.map((productName) => {
      const totalQuantity = products[productName].totalQuantity;
      const orderCount = Object.keys(products[productName].brandCounts).length;
      const averageQuantity = totalQuantity / orderCount;
      return [productName, averageQuantity.toFixed(2)];
    });
    setQuantityOutputData([{ name: `0_input_file.csv`, data: quantityData }]);

    // 1_input_file_name.csv
    const brandData = productNames.map((productName) => {
      const brandCounts = products[productName].brandCounts;
      const maxBrand = Object.keys(brandCounts).reduce((a, b) => brandCounts[a] > brandCounts[b] ? a : b);
      return [productName, maxBrand];
    });
    setBrandOutputData([{ name: `1_input_file.csv`, data: brandData }]);

    // Update the product data state
    const productDataArray = Object.values(products);
    setProductData(productDataArray);
  }, []);

  return { productData, quantityOutputData, brandOutputData, handleDataChange };
}

export default useCsvData;