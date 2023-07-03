// Imports
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
// To Test
import DownloadButton from "../components/DownloadButton";

// Tests
describe("DownloadButton component", async () => {
  it("Should render the button correctly", async () => {
    // Setup
    const outputFile = {
      name: "test.csv",
      data: [
        ["A", "B"],
        ["1", "2"],
      ],
    };
    const { getByRole } = render(<DownloadButton outputFile={outputFile} />);
    const button = getByRole("download-button");

    // Expectations
    expect(button.textContent).toBe(`Download ${outputFile.name}`);
  });
});
