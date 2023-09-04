import { Button, InputBase, Paper, Typography } from "@mui/material";
import { useState } from "react";

const Question3 = () => {
  const [card1, setCard1] = useState<string>("");
  const [card2, setCard2] = useState<string>("");
  const [card3, setCard3] = useState<string>("");
  const [totalScore, setTotalScore] = useState<number>();

  const handleInputCard1 = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await setCard1(event.target.value);
  };
  const handleInputCard2 = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await setCard2(event.target.value);
  };
  const handleInputCard3 = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await setCard3(event.target.value);
  };
  const getResutl = () => {
    const input = [card1, card2, card3];
    const lowerCaseArray = toLowerCaseArray(input);
    // console.log(lowerCaseArray);
    const Score = findScore(lowerCaseArray);
    setTotalScore(Score.total);
    // console.error(totalScore);
    // console.log(Score);
  };
  const toLowerCaseArray = (inputArray: string[]) => {
    return inputArray.map((str) => str.toLowerCase());
  };
  const findScore = (inputArray: string[]) => {
    const inputString = inputArray.join(" ");
    const cards = inputString.split(" ");
    const scores: { [key: string]: number } = {
      s: 0,
      h: 0,
      c: 0,
      d: 0,
      total: 0,
    };

    let sameValue = false;

    for (const card of cards) {
      const set = card.charAt(0).toLowerCase();
      const value = card.slice(1);
      let score = 0;

      switch (value) {
        case "a":
          score = 11;
          break;
        case "j":
        case "q":
        case "k":
          score = 10;
          break;
        default:
          score = parseInt(value, 10);
      }
      scores[set] += score;

      const maxScore = Math.max(scores.c, scores.d, scores.h, scores.s);
      if (cards.filter((c) => c.slice(1) === value).length === 3) {
        sameValue = true;
        scores.total = 32.5;
      } else {
        scores.total = maxScore;
      }
      if (sameValue && cards.filter((c) => c.slice(1) === "a").length === 3) {
        scores.total = 35;
      }
      // if (
      //   sameValue &&
      //   ((scores.s >= 11 && scores.h >= 11 && scores.c >= 11) ||
      //     (scores.s >= 11 && scores.h >= 11 && scores.d >= 11) ||
      //     (scores.s >= 11 && scores.c >= 11 && scores.d >= 11) ||
      //     (scores.h >= 11 && scores.c >= 11 && scores.d >= 11))
      // ) {
      //   scores.total = 35;
      // }
    }
    return scores;
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
        Hand Score.
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "2vh",
          gap: "2%",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "3rem",
            width: "30%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={"Card 1"}
            inputProps={{ "aria-label": "Search", maxLength: 3 }}
            value={card1}
            onChange={handleInputCard1}
          />
        </Paper>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "3rem",
            width: "30%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={"Card 2"}
            inputProps={{ "aria-label": "Search", maxLength: 3 }}
            value={card2}
            onChange={handleInputCard2}
          />
        </Paper>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "3rem",
            width: "30%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={"Card 3"}
            inputProps={{ "aria-label": "Search", maxLength: 3 }}
            value={card3}
            onChange={handleInputCard3}
          />
        </Paper>
      </div>
      <Typography variant="body2" gutterBottom style={{ color: "#1769aa" }}>
        ( ตัวแรกควรใส่ S-H-C-D เช่น Sx , Hx , Cx , Dx )
      </Typography>
      <Typography variant="body2" gutterBottom style={{ color: "#1769aa" }}>
        ( ตัวที่ 2 ควรใส่ 0-10 หรือ A-K-J-Q เช่น S5 , CA , DK )
      </Typography>
      <Button
        disabled={card1 == "" || card2 == "" || card3 == ""}
        color="primary"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={getResutl}
      >
        Get Reustl
      </Button>
      <div style={{ width: "100%" }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "35%" }}>Input :</div>
          <div style={{ width: "65%" }}>
            {!card1 || (card2 === "" && card3 === "")
              ? "Wait"
              : `${card1} , ${card2} , ${card3}`}
          </div>
        </Button>

        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "35%" }}> Score :</div>
          <div style={{ width: "65%" }}>
            {!totalScore ? "wait" : `${totalScore}`}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Question3;
