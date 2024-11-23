import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailImage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find(({ slug: newsSlug }) => newsSlug === slug);
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
