# GCS Pre-Signed URL Upload Example
This repository contains two JavaScript scripts for uploading files to Google Cloud Storage.

## Script 1: generate-urls.js
This script generates a signed URL for uploading a file to Google Cloud Storage using the @google-cloud/storage library. The signed URL is valid for 30 minutes and can be used to upload a text/plain file.

## Script 2: upload.js
This script uses the fetch and fs libraries to upload a file to a given signed URL. The file is read into memory and uploaded using an HTTP PUT request. The content type header is set to "text/plain".

## Requirements

- Node.js
- A Google Cloud Platform project with billing enabled
- A Google Cloud Storage bucket
- A service account key file in JSON format (see https://cloud.google.com/iam/docs/creating-managing-service-account-keys)
- The @google-cloud/storage library (see https://www.npmjs.com/package/@google-cloud/storage)

## Usage

1. Copy the .env.example file to .env and replace the placeholder values with the actual values relevant to your setup.
1. Run `npm install` to install the required libraries
2. Run `npm run generate-urls` to generate a signed URL
3. Copy the signed URL from the console output and add it to the .env file
4. Run `npm run upload` to upload a file to the signed URL

## Note
- Please make sure to replace the placeholder values in the scripts with the actual values relevant to your setup.
- These scripts are for demonstration purposes only. They are not intended for production use.
