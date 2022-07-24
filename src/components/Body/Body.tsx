import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Body() {
  return (
    <Box
      pt={8}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      boxSizing={"border-box"}
    >
      <Box textAlign={"center"} fontSize={96} mb={4}>
        @victorh3
      </Box>

      <Button variant={"contained"}>Lets get in touch!</Button>
    </Box>
  );
}
