import React from 'react';
import { ThemeProvider, Grid, Image, Container, Box } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Team from 'sections/team';
import Mission from 'sections/mission';
import Covid from 'sections/covid';

import { keyframes } from '@emotion/core';
import bannerIcon5 from 'assets/banner-icon-1-5.svg';
import bannerIcon6 from 'assets/banner-icon-1-6.svg';
import bannerIcon7 from 'assets/dot-pattern.svg';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" />
          <Banner />
          <Covid />

          <Box sx={styles.services}>
            <Container sx={styles.container}>
              <Grid sx={styles.grid}>
                <Image
                  sx={styles.bannerIcon5}
                  className="bannerIcon"
                  alt="banner icon"
                  src={bannerIcon5}
                />
                <Image
                  sx={styles.bannerIcon6}
                  className="bannerIcon"
                  alt="banner icon"
                  src={bannerIcon6}
                />
                <Image
                  sx={styles.bannerIcon7}
                  className="bannerIcon"
                  alt="banner icon"
                  src={bannerIcon7}
                />
                <Services />
                <Mission />
              </Grid>
            </Container>
          </Box>
          <Team />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  container: {
    backgroundColor: '#F9FBFD',
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
  services: {
    backgroundColor: '#F9FBFD',
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr'],
  },
  bannerIcon1: {
    top: '10%',
    left: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: '10%',
    right: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%',
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%',
  },
};
