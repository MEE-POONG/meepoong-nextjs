import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout-link';
import BannerNews from 'sections/banner-news';
import Blog from 'sections/blogs';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="NEWS - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" image="" />
          <BannerNews />
          <Blog />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
