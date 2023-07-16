const title = "Snippetify - Code Snippets and Color Generator";
const description = "Get code snippets and generate colors with Snippetify, the ultimate resource for developers and designers.";
const canonical = "https://www.snippetify.com";

const SEO = {
  title,
  description,
  canonical,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: canonical,
    title,
    description,
    images: [
      {
        url: "https://www.snippetify.com/images/your-image.jpg",
        alt: "Snippetify - Code Snippets and Color Generator",
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@snippetify",
    site: "@snippetify",
    cardType: "summary_large_image",
  },
};

export default SEO;
