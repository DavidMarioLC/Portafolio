import "../styles/globals.css";
import "../styles/App.scss";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </motion.div>
  );
}

export default MyApp;
