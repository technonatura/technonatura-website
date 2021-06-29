import React, { useState } from 'react';

import styled from '@emotion/styled';

import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Container, Text, Heading, Image } from 'theme-ui';

import BlockTitle from 'components/pages/home/people-thoughts/block-title';

const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    justify-content: center;
  }
  .swiper-slide {
    width: 300px !important;
  }
`;

SwiperCore.use([Thumbs, Autoplay]);

const img1 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
const img2 =
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
const img3 =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
const TESTIMONIALS_DATA = [
  {
    image: img1,
    heading: 'Ahmad Umar',
    designation: 'DIREKTUR KSKK KEMENAG',
    content:
      'TechnoNatura punya warna tersendiri bagi pendidikan sebuah madrasah yang baik dalam menyongsong era globalisasi dan tantangan industri 4.0',
  },
  {
    image: img1,
    heading: 'Ilham Habibie',
    designation: 'KETUA DEWAN TIK NASIONAL',
    content:
      'Kita tidak bisa mengajarkan anak-anak abad 21 dengan materi abad 20 menggunakan cara belajar abad 19. Saya rasa TechnoNatura sudah berada di track yang benar dalam mempersiapkan generasi ini.',
  },
];

const Testimonials = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const infoParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <Box
      as='section'
      id='testimonials'
      // @ts-ignore
      sx={styles.testimonials}
      style={{ paddingBottom: '100px' }}
    >
      <Container>
        <BlockTitle
          slogan='Customer Comments'
          title='Why customers love us'
          // @ts-ignore
          styles={styles.blockTitle}
        />
        <Swiper
          id='testimonialsContent'
          thumbs={{ swiper: thumbsSwiper }}
          {...contentParams}
        >
          {TESTIMONIALS_DATA.map((testimonialText, index) => (
            <SwiperSlide key={`testimonial-content-${index}`}>
              <Text
                // @ts-ignore
                sx={styles.testimonialsContent}
                as='p'
              >
                {testimonialText.content}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>

        <StyledSwiper
          id='testimonialsInfo'
          // @ts-ignore
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          {...infoParams}
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <SwiperSlide key={`testimonial-info-${index}`}>
              <Heading as='h3'>{testimonial.heading}</Heading>
              <Text as='span'>{testimonial.designation}</Text>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  swiperWrapper: {
    '.swiper-wrapper': {
      justifyContent: 'center',
    },
  },
  testimonials: {
    '.blockTitle': {
      textAlign: 'center',
      marginBottom: ['25px', null, null, null, null, '50px'],
    },
    '#testimonialsInfo': {
      textAlign: ['left', 'left', 'left', 'left', 'left', 'left'],
      marginTop: ['30px', null, null, null, '40px', '50px'],
      '.swiper-slide': {
        cursor: 'pointer',
        borderTop: [
          '5px solid transparent',
          null,
          null,
          null,
          null,
          '5px solid transparent',
        ],
        position: 'relative',
        paddingLeft: ['0', null, null, null, null, '20px'],
        paddingTop: ['10px', '15px', '15px', '15px', '15px', '25px'],
        paddingBottom: ['0', null, null, null, null, '15px'],
        minHeight: ['auto', null, null, null, null, '50px'],
        '&.swiper-slide-thumb-active': {
          borderColor: 'primary',
        },
      },
      img: {
        borderRadius: '50%',
        width: '40px',
        display: 'block',
        marginLeft: ['auto', null, null, null, null, '0'],
        marginRight: ['auto', null, null, null, null, '0'],
        marginBottom: ['15px', null, null, null, null, '0'],
        position: ['relative', null, null, null, null, 'absolute'],
        top: ['auto', null, null, null, null, '50%'],
        left: ['auto', null, null, null, null, '10px'],
        mt: ['10px', null, null, null, null, 0],
        transform: [
          'translateY(0)',
          null,
          null,
          null,
          null,
          'translateY(calc(-50% + 8px))',
        ],
      },
      h3: {
        fontSize: ['18px', null, 2, null, 3],
        lineHeight: 1,
        color: 'black',
        display: ['block', null, 'block'],
      },
      span: {
        color: 'text',
        opacity: '0.8',
        fontSize: [15, null, '15px'],
        lineHeight: 1,
        display: 'block',
        // @ts-ignore
        display: ['block', null, 'block'],
        marginTop: '10px',
      },
    },
  },
  testimonialsContent: {
    margin: 0,
    fontSize: [2, null, 3, null, 4, '40px'],
    color: 'black',
    lineHeight: [2.3, null, 1.8],
    textAlign: 'center',
    fontFamily: 'special',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '820px',
    marginTop: ['0', null, null, null, null, '-15px'],
  },
};
