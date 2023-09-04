import { Box, Button, Container } from "@mui/material";
import MyModal from "./modal";
import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState<number>(1);

  const openPDF = () => {
    const pdfUrl =
      process.env.PUBLIC_URL +
      "https://drive.google.com/file/d/115KOFyub4BZA_aE-Jk0AeeJLSg86gXeB/view?usp=sharing";
    window.open(pdfUrl, "_blank");
  };

  const Click = (number: number) => {
    setIsModalOpen(true);
    setQuestion(number);
  };
  return (
    <Container
      sx={{
        height: "60rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        Q={question}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "2rem",
          width: "50%",
          height: "75%",
          backgroundColor: "white",
          border: "0.2rem solid",
          borderColor: "#1e88e5",
        }}
      >
        <h1
          style={{
            color: "#1e88e5",
            fontFamily: "Roboto",
            letterSpacing: "0.3rem",
            fontSize: "1.8vw",
          }}
        >
          {" "}
          Programming test.
        </h1>
        <div style={{ width: "45%" }}>
          <Button
            sx={{
              width: "100%",
              height: "20%",
              marginY: "1rem",
              flexDirection: "column",
              fontSize: "0.7vw",
            }}
            variant="outlined"
            color="primary"
            onClick={() => Click(1)}
          >
            <div>Question1 </div>
            <div>(Clock angle)</div>
          </Button>
          <Button
            sx={{
              width: "100%",
              height: "20%",
              marginY: "1rem",
              flexDirection: "column",
              fontSize: "0.7vw",
            }}
            variant="outlined"
            color="primary"
            onClick={() => Click(2)}
          >
            <div>Question2 </div>
            <div>(Remote Associates Test)</div>
          </Button>
          <Button
            sx={{
              width: "100%",
              height: "20%",
              marginY: "1rem",
              flexDirection: "column",
              fontSize: "0.7vw",
            }}
            variant="outlined"
            color="primary"
            onClick={() => Click(3)}
          >
            <div>Question3 </div>
            <div>(hand score)</div>
          </Button>
        </div>
        <Button
          onClick={openPDF}
          variant="contained"
          color="primary"
          sx={{ flexDirection: "column", fontSize: "0.7vw" }}
        >
          <div>My Contact </div>
          <div>(Thank you for your consideration.)</div>
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
