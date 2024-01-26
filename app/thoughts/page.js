import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});

const BlogPage = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageLink={"Thoughts"} pageName={"Thoughts"} />
      <Blog />
    </GlitcheLayout>
  );
};
export default BlogPage;
