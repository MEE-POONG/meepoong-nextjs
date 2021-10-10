import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Coder | Designer | Thinker | Blogger | Marketer',
  author = 'MEEPOONG CO., LTD.',
  image = 'https://firebasestorage.googleapis.com/v0/b/meepoong-af0cc.appspot.com/o/assets%2FScreen%20Shot%202564-10-10%20at%2012.35.41.png?alt=media&token=a36f1f19-4d55-4643-be70-653af811d175',
  meta,
  title = 'MEE POONG GROUP รับเขียนโปรแกรม เว็บไซต์ แอพพลิเคชัน และกราฟิกดีไซน์',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `og:image`,
      content: image,
    },
    {
      name: `twitter:image`,
      content: image,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `th`,
  meta: [],
  description: ``,
};
