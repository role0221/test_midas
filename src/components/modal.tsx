import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import Question1 from "./question1";
import Question2 from "./question2";
import Question3 from "./question3";

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  Q: number;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose, Q }) => {
  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgba(255, 255, 255, 0.95)",
            paddingX: "2vw",
            width: "auto",
            height: "auto",
            borderRadius: "1rem",
          }}
        >
          {Q === 1 ? <Question1 /> : Q === 2 ? <Question2 /> : <Question3 />}
        </Box>
      </Modal>
    </>
  );
};

export default MyModal;
