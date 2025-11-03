import fs from "fs";
import path from "path";

export async function handler() {
  try {
    // Resolve current directory (the folder where index.html & PDFs live)
    const folderPath = path.resolve(".");

    // Read all files in that folder and filter only PDFs
    const files = fs
      .readdirSync(folderPath)
      .filter(f => f.toLowerCase().endsWith(".pdf"));

    // Return filenames as JSON
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(files),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
