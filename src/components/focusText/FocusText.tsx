import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import s from "./FocusText.module.css";

export const FocusText = () => {
  const [text, setText] = useState<string>("Designing");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  const handleSave = () => {
    setIsEditing(false);
  };
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };
  return (
    <div className={s.paper}>
      <TextField
        variant={isEditing ? "outlined" : "standard"}
        label="Your focus here"
        className={s.iputBase}
        value={text}
        onChange={handleChange}
        onBlur={handleSave}
        onKeyDown={handleKey}
        onClick={!isEditing ? handleEdit : undefined}
        color="primary"
        focused
        // placeholder="Add your focus here"
        InputProps={{ readOnly: !isEditing }}
        inputProps={{ "aria-label": "focus text" }}
        sx={{
          flex: 1,
          marginRight: "3px",
          padding: "2px 5px",
          fontSize: "16px",
          input: {
            color: "#fff",
          },
        }}
      />
      <IconButton
        color="primary"
        onClick={handleEdit}
        sx={{
          padding: "8px",
          color: "2f80ed",
          transition: "background-color 0.3s ease",
          borderRadius: "10px",
          "&:hover": {
            color: "#56ccf2",
          },
        }}
      >
        {isEditing ? (
          <SaveIcon
            sx={{
              color: "#2f80ed",
              padding: "8px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                color: "#56ccf2",
              },
            }}
          />
        ) : (
          <EditIcon />
        )}
      </IconButton>
    </div>
  );
};
