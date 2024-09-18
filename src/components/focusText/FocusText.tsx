import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  FormControl,
  IconButton,
  IconButtonProps,
  styled,
  TextField,
} from "@mui/material";
import { useState } from "react";

const EditButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: "8px",
  marginTop: "10px",
  transition: "background-color 0.3s ease",
  borderRadius: "10px",
  "&:hover": {
    color: "#56ccf2",
  },
}));
type FocusTextProps = {
  text: string;
  onTextChange: (text: string) => void;
};

export const FocusText = ({ text, onTextChange }: FocusTextProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(event.target.value);
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        transition: "all 0.4s ease",
      }}
    >
      <FormControl
        sx={{
          width: isEditing ? "175px" : "0px",
          overflow: "hidden",
          paddingTop: "10px",
          transition: "width 0.3s ease",
          marginRight: isEditing ? "10px" : "0px",
        }}
      >
        <TextField
          focused={isEditing}
          size="small"
          label="Change Your Focus"
          value={text}
          onChange={handleChange}
          onBlur={handleSave}
          onKeyDown={handleKey}
          onClick={!isEditing ? handleEdit : undefined}
          placeholder="Add your focus here"
          inputProps={{ readOnly: !isEditing }}
          sx={{
            input: {
              color: "#fff",
            },
          }}
        />
      </FormControl>
      <EditButton color="primary" onClick={handleEdit}>
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </EditButton>
    </Box>
  );
};
