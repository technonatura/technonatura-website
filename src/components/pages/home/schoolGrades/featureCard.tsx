import { jsx, Box, Image, Heading, Text } from 'theme-ui';
import { LearnMore } from '../../../links/link';
import NextjsImage from 'next/image';

const Feature = ({
  data,
  ...props
}: {
  data: {
    id: number;
    icon: StaticImageData;
    title: string;
    description: string;
    path?: string;
  };
}) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as='figure'>
        <NextjsImage
          src={data.icon}
          width='100'
          height='100'
          alt={data.title}
        />
      </Box>
      <Box>
        <Heading as='h3'>{data?.title}</Heading>
        <Text as='p'>{data?.description}</Text>
        {data?.path && <LearnMore path={data.path} />}
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
    display: ['flex'],
    figure: {
      minWidth: [70],
      mr: ['30px'],
    },
    h3: {
      fontSize: '18px',
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: '20px',
    },
    p: {
      fontSize: 16,
      lineHeight: 1.88,
      color: 'text',
    },
    a: {
      mt: [3],
    },
  },
};
