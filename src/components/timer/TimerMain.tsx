import SkipNextIcon from "@mui/icons-material/SkipNext";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Svg } from "../../assets/SvgAsset";
import s from "./TimerMain.module.css";

type TimerProps = {
  expiryTimestamp: Date;
  totalDuration: number;
  focusText: string;
  onComplete: () => void;
};

export const MyTimer = ({
  expiryTimestamp,
  totalDuration,
  focusText,
  onComplete,
}: TimerProps) => {
  const { seconds, minutes, hours, isRunning, start, pause, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => onComplete(),
    });

  const [totalTime, setTotalTime] = useState(totalDuration);

  React.useEffect(() => {
    setTotalTime(totalDuration);
    restart(expiryTimestamp);
  }, [expiryTimestamp, restart, totalDuration]);

  const totalSeconds: number = minutes * 60 + hours * 3600 + seconds;
  const progress = (totalSeconds / totalTime) * 100;

  return (
    <>
      <Box className={s.timerContainer}>
        <Svg />
        <CircularProgress
          variant="determinate"
          value={progress}
          size={250}
          className={s.gradientCircularProgress}
        />
        <Box className={s.textCentered}>
          <Typography variant="h5" component={"div"} className={s.timerText}>
            {`${hours.toString().padStart(2, "0")}:
          ${minutes.toString().padStart(2, "0")}:
          ${seconds.toString().padStart(2, "0")}`}
          </Typography>
        </Box>
      </Box>
      <Box className={s.buttonContainer}>
        {isRunning ? (
          <Button onClick={pause} className={s.MuiButton} variant="contained">
            Pause
          </Button>
        ) : (
          <Button onClick={start} className={s.MuiButton} variant="contained">
            Start
          </Button>
        )}
        {/* onClick={onComplete}
          className={s.MuiButton}
          variant="contained"
          sx={{
            weight: "5px",
          }} */}
        <IconButton
          onClick={onComplete}
          color="primary"
          className={s.skipButton}
        >
          <SkipNextIcon />
        </IconButton>
      </Box>
      <Typography
        variant="caption"
        component="div"
        sx={{
          color: grey[600],
          fontSize: "11px",
          marginTop: "15px",
        }}
      >
        Your Focusing on{" "}
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{ color: "#fff", fontSize: "18px" }}
      >
        {focusText}
      </Typography>
    </>
  );
};
