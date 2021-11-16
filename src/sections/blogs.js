import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

const masonryOptions = {
  transitionDuration: 0,
};


const Blogs = () => {
  const { data } = useSWR(`/api/news`, fetcher);

  if (!data) {
    return <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular blog post we updated"
          text="Updete newsfeed blog"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          Loading...
        </Box>
      </Container>
    </Box>;
  }
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular blog post we updated"
          text="Updete newsfeed blog"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {data.map(
            ({ image, title, description, path, key }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={'/news/' + key}
                linkLabel={'ดูเพิ่มเติม'}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
