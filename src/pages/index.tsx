import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import Banner from 'sections/home/header';
import FeaturedSpace from 'sections/home/featured-space';
import SchoolGrades from 'sections/home/schoolGrades';
import SchoolGallery from 'sections/home/gallery';
import SchoolOverview from 'sections/home/overview';
import SchoolAchievements from 'sections/home/Achievements';
import PeopleThoughts from 'sections/home/PeopleThoughts';
import Teachers from 'sections/home/teachers';
import OurValues from 'sections/home/our-values';
import LatestBlogPost from 'sections/home/Blog-Post-List';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title='Home | Madrasah TechnoNatura'
        description='MADRASAH TECHNONATURA : ALTERNATIVE SCHOOL THAT EXERCISE STEAM EDUCATION.'
        canonical='https://www.technonatura.vercel.app/'
        openGraph={{
          url: 'https://www.technonatura.vercel.app/',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'Madrasah Technonatura',
        }}
      />
      <Banner />
      <SchoolGrades />
      <section id='gallery'>
        <FeaturedSpace />
        <SchoolGallery />
        <SchoolOverview />
      </section>
      <PeopleThoughts />

      <SchoolAchievements />
      <Teachers />
      <OurValues />
      <LatestBlogPost />
    </>
  );
}
