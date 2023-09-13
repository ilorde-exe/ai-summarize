import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

const Content = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllAritcles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllAritcles(articlesFromLocalStorage);
    }
  }, []);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllAritcles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      console.log(newArticle);
    }
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src="src\assets\link.svg"
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            value={article.url}
            placeholder="Enter the url of the article..."
            required
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer"
          />
          <button
            type="submit"
            className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↲
          </button>
        </form>

        {/* Previous links to other summaries */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer">
                <img
                  src="src\assets\copy.svg"
                  alt="copy_img"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>

        {/* Display Summary */}
        <div className="my-10 max-w-full justify-center items-center">
          {isFetching ? (
            <img
              src="src\assets\loader.svg"
              alt="loading..."
              className="w-20 h-20 object-contain"
            />
          ) : error ? (
            <p className="font-inter font-bold text-black text-center">
              Well we seem to be having some trouble...
              <br />
              <span className="font-satoshi font-normal text-gray-700">
                {error?.data?.error}
              </span>
            </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2>
                  Article
                  <span className="pr-2 font-satoshi font-bold text-xl text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text">
                    Summary
                  </span>
                </h2>
                <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
                  <p className="font-inter font-medium text-sm text-gray-700">
                    {article.summary}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
