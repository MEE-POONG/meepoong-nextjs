import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';

import dayjs from "dayjs";
import 'dayjs/locale/th'

const Covid = () => {
  const [COVID_DATA, SET_COVID_DATA] = useState([])
  const [todayCovid, setTodayCovid] = useState({
    cases: 736522,
    deaths: 6066,
    DevBy: "https://corona.lmao.ninja/v2/countries/TH",
    active: 213444,
    todayCases: 21838,
    todayDeaths: 212,
    NewHospitalized: 518,
    todayRecovered: 21108,
    recovered: 517012,
    updated: "1629382499758"
  })
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/countries/TH").then(e => e.json()).then(e => {
      setTodayCovid(e)

      SET_COVID_DATA([
        {
          // icon: <MdPersonAdd />,
          image: serviceImage1,
          heading: `ติดเชื้อ : ${currencyFormat(e.todayCases)}`,
          text: `(สะสม ${currencyFormat(e.cases)})`
        },
        {
          // icon: <GiHomeGarage />,
          image: serviceImage2,
          heading: `หายแล้ว : ${currencyFormat(e.recovered)}`,
          text: `(เพิ่มขึ้น ${currencyFormat(e.todayRecovered)})`
        },
        {
          // icon: <MdLocalHospital />,
          image: serviceImage3,
          heading: `รักษาอยู่ : ${currencyFormat(e.active)}`,
          text: <span>&nbsp;</span>
        },
        {
          // icon: <BiGhost />,
          image: serviceImage4,
          heading: `เสียชีวิต : ${currencyFormat(e.todayDeaths)} `,
          text: `(สะสม ${currencyFormat(e.deaths)} )`
        },
      ]);
    })
  }, [])


  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <Box as="section" id="covid" sx={styles.services}>
      <Container>
        {/* <div sx={styles.handler} style={{ marginBottom: '200px' }} /> */}
        <BlockTitle
          title="อัพเดทสถานการณ์ COVID-19"
          text={`อัพเดทขัอมูลล่าสุด : ${dayjs(todayCovid.updated).locale('th').format('วันddd ที่ D เดือนMMMM ค.ศ.YYYY เวลา HH:mm นาที')}`}
        />
        <Grid sx={styles.grid}>
          {COVID_DATA.map(({ image, text, heading }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              key={index}
            />
          ))}
        </Grid>
        {/* <div sx={styles.handler} style={{ marginBottom: '200px' }} /> */}
      </Container>
    </Box>
  );
};

export default Covid;

const styles = {
  handler: {
    '@media screen and (max-width: 960px)': {
      display: 'none',
    },
  },
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr 1fr'],
  },
};
