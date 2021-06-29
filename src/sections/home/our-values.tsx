import { Box, Container, Heading, Text, Image } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { RiCheckboxCircleFill } from 'react-icons/ri';

import styled from '@emotion/styled';

import { LearnMore } from 'components/links/link';

const tabImage1 =
  'https://startup-agency.vercel.app/_next/static/images/tab-illustration-1-570667a73cb6c4184e48c2a82f9da826.png';

const data = [
  {
    id: 1,
    tabTitle: 'Why you choose our service?',
    title: `We will turn your idea in the successful business model framework`,
    description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
  {
    id: 2,
    tabTitle: 'What’s our business promise?',
    title: `We will turn your idea in the successful business model framework`,
    description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
  {
    id: 3,
    tabTitle: 'What’s our role model plan?',
    title: `We will turn your idea in the successful business model framework`,
    description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
];

const WhyUs = () => {
  return <Box as='section' id='why-us'></Box>;
};

export default WhyUs;
