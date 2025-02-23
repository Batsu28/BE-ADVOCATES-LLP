import { Link } from "react-router-dom";
import CustomLink from "../components/common/link";

const Error = () => {
  const is404 = true;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-9xl font-bold text-gray-900 mb-4">
          {is404 ? "404" : "Уучлаарай"}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {is404 ? "Хуудас олдсонгүй" : "Алдаа гарлаа"}
        </h2>
        <p className="text-gray-600 mb-8">
          {is404
            ? "Таны хайсан хуудас олдсонгүй. Хуудас устсан эсвэл шилжсэн байж болно."
            : "Техникийн алдаа гарлаа. Та дахин оролдоно уу."}
        </p>
        <CustomLink
          to="/"
          aria-label="Go to homepage"
          className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg
               hover:bg-gray-800 transition-colors"
        >
          Нүүр хуудас руу буцах
        </CustomLink>
      </div>
    </main>
  );
};

export default Error;
