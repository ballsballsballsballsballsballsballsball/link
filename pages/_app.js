import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function App({ Component, pageProps }) {
  const theme = createTheme({
    type: "dark",
      theme: {
        colors: {
            background: "#14001a",
        }
      }
  });

  return (
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          dark: theme.className,
        }}
      >
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
  );
}

export default App;
