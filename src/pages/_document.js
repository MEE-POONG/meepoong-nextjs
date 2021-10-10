import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous"
          />
          <meta property="og:url" content="https://www.meepoong.com" />
          <meta property="og:url" content="https://www.meepoong.co.th" />

          <meta name="twitter:site" content="@meepoonggroup" />

          <meta property="fb:app_id" content="108066501318591" />
          <meta property="fb:pages" content="108066501318591" />
          <meta name="facebook-domain-verification" content="tyb9roc6tpgvz6btuuqarrakgvbiky" />
          <meta name="facebook-domain-verification" content="41vxrhwx8fexm6h92elgm2lrssbiv3" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <div id="fb-root"></div>

          <div id="fb-customer-chat" class="fb-customerchat"></div>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "108066501318591");
                chatbox.setAttribute("attribution", "biz_inbox");

                window.fbAsyncInit = function() {
                  FB.init({
                    xfbml            : true,
                    version          : 'v12.0'
                  });
                };

                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            `,
            }}
          />

      </body>
      </Html >
    );
  }
}

export default CustomDocument;
