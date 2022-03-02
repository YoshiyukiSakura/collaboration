import { NextSeo } from "next-seo";
import { spaceToSeoImageMap } from "../../frontedUtils/consts/spaces";

export default function Seo({ spaceId, title, desc }) {
  const seoLogoHash = spaceToSeoImageMap[spaceId];
  if (!seoLogoHash) {
    throw new Error(`No seo logo hash found for space ${spaceId}`);
  }
  const images = [
    {
      url: `https://ipfs.fleek.co/ipfs/${seoLogoHash}`,
      width: 1200,
      height: 628,
    },
  ];

  const finalTitle = title ?? `OpenSquare Off-Chain Voting`;
  return (
    <NextSeo
      title={finalTitle}
      description={desc}
      openGraph={{
        url: "https://www.opensquare.io/",
        title: finalTitle,
        description: desc,
        images,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}
