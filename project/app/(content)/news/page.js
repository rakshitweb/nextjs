import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;
