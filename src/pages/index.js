import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Team from 'sections/team';
import Mission from 'sections/mission';
import Covid from 'sections/covid';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์" />
          <Banner />
          <Covid />
          <Services />
          <Mission />
          <Team />
          {/* <Jackpot />
          <CallToAction />
          <Featured />
          <Pricing />
          <Testimonials />
          <Blogs />
          <FAQ />
          <Subscribe /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
