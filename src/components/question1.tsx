import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Button } from "@mui/material";
const Question1 = () => {
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [hourAngle, setHourAngle] = useState<number>();
  const [minAngle, setMinAngle] = useState<number>();
  const [smaller, setSmaller] = useState<number>();

  const Test = (Time: Dayjs) => {
    const hour = Time.hour();
    const minute = Time.minute();

    const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteAngle = minute * 6;

    const angleDifference = Math.abs(hourAngle - minuteAngle);
    const smallerAngle = Math.min(angleDifference, 360 - angleDifference);

    setHourAngle(hourAngle);
    setMinAngle(minuteAngle);
    setSmaller(smallerAngle);

    // console.log("Smaller Angle:", smallerAngle);
    // console.error(formatTime(selectedTime));
    // console.error(selectedTime);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        width: "20vw",
        height: "50vh",
      }}
    >
      <h1
        style={{
          color: "#1e88e5",
          fontFamily: "Roboto",
          letterSpacing: "0.3rem",
          fontSize: "1.8vw",
          width: "100%",
        }}
      >
        {" "}
        ClOCK ANGEL.
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vh",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label=" Selected Time"
            value={selectedTime}
            onChange={(newValue) => {
              if (newValue !== null) {
                setSelectedTime(newValue);
                Test(newValue);
              }
            }}
          />
        </LocalizationProvider>
      </div>

      <div>
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "40%" }}>hour Angle :</div>
          <div style={{ width: "40%" }}>
            {!hourAngle ? "Selected Time" : hourAngle}
          </div>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "40%" }}>minute Angle:</div>
          <div style={{ width: "40%" }}>
            {!hourAngle ? "Selected Time" : minAngle}
          </div>
          {/* minute Angle :{minAngle} */}
        </Button>

        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "40%" }}> Smaller :</div>
          <div style={{ width: "40%" }}>
            {!hourAngle ? "Selected Time" : smaller}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Question1;
