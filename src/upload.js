const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();

async function uploadFile(signedUrl, localFile) {
  // Read the file into memory
  const fileContent = fs.readFileSync(localFile);
  // Use the signed URL to upload the file with an HTTP PUT request
  console.log(`Uploading file to ${signedUrl}`);
  try {
    const response = await fetch(signedUrl, {
      body: fileContent,
      method: "PUT",
      headers: {
        "Content-Type": "image/png",
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }
    console.log(`File uploaded`);
  } catch (error) {
    console.error(`Error uploading file: ${error}`);
  }
}

async function main() {
  // Upload the file to the signed URL
  await uploadFile(process.env.SIGNED_URL, "assets/commit-logo.png");
}

main().catch(console.error);