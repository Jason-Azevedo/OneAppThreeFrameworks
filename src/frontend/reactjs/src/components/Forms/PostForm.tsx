import React, { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faVideo } from "@fortawesome/free-solid-svg-icons";

import ExpandingTextArea from "../Inputs/ExpandingTextArea";
import IconFileUploadButton from "../Inputs/IconFileUploadButton";

interface IPostFormState {
  message: string;
  file: File;
  fileUrl: string;
}

export default function PostForm() {
  const [post, setPost] = useState({} as IPostFormState);

  const onFileUpload = (f: File) => {
    // Create file url
    const url = URL.createObjectURL(f);
    if (post.fileUrl) URL.revokeObjectURL(post.fileUrl);

    // Set state
    setPost((prev) => ({ ...prev, file: f, fileUrl: url }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="card" onSubmit={onSubmit}>
      <h2 className="title--18 thin light">What would you like to post?</h2>

      {/* Preview file uploads here */}
      {post.file && <img className="card-image" src={post.fileUrl} alt="" />}

      <ExpandingTextArea />

      <div className="flex-row align-c justify-sb">
        <div className="flex-row gap--16">
          <IconFileUploadButton
            icon={<FontAwesomeIcon icon={faImages} className="icon--18" />}
            accept="image/*"
            onChange={onFileUpload}
          />
        </div>

        <button className="button">Post</button>
      </div>
    </form>
  );
}
