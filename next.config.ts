import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone", // node_modules 최소화
  sassOptions: {
    additionalData: `@use "@/css/mixins.scss" as mixins;`,
  },
};

export default nextConfig;
