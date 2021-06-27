import { Box, Heading, Text, Image, ThemeUIStyleObject } from 'theme-ui';

const styles: ThemeUIStyleObject = {
  heading: {
    textAlign: 'center',
    margin: '0 auto 60px',
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  title: {
    fontFamily: 'headingSerif',
    fontWeight: 600,
    fontSize: ['28px', '32px', null, null, null, null, '40px'],
    lineHeight: [1.33, 1.33, 1.26],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
    },
  },
  description: {
    color: 'heading',
    fontSize: ['14px', '14px', '16px'],
    lineHeight: [1.86, 1.86, 2.2],
    mt: '10px',
  },
};

const SectionHeading = ({
  title,
  description,
  emoji,
  ...props
}: {
  title: string;
  description: string;
  emoji?: string;
}) => {
  return (
    <Box
      // @ts-ignore
      sx={styles.heading}
      {...props}
    >
      <Heading
        // @ts-ignore
        sx={styles.title}
      >
        {emoji ? <span>{title}</span> : title}
        {emoji && <Image src={emoji} alt='emoji' />}
      </Heading>
      <Text
        as='p'
        // @ts-ignore
        sx={styles.description}
      >
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;
