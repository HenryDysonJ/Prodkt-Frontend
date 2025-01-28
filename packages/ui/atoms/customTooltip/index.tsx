import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses,TooltipProps } from '@mui/material/Tooltip';

// Custom ToolTip
export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} TransitionProps={{ timeout: 0 }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.main,
    fontSize:'1.2rem'

  },
}));
CustomTooltip.displayName = 'CustomTooltip';
