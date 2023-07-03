import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import useCsvData from "../hooks/useCsvData";

describe("useCsvData hook", async () => {
  it("should generate the correct output data when handleDataChange is called", async () => {
    // Setup
    const inputData = [
      [
        "ID944806",
        "Willard Vista",
        "Intelligent Copper Knife",
        "3",
        "Hilll-Gorczany",
      ],
      [
        "ID644525",
        "Roger Centers",
        "Intelligent Copper Knife",
        "1",
        "Kunze-Bernhard",
      ],
      [
        "ID348204",
        "Roger Centers",
        "Small Granite Shoes",
        "4",
        "Rowe and Legros",
      ],
      [
        "ID710139",
        "Roger Centers",
        "Intelligent Copper Knife",
        "4",
        "Hilll-Gorczany",
      ],
      [
        "ID426632",
        "Willa Hollow",
        "Intelligent Copper Knife",
        "4",
        "Hilll-Gorczany",
      ],
      [
        "ID426632",
        "Willa Hollow",
        "Intelligent Copper Knife",
        "4",
        "Hilll-Gorczany",
      ],
    ];
    const expectedQuantityOutputData = [
      {
        name: "0_input_file.csv",
        data: [
          ["Intelligent Copper Knife", "8.00"],
          ["Small Granite Shoes", "4.00"],
        ],
      },
    ];
    const expectedBrandOutputData = [
      {
        name: "1_input_file.csv",
        data: [
          ["Intelligent Copper Knife", "Hilll-Gorczany"],
          ["Small Granite Shoes", "Rowe and Legros"],
        ],
      },
    ];
    const { result } = renderHook(() => useCsvData());

    // Action
    act(() => {
      result.current.handleDataChange(inputData);
    });

    // Expectations
    expect(result.current.quantityOutputData).toEqual(
      expectedQuantityOutputData
    );
    expect(result.current.brandOutputData).toEqual(expectedBrandOutputData);
  });
});
