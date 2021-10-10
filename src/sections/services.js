import React from 'react';
import { Box, Container, Image } from 'theme-ui';
import BlockTitle from 'components/block-title';

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container sx={styles.container}>

        <BlockTitle
          title="WHO ARE WE?"
          text="เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต"
        />
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
  services: {
    backgroundColor: '#F9FBFD',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
