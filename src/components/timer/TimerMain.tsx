import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useTimer } from "react-timer-hook";
import { Svg } from "../../assets/SvgAsset";
import s from "./TimerMain.module.css";
type TimerProps = {
  expiryTimestamp: Date;
};
export const MyTimer = ({ expiryTimestamp }: TimerProps) => {
  const { seconds, minutes, hours, isRunning, start, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const totalSeconds: number =
    ((minutes * 60 + hours * 3600 + seconds) / 300) * 100;

  return (
    <div className={s.container}>
      <Box className={s.timerContainer}>
        <Svg />
        <CircularProgress
          variant="determinate"
          value={totalSeconds}
          size={250}
          className={s.gradientCircularProgress}
        />
        <Box className={s.textCentered}>
          <Typography variant="h4" component={"div"} className={s.timerText}>
            {`${hours.toString().padStart(2, "0")}:
          ${minutes.toString().padStart(2, "0")}:
          ${seconds.toString().padStart(2, "0")}`}
          </Typography>
        </Box>
      </Box>
      {isRunning ? (
        <Button onClick={pause} variant="contained">
          Pause
        </Button>
      ) : (
        <Button onClick={start} variant="contained">
          Start
        </Button>
      )}
    </div>
  );
};
