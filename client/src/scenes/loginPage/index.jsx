import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { usePing } from "hooks/pingHook";
import LoadingSpinner from "components/LoadingSpinner";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { data: data, isLoading: loading } = usePing();

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <Box>
          <Box
            width="100%"
            backgroundColor={theme.palette.background.alt}
            p="1rem 6%"
            textAlign="center"
          >
            <Typography fontWeight="bold" fontSize="32px" color="primary">
              Socialio
            </Typography>
          </Box>
          <Box
            width={isNonMobileScreens ? "50%" : "93%"}
            p="2rem"
            m="2rem auto" // rem allows consistency along diff browsers
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
              Welcome to Socialio!
            </Typography>
            <Form />
          </Box>
        </Box>
      )}
    </>
  );
};

export default LoginPage;
