import React, { useEffect, useState, forwardRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import "./EditorStyles.css"; // Import your custom styles

interface EditorProps {
    value: string;
    handleChange: (value: string) => void;
    disabled?: boolean;
}

// Register the emoji module with Quill
Quill.register(
    {
        "formats/emoji": quillEmoji.EmojiBlot,
        "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
        "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
        "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
    },
    true
);

export const EditorQuill = forwardRef<ReactQuill, EditorProps>(
    ({ value, handleChange, disabled = false }, ref) => {
        const [modules, setModules] = useState({});

        useEffect(() => {
            setModules({
                toolbar: {
                    container: [
                        ["bold", "italic", "underline", "strike"],
                        [{ align: [] }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["emoji"],
                    ],
                },
                "emoji-toolbar": true,
                "emoji-textarea": true,
                "emoji-shortname": true,
            });
        }, []);

        return (
            <ReactQuill
                className="custom-quill"
                value={value}
                modules={modules}
                theme="snow"
                onChange={handleChange}
                readOnly={disabled}
                ref={ref} // Forward the ref to the ReactQuill component
            />
        );
    }
);

EditorQuill.displayName = "EditorQuill"; // Add a display name for the component
