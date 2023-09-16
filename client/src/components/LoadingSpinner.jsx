import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material/";
import TypewriterComponent from "typewriter-effect";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap="1vh"
      minHeight="100vh"
    >
      <CircularProgress />
      <TypewriterComponent
        options={{
          strings: ["Render server spinning up...", "..."],
          autoStart: true,
          loop: true,
        }}
      ></TypewriterComponent>
    </Box>
  );
};
export default LoadingSpinner;
