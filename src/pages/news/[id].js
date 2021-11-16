import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout-link';
import BannerNewsDetail from 'sections/banner-news-detail';
import BlogDetail from 'sections/blog-detail';

import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

const NewsDetail = () => {
  const router = useRouter();

  const { id } = router.query;
  const { data } = useSWR(`/api/news/${id}`, fetcher);

  if (!data) {
    return 'Loading...';
  }

  const { key, title, description, image, detail } = data

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title={`${title} - NEWS | ข่าวสาร | BLOG - MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์ มีพุง จำกัด`} description={description} image={image} />
          <BannerNewsDetail title={title} />
          <BlogDetail title={title} description={description} detail={detail} image={image} key={key} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  )
}

export default NewsDetail