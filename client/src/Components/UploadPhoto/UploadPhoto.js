import React, { useState } from "react";
import { AuthAPI, PhotoAPI } from "../../Api";

export default function FileUploadComponent() {
  const [profileImg, setProfileImg] = useState("");
  const [imageId, setImageId] = useState("");
  const user = AuthAPI.getCurrentUser();

  const onFileChange = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", user.id);
    formData.append("photo", profileImg);
    PhotoAPI.upload(formData).then(
      (response) => {
        console.log(response);
        setImageId(response.data.photo_id);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <div className="row">
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <h3>React file upload</h3>
          <br />
          <div className="form-group">
            <input
              type="file"
              onChange={onFileChange}
              required
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <div className="row">
        <button className="btn btn-primary">Get image</button>
      </div>
      <br />
      <br />
      {imageId ? (
        <div className="row">
          <img src={`http://localhost:8080/api/photos/${imageId}`} alt="" />
        </div>
      ) : null}
    </div>
  );
}
