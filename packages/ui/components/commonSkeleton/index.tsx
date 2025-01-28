import { Box, Container, Skeleton, SxProps, Theme } from '@mui/material';

import { commonSkeletonStyle } from './style';

export interface CommonSkeletonProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export const CommonSkeleton = (props: CommonSkeletonProps): JSX.Element => {
  const { ...rest } = props;

  return (
    <Container
      sx={{
        position: 'relative',
        height: '100vh',
        maxWidth: { sm: '425px', xs: '425px', md: '425px' },
        padding: { sm: '0px', xs: '0px' },
      }}
    >
      <Box sx={commonSkeletonStyle.rootSx} {...rest}>
        <Box sx={commonSkeletonStyle.headerSectionSx}>
          <Skeleton height="40px" animation="wave" />
        </Box>
        <Box>
          <Box sx={commonSkeletonStyle.imageCardSx}>
            <Skeleton sx={commonSkeletonStyle.imageSx} height="118px" width="72px" />
            <Skeleton sx={commonSkeletonStyle.contentSx} height="190px" animation="wave" />
            <Skeleton sx={commonSkeletonStyle.labelSx} width="52px" height="43px" />
          </Box>
          <Box sx={commonSkeletonStyle.historySx}>
            <Skeleton height="185px" animation="wave" />
          </Box>
          <Box sx={commonSkeletonStyle.exploreCardSx}>
            <Skeleton height="198px" animation="wave" />
          </Box>
          <Box sx={commonSkeletonStyle.tabsSectionSx}>
            <Skeleton height="185px" animation="wave" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
