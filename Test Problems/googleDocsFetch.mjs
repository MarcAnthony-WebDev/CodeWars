import { JSDOM } from "jsdom";
import fetch from "node-fetch";

const retrieveDocsData = async (docsUrl) => {
  try {
    // Fetch the HTML content of the Google Doc
    const response = await fetch(docUrl);
    if (!response.ok) {
      console.error(
        `Failed to retrieve the document. Status: ${response.status}`,
      );
      return;
    }
    const html = await response.text();

    // Parse the HTML using jsdom
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Find all table rows in the document
    const rows = document.querySelectorAll("tr");

    // Object to store grid data with keys as "x,y" strings.
    const grid = {};

    // Loop through each row and extract data from cells
    rows.forEach((row) => {
      // Get all cells (td or th) in the row.
      const cells = row.querySelectorAll("td, th");
      if (cells.length !== 3) return; // Skip rows that don't have exactly 3 cells

      // Extract text from each cell.
      const xText = cells[0].textContent.trim();
      const charText = cells[1].textContent.trim();
      const yText = cells[2].textContent.trim();

      // Parse the coordinates as integers.
      const x = parseInt(xText, 10);
      const y = parseInt(yText, 10);
      if (isNaN(x) || isNaN(y)) return; // Skip if coordinates aren't valid numbers

      // Store the character in the grid object with key "x,y"
      grid[`${x},${y}`] = charText;
    });

    // If no grid data was found, notify the user.
    if (Object.keys(grid).length === 0) {
      console.log("No grid data found in the document.");
      return;
    }

    // Determine the grid boundaries.
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    Object.keys(grid).forEach((key) => {
      const [xStr, yStr] = key.split(",");
      const x = parseInt(xStr, 10);
      const y = parseInt(yStr, 10);
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    });

    // Build and print the grid row by row (y=0 is assumed to be the top row)
    for (let y = minY; y <= maxY; y++) {
      let rowStr = "";
      for (let x = minX; x <= maxX; x++) {
        rowStr += grid[`${x},${y}`] || " ";
      }
      console.log(rowStr);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// ----------------------------
const docUrl =
  "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub";
retrieveDocsData(docUrl);
