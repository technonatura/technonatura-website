import React, { useRef } from 'react';
import { Box, Container, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/pages/home/blog-list/BlockTitle';
import Swiper from 'react-id-swiper';

import BlogPostCard from 'components/pages/home/blog-list/blog-post-card';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const featureImage1 =
  'https://images.unsplash.com/photo-1624921245403-41a2201a3052?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
const featureImage2 =
  'https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
const featureImage3 =
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
const FeatureData = [
  {
    image: featureImage1,
    title: 'How to work with prototype design with adobe xd featuring tools',
    comments: '22 Comments',
    path: '/',
  },
  {
    image: featureImage2,
    title: 'Create multiple artboard by using figma prototyping development',
    comments: '15 Comments',
    path: '/',
  },
  {
    image: featureImage3,
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    comments: '12 Comments',
    path: '/',
  },
];

const Feature = () => {
  const ref = useRef(null);
  const goNext = () => {
    // @ts-ignore
    if (ref.current !== null && ref.current.swiper !== null) {
      // @ts-ignore
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    // @ts-ignore
    if (ref.current !== null && ref.current.swiper !== null) {
      // @ts-ignore
      ref.current.swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Box
      // @ts-ignore
      sx={styles.features}
      id='news'
    >
      <Container>
        <BlockTitle
          slogan='Quality features'
          title='Tutorials that people love most'
          styles={styles.blockTitle}
        />

        <Swiper {...params} ref={ref}>
          {FeatureData.map((feature, index) => (
            <div className='swiper-slider' key={`feature-card-key${index}`}>
              <BlogPostCard
                image={feature.image}
                title={feature.title}
                commentCount={feature.comments}
                path={feature.path}
              />
            </div>
          ))}
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label='left btn' onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label='right btn'>
            <FaLongArrowAltRight />
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;

const styles = {
  blockTitle: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  features: {
    pt: ['80px', null, null, null, null, null, '120px'],
    pb: ['80px', null, null, null, '170px'],
    '.swiper-slider': {
      overflowY: 'visible',
      overflowX: 'hidden',
    },
  },
  carouselBtns: {
    display: ['flex', null, null, null, null, 'none'],
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: [2, null, 4, null, 5],
      color: '#BBC7D7',
      width: 'auto',
      padding: [0],
      margin: '0 5px',
      mt: '15px',
      transition: '500ms',
      '&:hover, &:active, &:focus': {
        color: 'primary',
      },
    },
  },
};
