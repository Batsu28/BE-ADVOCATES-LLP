import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import Team from "../components/team";

const StatCard = ({ number, label }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
    <span className="text-4xl font-bold text-gray-900 mb-2">{number}</span>
    <span className="text-gray-600 text-center">{label}</span>
  </div>
);

const Home = () => {
  return (
    <>
      <SEO
        title="Home | BE ADVOCATES LLP"
        description="BE ADVOCATES LLP нь 2013 оноос хойш мэргэжлийн өндөр төвшинд хууль зүйн үйлчилгээг үзүүлж байна."
        name="BE ADVOCATES LLP"
        type="website"
      />
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="/cover.webp" // Add a professional law office image
              alt="Law Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative container mx-auto h-full flex items-center px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Таны итгэлт хуулийн зөвлөх
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                2013 оноос хойш бид таны эрх ашгийг хамгаалж, хууль зүйн өндөр
                түвшний үйлчилгээг үзүүлж байна.
              </p>
              <Link
                to="/contact"
                target="_top"
                className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg 
                hover:bg-gray-100 transition-colors"
              >
                Холбоо барих
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard number="10+" label="Жилийн туршлага" />
              <StatCard number="1000+" label="Амжилттай хэргүүд" />
              <StatCard number="20+" label="Мэргэшсэн хуульчид" />
              <StatCard number="98%" label="Сэтгэл ханамж" />
            </div>
          </div>
        </section> */}

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Манай Хуульчид
            </h2>
            <Team />
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Манай үйлчилгээ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Хууль зүйн зөвлөгөө",
                  description:
                    "Компанийн эрх зүй, гэрээ хэлцэл, хөдөлмөрийн эрх зүй",
                  icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                },
                {
                  title: "Өмгөөлөл",
                  description: "Иргэний болон эрүүгийн хэргийн өмгөөлөл",
                  icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                },
                {
                  title: "Төлөөлөл",
                  description: "Шүүх болон төрийн байгууллагад төлөөлөх",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <svg
                    className="w-12 h-12 text-gray-900 mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    to="/services"
                    target="_top"
                    className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                  >
                    Дэлгэрэнгүй →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Хууль зүйн туслалцаа хэрэгтэй байна уу?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            <Link
              to="/contact"
              target="_top"
              className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg 
              hover:bg-gray-100 transition-colors"
            >
              Холбоо барих
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
