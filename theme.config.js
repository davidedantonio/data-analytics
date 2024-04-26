const theme = {
  titleSuffix: " | Data Analytics",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/lydiahallie/javascript-react-patterns",
  projectLink: "https://github.com/lydiahallie/javascript-react-patterns",
  logo: () => (
    <>
      <img
        src="/logo.png"
        width={200}
        style={{ marginRight: "1em" }}
      />
      <h1>
        BI & Data Analytics <span style={{ opacity: 0.2 }} />
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.ico"
        />
        <link rel="mask-icon" href="/logo.ico" color="#000000" />
        <link rel="shortcut icon" href="/logo.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Sito creato per la lezione di Business Intelligence e data Analytics: principi e definizioni"
        />
        <meta
          name="description"
          content="Sito creato per la lezione di Business Intelligence e data Analytics: principi e definizioni"
        />
        <meta name="author" content="Davide D'Antonio" />
        <meta
          property="og:url"
          content="https://javascriptpatterns.vercel.app/patterns"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content={`${props.title} | BI & Data Analytics`}
        />
        <meta
          property="og:description"
          content="Sito creato per la lezione di Business Intelligence e data Analytics: principi e definizioni"
        />
        <meta
          property="og:image"
          content="https://javascriptpatterns.vercel.app/ogimage1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lydiahallie" />
        <meta name="twitter:creator" content="@lydiahallie" />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © Davide D'Antonio. All rights reserved.`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
