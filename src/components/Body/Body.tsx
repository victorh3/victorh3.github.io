import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ContactForm } from "../ContactForm";

export default function Body() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      pt={8}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      boxSizing={"border-box"}
      sx={{ bgcolor: "primary.light" }}
    >
      <Box
        textAlign={"center"}
        fontSize={96}
        mb={4}
        fontWeight={"bold"}
        fontFamily={"'Helvetica', 'Arial', sans-serif"}
        color={"white"}
      >
        "@victorh3"
      </Box>

      <Button
        variant={"contained"}
        color={"secondary"}
        onClick={handleClickOpen}
      >
        Lets get in touch!
      </Button>
      <ContactForm open={open} handleClose={handleClose} />
    </Box>
  );
}
