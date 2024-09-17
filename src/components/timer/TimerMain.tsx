import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Svg } from "../../assets/SvgAsset";
import s from "./TimerMain.module.css";
type TimerProps = {
  expiryTimestamp: Date;
  totalDuration: number;
};
export const MyTimer = ({ expiryTimestamp, totalDuration }: TimerProps) => {
  const { seconds, minutes, hours, isRunning, start, pause, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

  const [totalTime, setTotalTime] = useState(totalDuration);

  React.useEffect(() => {
    setTotalTime(totalDuration);
    restart(expiryTimestamp);
  }, [expiryTimestamp, restart, totalDuration]);

  const totalSeconds: number = minutes * 60 + hours * 3600 + seconds;
  const progress = (totalSeconds / totalTime) * 100;

  return (
    <div className={s.container}>
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
      {isRunning ? (
        <Button onClick={pause} className={s.MuiButton} variant="contained">
          Pause
        </Button>
      ) : (
        <Button onClick={start} className={s.MuiButton} variant="contained">
          Start
        </Button>
      )}
    </div>
  );
};
