import { Box, ThemeUIStyleObject } from 'theme-ui';

const ResponsiveIframe = ({
  src,
  children,
  ...props
}: {
  src: string;
  children?: JSX.Element | JSX.Element[] | string;
}) => {
  return (
    <Box
      // @ts-ignore
      sx={styles.videoContainer}
    >
      {children ? children : <iframe src={src} {...props}></iframe>}
    </Box>
  );
};

export default ResponsiveIframe;

const styles: ThemeUIStyleObject = {
  videoContainer: {
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',
    iframe: {
      border: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
};
