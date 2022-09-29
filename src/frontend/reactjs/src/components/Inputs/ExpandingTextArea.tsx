import React, { useState, useRef, useEffect } from "react";

interface IExpandingTextAreaProps {
  charLimit?: number;
  label?: string;
  error?: string;
}

export default function ExpandingTextArea({
  charLimit,
  label,
  error,
}: IExpandingTextAreaProps) {
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
    // There is a limit and we have gone over it
    if (charLimit && e.target.value.length > charLimit) {
      // Trim excess characters
      e.target.value = e.target.value.slice(0, charLimit);
    }

    setText(e.target.value);
  };

  return (
    <div className="text-area">
      {/* Label */}
      {label && <label className="text--16 light">{label}</label>}

      <textarea
        ref={textareaRef}
        className="text-area-input"
        placeholder="Type something here..."
        onChange={onChange}
      ></textarea>

      {/* Character Limit */}
      {charLimit && (
        <span className="text-area-char-limit text--12 primary uppercase bold">
          {charLimit - text.length}
        </span>
      )}

      {/* Error */}
      {error && <span className="text--14 error">{error}</span>}
    </div>
  );
}
