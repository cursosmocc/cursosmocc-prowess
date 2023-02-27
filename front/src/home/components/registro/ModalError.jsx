import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #",
  boxShadow: 24,
  p: 4,
};

export default function ModalError({
  warnings,
  setSuccess,
  handleSubmit,
  enrolUser,
}) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setSuccess(true);
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Error en el registro
          </Typography>
          {warnings.map((warning) => (
            <Typography
              id="keep-mounted-modal-description"
              sx={{ mt: 2, color: "red" }}
              key={warning.message}
            >
              {warning.message.substring(
                0,
                warning.message.indexOf("&") === -1
                  ? warning.message.length
                  : warning.message.indexOf("&")
              )}
            </Typography>
          ))}
          <hr />
          <Typography sx={{ mt: 2, color: "blue" }}>
            Conozco los riesgos y deseo continuar
          </Typography>
          <button
            onClick={handleSubmit(enrolUser)}
            className="btn btn-secondary mt-3"
          >
            <Typography>Registrar igualmente</Typography>
          </button>
        </Box>
      </Modal>
    </div>
  );
}
