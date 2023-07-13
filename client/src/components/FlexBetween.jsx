import { Box } from "@mui/material";
import { styled } from "@mui/system";

/**
 * Styled Components
 * Allows us to reuse a set of CSS properties anywhere
 * */
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
