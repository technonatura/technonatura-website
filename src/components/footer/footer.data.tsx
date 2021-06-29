import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { IconType } from 'react-icons';

const FooterData: Array<{
  header: string;
  items: Array<{
    path: string;
    label: string;
    name?: string;
    icon?: IconType | JSX.Element;
  }>;
}> = [
  {
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },
  {
    header: 'Our Information',
    items: [
      {
        path: '/',
        label: 'Return Policy ',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'Terms & Conditions',
      },
      {
        path: '/',
        label: 'Site Map',
      },
    ],
  },
  {
    header: 'My Account',
    items: [
      {
        path: '/',
        label: 'Press inquiries',
      },
      {
        path: '/',
        label: 'Social media ',
      },
      {
        path: '/',
        label: 'directories',
      },
      {
        path: '/',
        label: 'Images & B-roll',
      },
    ],
  },
  {
    header: "Let's Connect",
    items: [
      {
        path: 'https://www.facebook.com/technonatura/',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: 'https://twitter.com/technonatura/',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: 'https://github.com/technonatura-org',
        label: 'Github',
        name: 'github',
        icon: <AiFillGithub />,
      },
      {
        path: 'https://instagram.com/technonatura',
        label: 'Instagram',
        name: 'instagram',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default FooterData;
