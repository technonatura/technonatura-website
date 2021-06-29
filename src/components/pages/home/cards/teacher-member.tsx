import { jsx, Flex, Box, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

import Image from 'next/image';

const TeamMember = ({
  member,
}: {
  member: {
    name: string;
    avatar: string;
    designation: string;
    socialLinks?: Array<{ name: string; link: string }>;
  };
}) => {
  return (
    <Box>
      <Flex as='figure' sx={styles.avatar}>
        <Image
          width={450}
          height={450}
          src={member?.avatar}
          alt={member?.name}
        />
      </Flex>
      <Box
        // @ts-ignore
        sx={styles.about}
      >
        <Heading as='h3'>{member?.name}</Heading>
        <Text as='p'>{member?.designation}</Text>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social: any, index: any) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaTwitter size='18px' color='#55ACEE' />
              )}
              {social?.name === 'github' && (
                <FaGithub size='18px' color='#161614' />
              )}
              {social?.name === 'dribbble' && (
                <FaDribbble
                  size='18px'
                  color='#B2215A'
                  style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                />
              )}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
