import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  IconButton,
  Paper,
  styled,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
} from "@mui/material";
import React, { useState } from "react";
import s from "./TimeSelector.module.css";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));
type TimeSelectorProps = {
  onTimeSelect: (timeInSeconds: number) => void;
};

export const TimeSelector = ({ onTimeSelect }: TimeSelectorProps) => {
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const [customTime, setCustomTime] = useState<string>("");
  const [isAddingCustomTime, setIsAddingCustomTime] = useState<boolean>(false);

  const handleTimeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTime: number | null,
  ) => {
    if (newTime !== null) {
      setSelectedTime(newTime);
      onTimeSelect(newTime * 60);
    }
  };

  const handleAddTime = () => {
    const time = parseInt(customTime, 10);
    if (!isNaN(time) && time > 0) {
      setSelectedTime(time);
      setCustomTime("");
      setIsAddingCustomTime(false);
      onTimeSelect(time * 60);
    }
  };

  return (
    <Box className={s.timeSelectorContainer}>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: "flex",
          border: `1.5px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
        })}
      >
        <StyledToggleButtonGroup
          color="primary"
          size="small"
          value={selectedTime}
          exclusive
          onChange={handleTimeChange}
          aria-label="text alignment"
          className={s.toggleButtonGroup}
        >
          {[5, 10, 20, 25, 60, 120].map((time) => (
            <ToggleButton
              key={time}
              value={time}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                fontWeight: "bold",
                color: selectedTime === time ? "#ffeb3b" : "#fff",
                backgroundColor:
                  selectedTime === time ? "#2f80ed" : "transparent",
                "&:hover": {
                  backgroundColor: "#56ccf2",
                  color: "#fff",
                },
              }}
              // className={`${s.timeButton} ${
              //   selectedTime === time ? s.timeButtonSelected : ""
              // }`}
            >
              {time}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Paper>

      {isAddingCustomTime ? (
        <Box className={s.customTimeContainer}>
          <TextField
            variant="outlined"
            color="primary"
            size="small"
            value={customTime}
            onChange={(e) => setCustomTime(e.target.value)}
            placeholder="Enter time"
            className={s.customTimeInput}
            sx={{
              input: {
                color: "#ffffff",
              },
            }}
          />
          <IconButton color="primary" onClick={handleAddTime}>
            <AddIcon />
          </IconButton>
        </Box>
      ) : (
        <IconButton
          color="primary"
          onClick={() => setIsAddingCustomTime(true)}
          className={s.addButton}
        >
          <AddIcon />
        </IconButton>
      )}
    </Box>
  );
};
