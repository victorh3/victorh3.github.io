import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface Props {
  children?: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      light: "rgba(65, 182, 230, 0.60)",
      main: "rgba(65, 182, 230)",
    },
    secondary: {
      main: "rgba(219, 62, 177)",
    },
  },
});

export default function CustomStyles({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
