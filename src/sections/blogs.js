import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import firebase from '../firebase';
import _ from 'lodash';
const database = firebase.database();

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = ({ data }) => {
  const blogsRef = database.ref('/blogs');
  const [newsList, setNewsList] = React.useState([])
  React.useEffect(() => {
    blogsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      let messagesVal = data;
      let messages = _(messagesVal)
        .keys()
        .map(messageKey => {
          let cloned = _.clone(messagesVal[messageKey]);
          cloned.key = messageKey;
          return cloned;
        }).value();
      setNewsList(messages)
    });
    // eslint-disable-next-line
  }, [])

  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Popular blog post we updated"
          text="Updete newsfeed blog"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {newsList.map(
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
