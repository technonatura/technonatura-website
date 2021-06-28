'use strict';
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// // const {
// //   monthConversion,
// //   dayConversion,
// //   timeConversion,
// // } = require('./utils/timeconversion');
// const getDate = new Date();

const NODE_ENV = process.env.NODE_ENV;
const dualENV = {
  production: {
    PUBLIC_URL: 'https://dashboard.mts-technonatura.vercel.app',
  },
  development: {
    PUBLIC_URL: 'http://localhost:3000',
  },
  signup: process.env.NEXT_PUBLIC_SIGNUP_API,
};

const env = {
  ...dualENV[NODE_ENV],
  isProduction: NODE_ENV === 'production',
};

// next.js configuration
const nextConfig = {
  images: {
    domains: ['www.technonatura.sch.id', 'i3.ytimg.com'],
  },
  pageExtensions: [
    'page.js',
    'page.tsx',
    'tsx',
    'page.jsx',
    'cpage.tsx',
    'api.js',
    'api.ts',
    '_app.js',
    '_document.js',
  ],
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'If-Modified-Since',
  //           value: `${dayConversion(
  //             getDate.getDay(),
  //           )}, ${getDate.getDate()} ${monthConversion(
  //             getDate.getMonth(),
  //           )} ${getDate.getFullYear()} ${timeConversion(
  //             getDate.getHours(),
  //           )}:${timeConversion(getDate.getMinutes())}:${timeConversion(
  //             getDate.getSeconds(),
  //           )} GMT`, // <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since
  //         },
  //       ],
  //     },
  //   ];
  // },
  async redirects() {
    return [
      {
        source: '/dev',
        destination: 'https://dev.technonatura.vercel.app',
        permanent: true,
      },

      {
        source: '/github',
        destination: 'https://github.com/mts-technonatura',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // if (isServer) {
    //   require('./utils/sitemap-robots-generator')(env.PUBLIC_URL);
    // }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  env,
};

const plugins = [
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
      },
    },
  ],
];

module.exports = withPlugins([...plugins], nextConfig);
