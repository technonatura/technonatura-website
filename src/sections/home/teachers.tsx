import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/pages/home/teachers/section-heading';
import TeamMember from 'components/pages/home/cards/teacher-member';

import arrowRight from 'assets/images/icons/arrow.svg';
import kRiza from 'assets/images/teachers/rizaWahono.webp';
import kArie from 'assets/images/teachers/arie-nurul-hatta.webp';
import kHastinMelurMaharti from 'assets/images/teachers/hastin-melur-maharti.webp';

//arie-nurul-hatta.webp
SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: kRiza,
    name: 'RIZA WAHONO',
    designation: 'Principal',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 2,
    avatar: kArie,
    name: 'ARIE NURUL HATTA',
    designation: 'Kepala Madrasah Tsanawiyah',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 3,
    avatar: kHastinMelurMaharti,
    name: 'HASTIN MELUR MAHARTI',
    designation: 'Kepala Madrasah Ibtidaiyah',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 4,
    avatar:
      'https://www.technonatura.sch.id/sites/default/files/2020-08/tras-pas-foto.jpg',
    name: 'TRAS RUSTAMAJI',
    designation: 'Kepala Madrasah Aliyah',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 5,
    avatar:
      'https://www.technonatura.sch.id/sites/default/files/2020-08/Kak%20Ifan.png',
    name: 'KAK IFAN',
    designation: 'Laboran',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  // @ts-ignore
  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    // @ts-ignore
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      // @ts-ignore
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    // @ts-ignore
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      // @ts-ignore
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      // @ts-ignore
      left: containerRef.current.offsetLeft,
      // @ts-ignore
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as='section' id='teachers' sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          // @ts-ignore
          sx={styles.heading}
          title='Tenaga Pendidik'
          description='Tenaga Pendidik memegang peranan utama dalam suatu institusi pendidikan, Madrasah TechnoNatura bukan pengecualian. Oleh karena itu, proses perencanaan dan perekrutan menjadi sangat penting untuk menghasilkan pendidik yang berkualitas. Tenaga pendidik di TechnoNatura diisi oleh orang-orang muda yang memiliki idealisme terhadap kualitas generasi yang akan datang.'
        />
      </Container>
      <Box
        // @ts-ignore
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className='swiper-arrow swiper-arrow-left'
          >
            <Image src={arrowRight} alt='arrow left' />
          </button>
        )}
        {!isEnd && (
          <button
            className='swiper-arrow swiper-arrow-right'
            onClick={handleNext}
          >
            <Image src={arrowRight} alt='arrow right' />
          </button>
        )}

        <Swiper
          // @ts-ignore
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              {/* @ts-ignore */}
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: 20,
    pb: [100, 80, 80, 80, 100, 140],
    backgroundColor: '#F9FBFD',
  },
  heading: {
    h2: {
      fontSize: '45px',
      textAlign: 'center',
    },
    p: {
      maxWidth: 900,
      m: '10px auto 60px auto',
      textAlign: 'center',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
