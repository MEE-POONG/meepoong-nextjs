/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Container } from 'theme-ui';
// import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';

import Logo from 'components/logo';
import logoLight from 'assets/logo3.png';
import menuItems from '../header/header.data';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: ['column', null, null, null, null, 'row'],
          }}
        >
          <Logo image={logoLight} width="50px" />
          <Text
            as="p"
            sx={{
              color: '#ffffff',
              opacity: '0.7',
              fontSize: '14px',
              pl: '10px',
              mt: ['10px', null, null, null, null, '0'],
            }}
          >
            Copyright by {new Date().getFullYear()} MEE POONG CO., LTD.
          </Text>
        </Box>
        <Box sx={styles.linksWrap}>
          {/* {menuItems.map(({ path, label }, i) => (
            <Link key={i} path={path}>{label}</Link>
          ))} */}{menuItems.map(({ path, label }, i) => (
            <ScrollLink
              activeClass="active"
              sx={styles.nav.navLink}
              to={path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {label}
            </ScrollLink>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#020718',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      opacity: '0.05',
    },
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
  },
  linksWrap: {
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': { opacity: 0.7 },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
  },
  nav: {
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        background: 'linear-gradient(120deg,#1c99fe 20.69%,#7644ff 50.19%,#fd4766 79.69%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="var(--color-primary)",endColorstr="var(--color-secondary)",GradientType=1)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        display: 'inline-block',
      },
    },
  },
};
