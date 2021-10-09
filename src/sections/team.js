import React from 'react';
import { Box, Container, Image } from 'theme-ui';
import BlockTitle from 'components/block-title';
import { keyframes } from '@emotion/core';
import bannerIcon1 from 'assets/banner-icon-1-1.svg';
import bannerIcon2 from 'assets/banner-icon-1-2.svg';
import bannerIcon3 from 'assets/banner-icon-1-3.svg';
import bannerIcon4 from 'assets/banner-icon-1-4.svg';
import bannerIcon5 from 'assets/banner-icon-1-5.svg';
import bannerIcon6 from 'assets/banner-icon-1-6.svg';
import bannerIcon7 from 'assets/dot-pattern.svg';

const TEAM_DATA = [
  {
    url: 'https://www.facebook.com/devilzeros',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/team%2F20988300_1705363422858434_6524213264425628365_o_adobespark%20(1).jpeg?alt=media&token=53fcdebf-f8c3-4891-87d2-328961de3baa',
    title: 'ณัฐวีษ์ ตันตระกูล',
    designation: 'Full Stack Developer',
  },
  {
    url: 'https://www.facebook.com/ItmeTaTa',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/team%2FIMG_2697_adobespark.png?alt=media&token=c2ec9ea7-1819-4004-9134-7beba99564ae',
    title: 'สุนัยนา ไชยพาน',
    designation: 'Full Stack Developer',
  },
  {
    url: 'https://www.facebook.com/ningnong.yuranan',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/team%2F238620174_2216832911790235_1037787705840527436_n_adobespark.jpeg?alt=media&token=715e0ff5-ab88-47f4-8727-95397da9d39c',
    title: 'ยุรนันท์ ประจวบสุข',
    designation: 'Head of YouTube Video Production',
  },
  {
    url: 'https://www.facebook.com/Chef.Anchisa',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/team%2F20210709_002741_602_adobespark.jpeg?alt=media&token=979312f6-dcfc-41d7-a5c4-5d118c0a3574',
    title: 'อัญชิสา เพียรการ',
    designation: 'Head of Marketing',
  },
  {
    url: 'https://www.facebook.com/warp.rungpraw',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/team%2FDA0A1DCA-4A80-40F2-9120-126ACC3AF701_adobespark.jpeg?alt=media&token=e38347da-b638-4e4d-a909-a9a07dfee7de',
    title: 'รุ้งแพรว ผิวสอาด',
    designation: 'Marketing',
  },
  {
    url: 'https://www.facebook.com/areena.mm',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/team%2F241466455_4337642849658083_8598287672351657998_n_adobespark.jpeg?alt=media&token=72bba4f1-def4-4e10-9611-7b11f79820f0',
    title: 'ศศิประภา โหมดใหม่',
    designation: 'Creative and Graphic Designer',
  },
]

const Team = () => {
  return (
    <Box as="section" id="team" sx={styles.services}>
      <Container sx={styles.container}>
        <Image
          sx={styles.bannerIcon1}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon1}
        />
        <Image
          sx={styles.bannerIcon2}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon2}
        />
        <Image
          sx={styles.bannerIcon3}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon3}
        />
        <Image
          sx={styles.bannerIcon4}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon4}
        />
        <Image
          sx={styles.bannerIcon5}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon5}
        />
        <Image
          sx={styles.bannerIcon6}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon6}
        />
        <Image
          sx={styles.bannerIcon7}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon7}
        />

        <BlockTitle
          title="Our Team Member"
          text="พวกเราเป็นของคนรุ่นใหม่ที่ มุ่งเน้นการพัฒนาระบบซอฟท์แวร์ การออกแบบความรู้การตลาดออนไลน์ และบริการเว็บไซต์ครบวงจร เรามุ่งมั่น ค้นคว้า วิจัย เทคโนโลยีใหม่ๆ เพื่อพัฒนาบริการของเราให้เกิดผลลัพธ์ที่ดีให้กับลูกค้า ด้วยทีมงานรุ่นใหม่ เราตั้งใจทำงานหนัก เพื่อสร้างความมั่นใจให้ท่าน ว่าท่านจะได้รับบริการ ที่เหนือความคาดหมาย"
        />


        <div class="container">
          {TEAM_DATA.map((val, i) => (
            <div class="card">
              <div class="imgBx">
                <img
                  src={val.imageUrl}
                  alt=""
                />
              </div>
              <div class="content">
                <div class="contentBx">
                  <h3>{val.title} <br /><span>{val.designation}</span></h3>
                </div>
                <ul class="sci">
                  <li Style="--i: 1">
                    <a href={val.url}><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  </li>
                  <li Style="--i: 2">
                    <a href={val.url}><i class="fa fa-github" aria-hidden="true"></i></a>
                  </li>
                  <li Style="--i: 3">
                    <a href={val.url}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Box>
  );
};

export default Team;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

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
  bannerIcon1: {
    top: '10%',
    left: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: '10%',
    right: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%',
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%',
  },
};
