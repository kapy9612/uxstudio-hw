import { Request, Response } from "express";
import * as uploadService from "../services/uploadService";

export default {
  uploadFile: async (req: Request, res: Response) => {
    const { fileName, fileContent } = req.body;

    if (!fileName || !fileContent) {
      return res.status(400).send("File name and content are required");
    }

    try {
      const fileUrl = await uploadService.uploadFile(fileName, fileContent);
      res.status(200).send({
        message: "File uploaded successfully!",
        fileUrl: fileUrl,
      });
    } catch (error) {
      console.error("Error in upload controller: ", error);
      res.status(500).send("Error uploading file");
    }
  },
};
