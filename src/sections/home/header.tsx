import { Box, Container, Heading, Text } from 'theme-ui';
import { rgba } from 'polished';

import Select from 'components/pages/home/select';

const options = [
  {
    id: 1,
    label: 'Madrasah Ibtidaiyah',
    value: 'mti',
  },
  {
    id: 2,
    label: 'Madrasah Tsanawiyah',
    value: 'mts',
  },
  {
    id: 3,
    label: 'Madrasah Aliyah',
    value: 'mta',
  },
];

export default function Banner() {
  return (
    <Box as='section' id='home' sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as='h1' sx={styles.heroTitle}>
              Madrasah International TechnoNatura
            </Heading>
            <Text as='p' sx={styles.desc}>
              Blablablabla
            </Text>
            <Box>
              <Select
                id='location'
                label='Find place'
                defaultValue={options[1].label}
                sx={styles.select}
              >
                {options?.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(https://startup-saas-modern.vercel.app/_next/static/images/banner-bg-d1d19f3af4e862ba3ee37c04e4b353c8.jpg) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, '60vh', '70vh', '80vh', '100vh'],
    justifyContent: ['center', 'center', 'center', 'start', 'start', 'start'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.93),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ':
      {
        maxWidth: 515,
        mt: 70,
        padding: '30px 50px 65px',
      },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ':
      {
        fontSize: 40,
      },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ':
      {
        mt: 15,
      },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    ':focus': {
      outline: '0 none',
    },
  },
};
