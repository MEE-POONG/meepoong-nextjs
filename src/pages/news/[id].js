import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout-link';
import BannerNewsDetail from 'sections/banner-news-detail';
import BlogDetail from 'sections/blog-detail';

import firebase from '../../firebase';
import _ from 'lodash';
const database = firebase.database();

const NewsDetail = ({ key, title, description, image, detail }) => {

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

NewsDetail.getInitialProps = async ({ query: { id } }) => {
  let data
  const blogsRef = database.ref('/blogs/' + id);
  blogsRef.on('value', (snapshot) => {
    data = snapshot.val();
  });
  return data
}

export default NewsDetail