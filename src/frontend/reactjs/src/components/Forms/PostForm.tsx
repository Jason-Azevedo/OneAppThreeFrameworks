import React, { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faVideo } from "@fortawesome/free-solid-svg-icons";

import ExpandingTextArea from "../Inputs/ExpandingTextArea";
import IconFileUploadButton from "../Inputs/IconFileUploadButton";
import MediaSlider from "../MediaSlider";

const IMAGE_UPLOAD_LIMIT = 5;
const VIDEO_UPLOAD_LIMIT = 3;

const FILE_IMAGE_TYPE = "image";
const FILE_VIDEO_TYPE = "video";

export interface IFileURL {
  type: string;
  url: string;
}

interface IPostFormState {
  post: string;
  files: File[];
  fileUrls: IFileURL[]; // For the image slider
}

export default function PostForm() {
  const [post, setPost] = useState<IPostFormState>({
    post: "",
    files: [],
    fileUrls: [],
  });

  const onFilesUpload = (files: File[]) => {
    let newFiles = [] as File[];
    let newFileUrls = [] as IFileURL[];

    let totalImages = getTotalFilesByType(FILE_IMAGE_TYPE);
    let totalVideos = getTotalFilesByType(FILE_VIDEO_TYPE);

    for (let f of files) {
      const type = f.type.split("/")[0];
      const isImage = type === FILE_IMAGE_TYPE;
      const isVideo = type === FILE_VIDEO_TYPE;

      // User uploaded another type of file
      if (isImage && isVideo) continue;

      // Are we over the limit for the uploaded file type
      if (isImage && totalImages >= IMAGE_UPLOAD_LIMIT) continue;
      if (isVideo && totalVideos >= VIDEO_UPLOAD_LIMIT) continue;

      const url = URL.createObjectURL(f);

      // Adjust the total file count for the new file
      if (isImage) totalImages++;
      else totalVideos++;

      newFileUrls.push({ type, url });
      newFiles.push(f);
    }

    setPost((p) => ({
      ...p,
      files: [...p.files, ...newFiles],
      fileUrls: [...p.fileUrls, ...newFileUrls],
    }));
  };

  const onFileRemove = (index: number) => {
    const newFiles = post.files.filter((e, i) => i !== index);
    const newFileUrls = post.fileUrls.filter((e, i) => i !== index);

    setPost((p) => ({
      ...p,
      files: newFiles,
      fileUrls: newFileUrls,
    }));
  };

  const getTotalFilesByType = (type: "image" | "video") => {
    let fileCount = 0;

    post.fileUrls.forEach((e) => {
      if (e.type === type) fileCount++;
    });

    return fileCount;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: submit the new post to the backend
  };

  return (
    <form className="form card" onSubmit={onSubmit}>
      <h2 className="form-title title--18 thin light">
        What would you like to post?
      </h2>

      {/* Preview media content uploads here */}
      {post.files.length > 0 && (
        <MediaSlider links={post.fileUrls} onItemRemove={onFileRemove} />
      )}

      <ExpandingTextArea charLimit={240} />

      <div className="flex-row align-c justify-sb">
        <div className="flex-row align-c gap--16">
          <IconFileUploadButton
            icon={<FontAwesomeIcon icon={faImages} className="icon--18" />}
            accept="image/*"
            multiple
            onChange={onFilesUpload}
          />
          <span className="text--14">
            {getTotalFilesByType(FILE_IMAGE_TYPE) + "/" + IMAGE_UPLOAD_LIMIT}
          </span>

          <IconFileUploadButton
            icon={<FontAwesomeIcon icon={faVideo} className="icon--18" />}
            accept="video/*"
            multiple
            onChange={onFilesUpload}
          />

          <span className="text--14">
            {getTotalFilesByType(FILE_VIDEO_TYPE) + "/" + VIDEO_UPLOAD_LIMIT}
          </span>
        </div>

        <button className="button" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}
