// Import necessary modules and components
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css"

// Define MyApp component as a function that takes in Component and pageProps props
const MyApp: AppType = ({ Component, pageProps }) => {
  // Wrap the Component with a ThemeProvider to provide a theme based on the user's system settings
  return  <>
  <ThemeProvider defaultTheme="system" attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
</>;
};

// Export the MyApp component as the default export
export default MyApp;
