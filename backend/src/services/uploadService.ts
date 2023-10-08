import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../config/awsConfig";

export const uploadFile = async (
  fileName: string,
  fileContent: string,
): Promise<string> => {
  try {
    // Strip the data: URL prefix if it exists
    const base64Data = fileContent.replace(/^data:image\/\w+;base64,/, "");

    // Decode Base64 to binary data
    const binaryData = Buffer.from(base64Data, "base64");

    // Parameters for S3 putObject
    const params = {
      Bucket: "uxstudio-challenge-bucket",
      Key: fileName,
      Body: binaryData,
      ContentType: "image",
      ACL: "public-read",
    };

    // Uploading to S3
    await s3.send(new PutObjectCommand(params));

    // Returning the URL where the file is located
    return `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;
  } catch (error) {
    console.error("Error in uploadService: ", error);
    throw new Error("Error uploading file");
  }
};
