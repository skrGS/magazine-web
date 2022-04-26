import React from "react";
import { Helmet } from "react-helmet";
const HeadTags = (props) => {
  const {
    title = "Portfolio - your name",
    metaDescription = "defaul tdescription",
    image = "gs25.png",
  } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" key="description" content={metaDescription} />
      <meta name="title" key="title" content={title} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content={metaDescription}
      />
      <meta
        property="og:image"
        key="og:image"
        content={`https://novelistgroup.com/upload/${image}`}
      />
    </Helmet>
  );
};

export default HeadTags;
