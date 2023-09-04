import { Button, InputBase, Paper } from "@mui/material";
import { useState, useEffect } from "react";

const Question2 = () => {
  const [searchValue1, setSearchValue1] = useState<string>("");
  const [searchValue2, setSearchValue2] = useState<string>("");
  const [searchValue3, setSearchValue3] = useState<string>("");
  const [resultAllValue, setResultAllValue] = useState(["", "", ""]);
  const [yourInput, setYouInput] = useState(["", "", ""]);
  const [sameWord, setSameWord] = useState<string>();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(true);
  }, [searchValue1, searchValue2, searchValue3]);

  const handleInputChangeValue1 = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheck(false);
    await setSearchValue1(event.target.value);
  };
  const handleInputChangeValue2 = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheck(false);
    await setSearchValue2(event.target.value);
  };
  const handleInputChangeValue3 = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheck(false);
    await setSearchValue3(event.target.value);
  };
  const Generate = () => {
    const inputPhrases = [searchValue1, searchValue2, searchValue3];
    setYouInput(inputPhrases);
    const lowerCaseArray = toLowerCaseArray(inputPhrases);
    const common = findCommonPhrase(lowerCaseArray);
    setSameWord(common);
    const result = getQuestionPart(lowerCaseArray, common);
    setResultAllValue(result);
    // console.log(resultAllValue);
    // console.log(result);
  };
  const findCommonPhrase = (inputArray: string[]) => {
    let currentCommonPhrase = "";
    let longestCommonPhrase = "";
    let maxLength = 0;

    for (let i = 0; i < inputArray.length; i++) {
      const currentPhrase = inputArray[i].toLowerCase();

      for (let j = 0; j < currentPhrase.length; j++) {
        const char = currentPhrase.charAt(j);
        currentCommonPhrase += char;
        if (
          currentCommonPhrase.trim() &&
          inputArray.every((phrase) => phrase.includes(currentCommonPhrase)) &&
          currentCommonPhrase.length > maxLength
        ) {
          longestCommonPhrase = currentCommonPhrase;
          maxLength = currentCommonPhrase.length;
        }
      }
    }

    return longestCommonPhrase;
  };
  const toLowerCaseArray = (inputArray: string[]) => {
    return inputArray.map((str) => str.toLowerCase());
  };

  const getQuestionPart = (phrases: string[], common: string): string[] => {
    return phrases.map((phrase) => {
      const lowerCasePhrase = phrase.toLowerCase();
      const withoutBath = lowerCasePhrase.replace(common, "");
      const trimmed = withoutBath.trim();
      return trimmed;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        width: "20vw",
        height: "60vh",
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
        Remote Associates Test.
      </h1>
      <div
        style={{
          width: "100%",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "3rem",
            width: "97.5%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={"Input 1"}
            inputProps={{ "aria-label": "Search" }}
            value={searchValue1}
            onChange={handleInputChangeValue1}
          />
        </Paper>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "3rem",
            width: "97.5%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={"Input 2"}
            inputProps={{ "aria-label": "Search" }}
            value={searchValue2}
            onChange={handleInputChangeValue2}
          />
        </Paper>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "3rem",
            width: "97.5%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={"Input 3"}
            inputProps={{ "aria-label": "Search" }}
            value={searchValue3}
            onChange={handleInputChangeValue3}
          />
        </Paper>
      </div>
      <Button
        disabled={
          !check ||
          searchValue1 == "" ||
          searchValue2 == "" ||
          searchValue3 == ""
        }
        color="primary"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={Generate}
      >
        Generate
      </Button>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1vh",
        }}
      ></div>

      <div>
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "35%" }}>Your Input :</div>
          <div style={{ width: "65%" }}>
            {!yourInput ||
            (yourInput[0] === "" && yourInput[1] === "" && yourInput[2] === "")
              ? "Wait"
              : `${yourInput[0]} , ${yourInput[1]} , ${yourInput[2]}`}
          </div>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "35%" }}>Same words:</div>
          <div style={{ width: "65%" }}>{!sameWord ? "Wait" : sameWord}</div>
        </Button>

        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", marginTop: "1vh" }}
        >
          <div style={{ width: "35%" }}> result :</div>
          <div style={{ width: "65%" }}>
            {!resultAllValue ||
            (resultAllValue[0] === "" &&
              resultAllValue[1] === "" &&
              resultAllValue[2] === "")
              ? "Wait"
              : `${resultAllValue[0]} , ${resultAllValue[1]} , ${resultAllValue[2]}`}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Question2;
