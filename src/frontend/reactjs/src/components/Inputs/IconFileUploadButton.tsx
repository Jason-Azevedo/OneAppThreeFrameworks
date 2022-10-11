import React from "react";

interface IIconFileUploadButtonProps {
  accept: string;
  icon: React.ReactNode;
  multiple?: boolean;
  onChange: (e: File[]) => void;
}

export default function IconFileUploadButton({
  accept,
  icon,
  multiple,
  onChange,
}: IIconFileUploadButtonProps) {
  return (
    <div className="icon-file-upload-btn">
      {icon}
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => {
          // Check for not null files
          if (e.target.files) onChange(Array.from(e.target.files));
        }}
      />
    </div>
  );
}
