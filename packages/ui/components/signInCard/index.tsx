import { Box, Stack } from '@mui/material';
import { SignInCardStyle } from './style';
import { useState } from 'react';
import { RenderCardType } from './renderCardType';
import { useLogin } from '@core/store/backOffice'
import { useNavigate } from 'react-router-dom';
import { backOfficeRoutes } from '@core/routes';


export interface SignInCardProps {
  title?: string,
  subTitle?: string,
  buttonText?: string,
  forgotPassword?: () => void,
}


export const SignInCardComponent = (props: SignInCardProps): JSX.Element => {
  const navigate = useNavigate();

  const initialVariant = 'signIn'
  const [cardVariant, setCardVariant] = useState(initialVariant)
  const { sendEmail } = useLogin();


  const forgotPassword = () => {
    setCardVariant('forgotPassword')
  }
  const backToSignIn = () => {
    setCardVariant(initialVariant)
  }

  const sendOTP = () => {
    sendEmail(() => setCardVariant('linkSuccessfull'));
  };


  return (
    <Stack sx={SignInCardStyle?.rootSx} direction={'row'}>
      <Box sx={SignInCardStyle?.cardSx}>
        {RenderCardType({
          forgotPassword: forgotPassword,
          backToSignIn: backToSignIn,
          sendOTP: sendOTP,
          variant:  cardVariant
          })} 
      </Box>
    </Stack>
  )
};
