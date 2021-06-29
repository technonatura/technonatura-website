import {
  Heading,
  Box,
  Flex,
  Text,
  Container,
  ThemeUIStyleObject,
  Image,
} from 'theme-ui';

import Select, { components } from 'react-select';

import { Link } from '@/components/links/link';
import Logo from 'components/logo';

import menuItems from './footer.data';

import CallToAction from 'components/CTAs/contactCTA';

import UK_FLAG from 'assets/images/icons/UK-Flag.svg';
import ID_FLAG from 'assets/images/icons/ID-Flag.svg';

const navItems = [
  {
    id: 1,
    link: '#!',
    title: 'Home',
  },
  {
    id: 2,
    link: '#!',
    title: 'Advertise',
  },
  {
    id: 3,
    link: '#!',
    title: 'Supports',
  },
  {
    id: 4,
    link: '#!',
    title: 'Marketing',
  },
  {
    id: 5,
    link: '#!',
    title: 'FAQ',
  },
];

const Placeholder = (props: any) => {
  return <components.Placeholder id='hey' {...props} />;
};

export default function Footer() {
  return (
    <>
      <footer
        // @ts-ignore
        sx={styles.footer}
        style={{ background: '#F4F6F9', marginTop: '100px' }}
      >
        <CallToAction />
        <Container sx={styles.footer.container}>
          <Box
            // @ts-ignore
            sx={styles.footer.footerTopArea}
          >
            <Box
              // @ts-ignore
              sx={styles.copyrightArea}
            >
              <Box className='footer__logo'>
                <Logo />
              </Box>
              <Select
                className='select-language'
                isSearchable={false}
                closeMenuOnSelect={false}
                components={{ Placeholder }}
                placeholder={'Language'}
                styles={{
                  placeholder: (base) => ({
                    ...base,
                    fontSize: '1em',
                    fontWeight: 400,
                  }),
                }}
                defaultValue={{
                  label: (
                    <Box>
                      <Image src={ID_FLAG}></Image> Bahasa
                    </Box>
                  ),
                  value: 'bahasa',
                }}
                options={[
                  {
                    label: (
                      <Box>
                        <Image src={ID_FLAG}></Image> Bahasa
                      </Box>
                    ),
                    value: 'bahasa',
                  },
                  {
                    label: (
                      <Box>
                        <Image src={UK_FLAG}></Image> EN-GB
                      </Box>
                    ),
                    value: 'en-gb',
                  },
                ]}
              />
              <nav className='footer__menu'>
                <Link path='/' label='Terms of use' />
                <Link path='/' label='Privacy' />
              </nav>
              <Text as='p' sx={styles.copyrightArea.copyright}>
                © 2021 All right reserved - Design & Developed by lvl 7 students
              </Text>
            </Box>
            <Flex
              // @ts-ignore
              sx={styles.footer.menuArea}
            >
              {menuItems &&
                menuItems.map(({ header, items }, i) => (
                  <Box
                    // @ts-ignore
                    sx={styles.footer.menus}
                    key={i}
                  >
                    <Heading sx={styles.footer.heading}>{header}</Heading>
                    <nav>
                      {
                        // @ts-ignore
                        items.map(({ path, label, name, icon }, i) => (
                          <Link
                            // @ts-ignore
                            className={name ? name : ''}
                            path={path}
                            key={i}
                            sx={styles.footer.link}
                          >
                            <>
                              {icon && icon}
                              {label}
                            </>
                          </Link>
                        ))
                      }
                    </nav>
                  </Box>
                ))}
            </Flex>
          </Box>
        </Container>
      </footer>
    </>
  );
}

const styles = {
  footer: {
    backgroundColor: 'background_secondary',
    container: {
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      display: 'flex',
      flexWrap: 'wrap',
      pb: [7, null, null, null, '30px'],
      pl: [0, null, 4, 6, null, 7],
      pr: [0, null, 4, 6],
    },
    menuArea: {
      width: [
        '100%',
        null,
        null,
        null,
        'calc(100% - 250px)',
        'calc(100% - 300px)',
      ],
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      pb: 3,
    },
    menus: {
      display: 'flex',
      flexDirection: 'column',
      mb: ['45px', null, null, '50px', '60px'],
      pr: 3,
      width: ['50%', null, null, '25%'],
    },

    heading: {
      fontSize: [2, 3],
      color: 'heading',
      fontWeight: 'heading',
      litterSpacing: 'heading',
      mb: [4, null, null, null, 5, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', 1],
      color: 'text_secondary',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.9],
      svg: {
        width: '18px',
        mr: 2,
        fontSize: 2,
        flexShrink: 0,
      },
      '&.facebook > svg': {
        color: '#3B5998',
      },
      '&.twitter > svg': {
        color: '#55ACEE',
      },
      '&.github > svg': {
        color: '#161614',
      },
      '&.instagram > svg': {
        color: '#E74D89',
      },
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
  },
  copyrightArea: {
    width: ['100%', null, null, null, '250px', '300px'],
    flexShrink: 0,
    order: [2, null, null, null, 0],
    textAlign: ['center', null, null, null, 'left'],
    '.footer__logo': {
      a: {
        mr: 0,
        img: {
          mx: ['auto', null, null, null, 0],
        },
      },
    },
    '.footer__menu': {
      display: 'flex',
      justifyContent: ['center', null, null, null, 'flex-start'],
      flexWrap: 'wrap',
      mt: [3, null, null, null, 4],
      a: {
        fontSize: ['14px', 1],
        color: 'text_secondary',
        fontWeight: 'body',
        mb: 1,
        cursor: 'pointer',
        transition: 'all 0.35s',
        textDecoration: 'none',
        lineHeight: [1.5, null, 1.9],
        ':before': {
          px: 2,
          content: '"|"',
          color: 'text_secondary',
        },
        ':first-of-type:before': {
          display: 'none',
        },
        ':hover': {
          color: 'primary',
        },
      },
    },
    '.select-language': {
      width: [
        '100% !important',
        '100% !important',
        '100% !important',
        '100% !important',
        '80% !important',
      ],
      img: {
        position: 'relative',
        top: '5px',
      },
    },
    copyright: {
      fontSize: ['14px', 1],
      color: '#6D7886',
      pt: 1,
    },
  },
};
