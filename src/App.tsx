import Box from "@mui/material/Box";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Box>
        <Header />
        <Body />
      </Box>
    </ThemeProvider>
  );
}

export default App;
