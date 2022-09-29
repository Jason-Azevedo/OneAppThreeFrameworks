import React, { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faVideo } from "@fortawesome/free-solid-svg-icons";

import ExpandingTextArea from "../Inputs/ExpandingTextArea";
import IconFileUploadButton from "../Inputs/IconFileUploadButton";
import MediaSlider from "../MediaSlider";

export interface IFileURL {
  type: string;
  url: string;
}

interface IPostFormState {
  post: string;
  files: File[];
  fileUrls: IFileURL[];
}

export default function PostForm() {
  const [post, setPost] = useState<IPostFormState>({
    post: "",
    files: [],
    fileUrls: [],
  });

  const onFileUpload = (f: File) => {
    const type = f.type.split("/")[0];

    // User uploaded another type of file
    if (type !== "image" && type !== "video") return;

    const url = URL.createObjectURL(f);

    setPost((p) => ({
      ...p,
      files: [...p.files, f],
      fileUrls: [...p.fileUrls, { type, url }],
    }));
  };
  const onFileRemove = (index: number) => {};

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="form card" onSubmit={onSubmit}>
      <h2 className="form-title title--18 thin light">
        What would you like to post?
      </h2>

      {/* Preview media content uploads here */}
      {post.files.length > 0 && <MediaSlider links={post.fileUrls} />}

      <ExpandingTextArea charLimit={240} />

      <div className="flex-row align-c justify-sb">
        <div className="flex-row align-c gap--16">
          <IconFileUploadButton
            icon={<FontAwesomeIcon icon={faImages} className="icon--18" />}
            accept="image/*"
            onChange={onFileUpload}
          />
          <span className="text--14">0/10</span>

          <IconFileUploadButton
            icon={<FontAwesomeIcon icon={faVideo} className="icon--18" />}
            accept="video/*"
            onChange={onFileUpload}
          />
          <span className="text--14">0/3</span>
        </div>

        <button className="button" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}
