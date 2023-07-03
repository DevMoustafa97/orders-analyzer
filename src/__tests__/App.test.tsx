// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";

// Tests
describe("Renders main page correctly", async () => {
  it("Should render the page title correctly", async () => {
    // Setup
    render(<App />);
    const h1 = await screen.queryByText("Welcome to Orders Analyzer");

    // Expectations
    expect(h1).not.toBeNull();
  });

  it("Should render the file input parser", async () => {
    // Setup
    render(<App />);
    const fileInput = await screen.getAllByRole("file-selector")

    // Expectations
    expect(fileInput).not.toBeNull();
  });

  it("Should not render download buttons when no data is available", async () => {
    // Setup
    render(<App />);
    const downloadButtons = await screen.queryAllByRole("button");

    // Expectations
    expect(downloadButtons.length).toBe(0);
  });

});