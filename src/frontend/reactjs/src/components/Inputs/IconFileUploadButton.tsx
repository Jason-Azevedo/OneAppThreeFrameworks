import React from "react";

interface IIconFileUploadButtonProps {
  accept: string;
  icon: React.ReactNode;
  onChange: (e: File) => void;
}

export default function IconFileUploadButton({
  accept,
  icon,
  onChange,
}: IIconFileUploadButtonProps) {
  return (
    <div className="icon-file-upload-btn">
      {icon}
      <input
        type="file"
        accept={accept}
        onChange={(e) => {
          // Check for not null file
          if (e.target.files && e.target.files[0]) onChange(e.target.files[0]);
        }}
      />
    </div>
  );
}
