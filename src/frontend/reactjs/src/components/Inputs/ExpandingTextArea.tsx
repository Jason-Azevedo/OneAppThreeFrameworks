import React, { useState, useRef, useEffect } from "react";

interface ITextAreaProps {}

export default function ExpandingTextArea() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;

    // Reset to prevent the input not resizing when deleting text
    textarea.style.height = "";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [text]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);

    // Some other callback here
  };

  return (
    <textarea
      ref={textareaRef}
      className="text-area-expanding"
      placeholder="Type something here..."
      onChange={onChange}
    ></textarea>
  );
}
