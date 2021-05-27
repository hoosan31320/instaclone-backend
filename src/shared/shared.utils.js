import AWS from "aws-sdk";

export const uploadToS3 = async (file, userId, folderName) => {
    AWS.config.update({
        credentials: {
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET
        }
    });
    const { filename, createReadStream } = await file;
    const readStream = createReadStream();
    console.log(readStream);
    console.log("1");
    const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
    console.log(objectName);
    console.log("2");
    const { Location } = await new AWS.S3()
        .upload({
            Bucket: "hoos31320wetube",
            Key: objectName,
            ACL: "public-read",
            Body: readStream
        })
        .promise();
    return Location;
};