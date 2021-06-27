import NextjsImage from 'next/image';
export default function Image({ src, ...rest }) {
  return <NextjsImage src={src} {...rest} />;
}
