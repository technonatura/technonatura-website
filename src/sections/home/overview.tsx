import { useState } from 'react';
import {
  jsx,
  Box,
  Container,
  Button,
  ThemeUIStyleObject,
  Image,
} from 'theme-ui';

import NextjsImage from 'next/image';

import SectionHeading from 'components/pages/home/overview/section-heading';
import { LearnMore } from '@/components/links/link';
import videoBanner from 'assets/images/banner-bg.jpg';
import Play from 'assets/images/icons/play.png';
import Modal, { CloseButton } from 'components/modal/overviewSchoolVideoModal';
import ResponsiveIframe from 'components/responsive-iframe';

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        as='section'
        sx={{
          marginBottom: '250px',
        }}
        variant='section.introVideo'
      >
        <Container>
          <SectionHeading
            // @ts-ignore
            sx={styles.heading}
            title='Seperti Apa Sih Sebenarnya Sekolah di TechnoNatura?'
            description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          />
          <Box
            // @ts-ignore
            sx={styles.explore}
          >
            <LearnMore path='/virtual/tour' label='Explore Virtual Tour' />
          </Box>
          <Box
            // @ts-ignore
            sx={styles.videoWrapper}
          >
            <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen}>
              <CloseButton onClick={() => setIsOpen(false)} size='24px' />
              <ResponsiveIframe
                src='https://www.youtube.com/embed/RKqhA_gZ1Sg'
                // @ts-ignore
                allow='autoplay; fullscreen'
                allowFullScreen
              />
            </Modal>
            {/* @ts-ignore */}
            <Image
              src='http://i3.ytimg.com/vi/RKqhA_gZ1Sg/maxresdefault.jpg'
              className='video-banner'
              alt='video banner'
            />
            <Button
              variant='text'
              // @ts-ignore
              sx={styles.playPause}
              onClick={() => setIsOpen(true)}
            >
              <NextjsImage src={Play} alt='play' /> <p>Watch Full video</p>
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default IntroVideo;

const styles: ThemeUIStyleObject = {
  heading: {
    width: '100%',
    padding: ['0px 0px', '0px 20px', '0px 20px', '0px 80px', '0px 200px'],
    textAlign: ['center'],
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  explore: {
    textAlign: ['center'],
    mb: '100px',
  },
  videoWrapper: {
    margin: ['20px 0px', '20px 0px', '20px 0px', '20px 0px', '10px auto'],
    textAlign: 'center',
    position: 'relative',
    height: ['100%', '100%', '100%', '100%', '600px'],
    width: ['100%', '100%', '100%', '100%', '100%'],

    overflow: 'hidden',
    '.video-banner': {
      width: '100%',
      height: '100%',

      filter: 'brightness(0.7)',
      transition: '300ms',
      ':hover': {
        transform: 'scale(1.1)',
      },
    },
  },
  playPause: {
    color: 'white',

    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 40, 40, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    p: {
      ml: '16px',
    },
  },
};
