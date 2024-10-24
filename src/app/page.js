"use client";
import { useState } from "react";

const Page = () => {
  const [img, setImg] = useState(null);
  const [uploadedImgUrl, setUploadedImgUrl] = useState();

  const uploadImg = async () => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("cloud_name", "dohdgnsrk");
    formData.append("upload_preset", "upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dohdgnsrk/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );
    const data = await res.json();
    setUploadedImgUrl(data.secure_url);
    console.log(data.secure_url);
    setImg(null);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={() => uploadImg()}>upload</button>
      {uploadedImgUrl && (
        <img style={{ height: "600px" }} src={uploadedImgUrl} />
      )}
    </div>
  );
};
export default Page;
