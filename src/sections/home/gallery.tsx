import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';

import { Box, Container, Button } from 'theme-ui';

import NextLink from 'next/link';

import SectionHeading from 'components/pages/home/featured-space/section-heading';
import GalleryCard from 'components/pages/home/cards/gallery-card';

import gallery1 from 'assets/images/gallery/1.png';
import gallery2 from 'assets/images/gallery/2.png';
import gallery3 from 'assets/images/gallery/3.png';
import gallery4 from 'assets/images/gallery/4.png';
import gallery5 from 'assets/images/gallery/5.png';
import gallery6 from 'assets/images/gallery/6.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Front working space',
    dimension: 1 / 3,
  },
  {
    id: 2,
    image: gallery2,
    title: 'Meeting corner',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Guest meeting room',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Guest rest room',
  },
  {
    id: 6,
    image: gallery6,
    title: 'Kitchen room',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Single working space',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box  as='section' sx={styles.section}>
      <Container>
        <SectionHeading
          // @ts-ignore
          sx={styles.heading}
          slogan='Madrasah technoNatura Galeries'
          title='Jelajahi Madrasah International TechnoNatura Galeries'
        />
        <Box
          as={Masonry}
          // @ts-ignore
          option={masonryOptions}
          sx={styles.galleryWrapper}
        >
          {data?.map((item) => (
            <GalleryCard
              key={item.id}
              // @ts-ignore
              item={item}
            />
          ))}
        </Box>
        <NextLink href='/galeries'>
          <Button variant='muted' sx={styles.button}>
            Explore More <RiArrowRightSLine size='20px' />
          </Button>
        </NextLink>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
