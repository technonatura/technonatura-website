import Image from 'next/image';
import { Link } from 'components/link';

export default function Logo() {
  return (
    <Link
      label='d'
      path='/'
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image
        src='https://www.technonatura.sch.id/sites/default/files/logo-trans-techno-2.png'
        alt='startup landing logo'
        width='182'
        height='80'
      />
    </Link>
  );
}
