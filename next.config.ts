import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,

  output: "export", // ဒါက static files ထွက်လာအောင် လုပ်ပေးတာပါ
  images: {
    unoptimized: true, // GitHub Pages မှာ ပုံတွေပေါ်ဖို့ ဒါလိုအပ်ပါတယ်
  },
};

export default nextConfig;
