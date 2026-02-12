import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `@use "@/css/mixins.scss" as mixins;`,
  },
};

export default nextConfig;
