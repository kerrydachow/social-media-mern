import { Box } from "@mui/material";
import { API_BASE_URL } from "lib/constants";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${API_BASE_URL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
