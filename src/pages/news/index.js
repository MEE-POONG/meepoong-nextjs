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
          <SEO title="NEWS - ME PROMPT TECHNOLOGY รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" image="https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/assets%2FScreen%20Shot%202564-10-10%20at%2015.01.42.png?alt=media&token=dfdab32b-43c6-4b3f-878d-5ccee29305f3" />
          <BannerNews />
          <Blog />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
