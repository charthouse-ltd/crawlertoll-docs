import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { dark: "github-dark", light: "github-light" },
          defaultLang: "ts",
          keepBackground: false,
        },
      ],
    ],
  },
});

const config: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(config);
