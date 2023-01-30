const { Storage } = require("@google-cloud/storage");
const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();


// Creates a client
const storage = new Storage();

async function generateUploadSignedUrl(bucketName, destFileName) {
  const file = storage.bucket(bucketName).file(destFileName);

  // Use signed URLs to upload files to Google Cloud Storage
  // Authenticating is required to get the signed URL, but isn't
  // required to start the upload
  const options = {
    version: "v4",
    action: "write",
    expires: Date.now() + 30 * 60 * 1000, // 30 mins
    contentType: "text/plain",
  };

  //auth required to get signed URL
  const [signedUrl] = await file.getSignedUrl(options);
  return signedUrl;
}

async function main() {
  // Generate a signed URL for uploading a file
  const signedUrl = await generateUploadSignedUrl(
    bucketName = process.env.BUCKET_NAME,
    destFileName = "demo_file.txt"
  );
  console.log(signedUrl);
}

main().catch(console.error);