import AddIcon from "@mui/icons-material/Add";
import { Box, FormControl, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";

type TimeSelectorProps = {
  onTimeSelect: (timeInSeconds: number) => void;
};

export const AddTime = ({ onTimeSelect }: TimeSelectorProps) => {
  const [customTime, setCustomTime] = useState<string>("");
  const [isAddingCustomTime, setIsAddingCustomTime] = useState<boolean>(false);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTime(event.target.value);
  };
  const handleSave = () => {
    setIsAddingCustomTime(false);
    handleAddTime();
  };
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTime();
    }
  };
  const handleEdit = () => {
    setIsAddingCustomTime((prev) => !prev);
    setCustomTime("");
  };
  const handleAddTime = () => {
    const time = parseInt(customTime, 10);
    if (!isNaN(time) && time > 0) {
      onTimeSelect(time * 60);
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
          width: isAddingCustomTime ? "175px" : "0px",
          overflow: "hidden",
          transition: "width 0.3s ease",
          margin: isAddingCustomTime ? "10px" : "0px",
        }}
      >
        <TextField
          size="small"
          focused={isAddingCustomTime}
          value={customTime}
          onChange={handleTimeChange}
          onBlur={handleSave}
          onKeyDown={handleKey}
          onClick={!isAddingCustomTime ? handleEdit : undefined}
          placeholder="Enter time"
          inputProps={{ readOnly: !isAddingCustomTime }}
          sx={{
            fontSize: "16px",
            input: {
              color: "#fff",
            },
          }}
        />
      </FormControl>
      <IconButton
        color="primary"
        sx={{ margin: "15px 0px" }}
        onClick={isAddingCustomTime ? handleAddTime : handleEdit}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};
