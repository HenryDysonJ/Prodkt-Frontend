import { TopBarComponent, SignInCardComponent } from "@core/ui/components";
import ProdktLogo from "../../assets/prodktLogo";
import { Box } from "@mui/material";
import { loginStyle } from './style'

export default function Login() {
  return (
    <Box height={'100vh'}>
      <Box sx={loginStyle?.rootSx}>
        <Box sx={loginStyle?.subrootSx}>
          <Box sx={loginStyle?.cardParentSx}>
            <SignInCardComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
