import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from 'sections/home/header';
import FeaturedSpace from 'sections/home/featured-space';
import SchoolGrades from 'sections/home/schoolGrades';

export default function Home() {
  return (
    <>
      <Banner />
      <SchoolGrades />
      <FeaturedSpace />
    </>
  );
}
