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
        path: '/page/yayasan-CREATE',
        label: 'Yayasan CREATE',
      },
      {
        path: '/page/yayasan-CREATE',
        label: 'Visi dan Misi',
      },
      {
        path: '/page/yayasan-CREATE',
        label: 'Kurikulum',
      },
      {
        path: '/about',
        label: 'About Us',
      },

      {
        path: '/teachers',
        label: 'Teachers',
      },
    ],
  },
  {
    header: 'Our Information',
    items: [
      {
        path: '/blog',
        label: 'Blog',
      },
      {
        path: '/news',
        label: 'News',
      },
      {
        path: '/',
        label: 'Site Map',
      },
      {
        path: '/help',
        label: 'Support Center',
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
