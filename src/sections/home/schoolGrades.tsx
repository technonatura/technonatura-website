import { Box, Container, ThemeUIStyleObject } from 'theme-ui';
import SectionHeading from '../../components/pages/home/schoolGrades/section-heading';
import Feature from '../../components/pages/home/schoolGrades/featureCard';

import individual from 'assets/images/icons/individual.svg';
import team from 'assets/images/icons/team.svg';
import org from 'assets/images/icons/org.svg';

const data = [
  {
    id: 1,
    icon: individual,
    title: 'Madrasah Ibtidaiyah',
    description: `Fokus pada pembentukan karakter terbaik siswa.`,
  },
  {
    id: 2,
    icon: team,
    title: 'Madrasah Tsanawiyah',
    description: `Penekanan pada leadership dan organisasi.`,
  },
  {
    id: 3,
    icon: org,
    title: 'Madrasah Aliyah',
    description: `Menyiapkan generasi yang profesional dan world citizen.`,
  },
];

const styles: ThemeUIStyleObject = {
  heading: {
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
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};

const Services = () => {
  return (
    <Box
      as='section'
      id='services'
      variant='section.features'
      style={{
        paddingTop: '100px',
        paddingBottom: '50px',
        backgroundColor: '#F9FBFD',
      }}
    >
      <Container>
        <SectionHeading
          title='Tingkat di Madrasah TechnoNatura'
          description='Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.'
        />
        <Box
          // @ts-ignore
          sx={styles.features}
        >
          {data?.map((item) => (
            <Feature
              key={item.id}
              // @ts-ignore
              className='feature-item'
              data={item}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
