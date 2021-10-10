import React from 'react';
import { Container, Box, Image } from 'theme-ui';
import BlockTitle from 'components/block-news-title';

import _ from 'lodash';
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';

import Editor from '@react-page/editor';
import slate from '@react-page/plugins-slate';
import pluginsImages from '@react-page/plugins-image';

const cellPlugins = [slate(), pluginsImages];

const Blogs = ({ key, title, image, detail, description }) => {

  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <Box sx={styles.boxImage}>
          <Image
            width="500px"
            alt={title}
            src={image}
          />
        </Box>
        <BlockTitle
          title={title}
        />
        <Editor
          id="detail"
          name="detail"
          placeholder="เนื้อหา"
          cellPlugins={cellPlugins}
          value={detail}
          readOnly
        />
        <FacebookShareButton
          url={"www.meepoong.com/blog-details/" + key}
          quote={`${title}\n${description}`}
          hashtag="#Meepoong"
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  boxImage: {
    textAlign: 'center',
    pb: '100px',
  },
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
