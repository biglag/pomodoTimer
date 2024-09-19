import {
  Box,
  Paper,
  styled,
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

  const buttonTimeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTime: number,
  ) => {
    console.log(event.target);
    if (newTime !== null) {
      setSelectedTime(newTime);
      onTimeSelect(newTime * 60);
    }
  };

  return (
    <Box>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: "flex",
          border: `1.5px solid ${theme.palette.divider}`,
          borderColor: "#2f80ed",
          flexWrap: "wrap",
        })}
      >
        <StyledToggleButtonGroup
          color="primary"
          size="small"
          value={selectedTime}
          exclusive
          onChange={buttonTimeChange}
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
                color: selectedTime === time ? "#2f80ed" : "#fff",
                backgroundColor:
                  selectedTime === time ? "#2f80ed" : "transparent",
                "&:hover": {
                  backgroundColor: "#2f80ed",
                  color: "#fff",
                },
              }}
            >
              {time}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Paper>
    </Box>
  );
};
