import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Divider, IconButton, TextField } from "@mui/material";
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
          input: {
            color: "#ffffff",
          },
        }}
      />
      <Divider className={s.divider} orientation="vertical" />
      <IconButton color="primary" className={s.iconButton} onClick={handleEdit}>
        {isEditing ? <SaveIcon className={s.saveButton} /> : <EditIcon />}
      </IconButton>
    </div>
  );
};
