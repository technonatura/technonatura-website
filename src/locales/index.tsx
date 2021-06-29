import { Box, Image } from 'theme-ui';

import UK_FLAG from 'assets/images/icons/UK-Flag.svg';
import ID_FLAG from 'assets/images/icons/ID-Flag.svg';

const locales: Array<{ label: JSX.Element; value: string }> = [
  {
    label: (
      <Box>
        <Image src={ID_FLAG}></Image> Bahasa
      </Box>
    ),
    value: 'id',
  },
  {
    label: (
      <Box>
        <Image src={UK_FLAG}></Image> EN-GB
      </Box>
    ),
    value: 'en-GB',
  },
];

export { locales };
