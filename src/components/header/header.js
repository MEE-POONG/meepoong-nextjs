import { jsx, Container, Flex } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import Logo from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobileDrawer';
import menuItems from './header.data';
import logoDark from 'assets/logo3.png';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo image={logoDark} width="65px" />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label, link }, i) => (
              link ? <Link
                path={path}
                sx={styles.nav.navLink}
                passHref={true}
                ml={2}
                label={label} /> : <ScrollLink
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
          </Flex>

          <Link
            path="https://www.facebook.com/meepoong/"
            passHref={true}
            ml={2}
            label="ติดต่อเรา"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#ffffff',
    padding: '6.5px 24px',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
      color: '#fff',
    },
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',

    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between',
    },
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none',
    },
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
