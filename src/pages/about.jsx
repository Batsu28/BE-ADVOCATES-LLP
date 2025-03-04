import Team from "../components/team";
import Section from "../components/common/section";
import SEO from "../components/common/SEO";
import Logo from "../components/svg/logo";

const About = () => {
  return (
    <>
      <SEO
        title="About | BE ADVOCATES LLP"
        description="BE ADVOCATES LLP нь 2013 оноос хойш мэргэжлийн өндөр төвшинд хууль зүйн үйлчилгээг үзүүлж байна."
        name="BE ADVOCATES LLP"
        type="website"
      />
      <main className="maincontainer bg-gradient-to-b from-gray-50 to-white">
        <div className="container w-full pt-28 pb-24 flex flex-col gap-24">
          <Section title={"БИДНИЙ ТУХАЙ"}>
            <div className="max-w-4xl mx-auto px-6 lg:px-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Өмгөөллийн Эл Ар Си Эм ХХНөхөрлөл нь анх 2013 онд
                    байгуулагдсанаас хойш мэргэжлийн өндөр төвшинд хууль зүйн
                    үйлчилгээг үйлчлүүлэгчиддээ үзүүлэн тэдний итгэлт хамтрагч
                    болон ажиллаж байна.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Манай нөхөрлөл нь бүхий л төрлийн гэрээ хэлцэл, гадаадын
                    хөрөнгө оруулалт, компанийн эрх зүй, компанийн засаглал,
                    хөдөлмөр, уул уурхай, үнэт цаас, үл хөдлөх хөрөнгийн
                    чиглэлээр мэргэшсэн хуульчдын баг бүрэлдэхүүнээс бүрдэж
                    байна.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="/office.jpg"
                      alt="Office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                    <Logo text={false}></Logo>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title={"МАНАЙ ХУУЛЬЧИД"}>
            <div className="max-w-6xl mx-auto px-6 lg:px-0">
              <Team />
            </div>
          </Section>

          <Section title={"БИДНИЙ ДАВУУ ТАЛ"}>
            <div className="max-w-6xl mx-auto px-6 lg:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Мэргэшсэн Баг",
                    description: "Олон жилийн туршлагатай мэргэшсэн хуульчид",
                  },
                  {
                    title: "Найдвартай Үйлчилгээ",
                    description:
                      "Үйлчлүүлэгчийн эрх ашгийг дээдэлсэн үйлчилгээ",
                  },
                  {
                    title: "Олон Улсын Стандарт",
                    description: "Олон улсын түвшний үйлчилгээний чанар",
                  },
                ].map((advantage, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
};

export default About;
