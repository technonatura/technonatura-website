import NextLink from 'next/link';
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import { HiOutlineChevronRight } from 'react-icons/hi';

export function NavLink({
  path,
  label,
  children,
  ...rest
}: {
  path: string;
  label?: string;
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className='nav-item'
      activeClass='active'
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({
  path,
  label,
  children,
  ...rest
}: {
  path: string;
  label?: string;
  children?: JSX.Element | JSX.Element[];
}) {
  if (path.startsWith('https')) {
    return (
      <A as='a' href={path} sx={styles.learnMore} {...rest}>
        <A {...rest}>{children ? children : label}</A>
      </A>
    );
  }

  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

export function LearnMore({
  path,
  label,
  children,
  ...rest
}: {
  path: string;
  label?: string;
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <NextLink href={path}>
      <A as='a' sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'} <HiOutlineChevronRight />
      </A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: 'primary',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
      ml: '3px',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
