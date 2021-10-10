import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

const BlockTitle = ({ title, text }) => {
  return (
    <Box sx={styles.blockTitle} className="blockTitle">
      <Heading as="h3">{title}</Heading>
      <Text as="p">{text}</Text>
    </Box>
  );
};

export default BlockTitle;

const styles = {
  blockTitle: {
    textAlign: 'center',
    mb: ['60px', null, null, null, '60px', null, '80px'],
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, '30px'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1,
      mb: '20px',
      background: 'linear-gradient(120deg,#1c99fe 20.69%,#7644ff 50.19%,#fd4766 79.69%)',
      filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="var(--color-primary)",endColorstr="var(--color-secondary)",GradientType=1)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      display: 'inline-block',
    },
    p: {
      lineHeight: 1.3,
      fontSize: '23px',
      color: '#858B91',
    },
  },
};
