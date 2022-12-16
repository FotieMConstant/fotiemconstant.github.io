/* eslint-disable max-len */
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>fotiecodes | Web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181818" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jrgarciadev" />
        <meta property="og:site_name" content="fotiecodes | Web developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="fotiecodes | Web developer" />
        <meta property="og:locale" content="en" />
        <meta property="og:url" content="https://fotiemconstant.github.io" />
        <meta
          name="description"
          content="Hello! I'm Fotie, a software developer based in Turkey, specializing in building exceptional web apps, occasionally designing, and everything in between."
        />
        <meta
          name="keywords"
          content="Developer, Open-source enthusiast, Open-source Africa, YouTuber, Programming, Javascript Mentor at Codementor Javascript, Freelancer, vuejs, vue3, PHP, Front-end Developer, Vue JS Developer, UI Designer"
        />
        <meta property="og:image" content="https://fotiemconstant.github.io/avatar.jpg" />
        <meta property="twitter:image" content="https://fotiemconstant.github.io/avatar.jpg" />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
