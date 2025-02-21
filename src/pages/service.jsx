import { useState } from "react";
import Section from "../components/section";
import SEO from "../components/SEO";

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full bg-white shadow-md transition-all duration-300 
      ${isOpen ? "my-6" : "my-2"} hover:shadow-lg`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`p-6 cursor-pointer transition-colors duration-300  border-l-[3px] border-black
        ${isOpen ? "bg-gray-50" : "hover:bg-gray-50"}`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium tracking-tight">
            {service.title}
          </h2>
          <svg
            className={`w-6 h-6 transition-transform duration-300 
            ${isOpen ? "rotate-180 text-black" : "text-gray-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out px-6 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4 pb-6"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc pl-6 space-y-2">
            {service.subTitle.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Хууль зүйн зөвлөгөө",
      subTitle: [
        "Компанийн эрх зүй, засаглал, дотоод хяналт",
        "Бүх төрлийн гэрээ, хэлцэл",
        "Хөдөлмөрийн харилцаа",
        "Хөрөнгө оруулалт",
        "Газрын харилцаа",
        "Уул уурхай, байгалийн нөөц, эрчим хүч",
        "Банк, санхүү, татвар, даатгал",
        "Оюуны өмч",
        "Гэр бүлийн харилцаа",
        "Гадаадын иргэн, харьяатын асуудал",
        "Хөдлөх болон үл хөдлөх эд хөрөнгө",
      ],
    },
    {
      id: 2,
      title: "Өмгөөлөл",
      subTitle: [
        "Иргэний хэрэг",
        "Захиргааны хэрэг",
        "Эрүүгийн хэрэг",
        "Арбитрын хэрэг",
        "Зөрчлийн хэрэг",
        "Үндсэн хуулийн маргаан",
        "Шийдвэр гүйцэтгэх ажиллагаа",
        "Эвлэрүүлэн зуучлах ажиллагаа",
      ],
    },
    {
      id: 3,
      title: "Төлөөлөл",
      subTitle: [
        "Үйлчлүүлэгчийг төрийн төв, орон нутгийн байгууллага болон бусад байгууллага, компани, иргэний өмнө төлөөлөх, гэрээ хэлэлцээрт оролцох",
      ],
    },
    {
      id: 4,
      title: "Хууль зүйн баталгаат орчуулга",
      subTitle: [
        "Хууль зүйн англи- монгол, монгол-англи баталгаат орчуулга",
        "Хууль зүйн хятад- монгол, монгол-хятад аман болон бичгэн орчуулга",
      ],
    },
    {
      id: 5,
      title: "Байгууллага, иргэнд зориулсан хууль зүйн тогтмол үйлчилгээ",
      subTitle: [
        "Үйлчлүүлэгч компанийн дотоод баримт бичгүүд Монгол улсын хууль тогтоомжид хэрхэн нийцэж байгааг хянах, эрсдлийг үнэлэх, аардлагатай гэж үзвэл шинэчлэх, дахин боловсруулах",
        "Үйлчлүүлэгчийн үйл ажиллагаанд мөрдөгдөх хууль тогтоомж болон хууль тогтоомжийн төслийг судлах, холбогдох санал зөвлөмж боловсруулах, зөвлөгөө өгөх",
        "Үйлчлүүлэгчийн хүсэлтээр бусадтай байгуулах гэрээний төслийг боловсруулах буюу хууль зүйн үндэслэлийг хянах",
        "Үйлчлүүлэгчийн хүсэлтээр бүх төрлийн эрх зүйн баримт бичгийг хянах, боловсруулах",
        "Үйлчлүүлэгчийн хүсэлтээр түүний үйл ажиллагаатай холбогдож гарсан эрх зүйн асуудлаар зөвлөгөө, дүгнэлт өгөх",
        "Өдөр тутмын бизнесийн үйл ажиллагаатай холбоотой асуудлаар утсаар, цахим шуудангаар болон биечлэн уулзаж зөвлөгөө өгөх",
        "Үйлчлүүлэгчийн үйл ажиллагаанд холбогдох хуулийн нэмэлт, өөрчлөлтийг тухай бүрт нь мэдээлэх",
        "Шинээр батлагдсан хууль тогтоомжийн хүрээнд мэдээлэл бэлтгэн хүргүүлэх",
      ],
    },
    {
      id: 6,
      title: "Хууль зүйн сургалт, судалгаа",
      subTitle: [
        "Бид хууль зүйн зөвлөгөө, өмгөөлөл, төлөөлөл, байгууллагад тогтмол үйлчилгээ үзүүлэхээс гадна хуулийн төслүүдэд санал, дүгнэлт өгөх, судалгаа шинжилгээ хийх, мэргэшсэн чиглэлүүдээр олон нийтэд сургалт орох, мэргэжлийн чиглэлийн нэг сэдэвт судалгааны бүтээл, өгүүлэл нийтлэх, гадаад улсын хууль тогтоомжийн эмхтгэлийг орчуулан хэвлүүлэх",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Service | BE ADVOCATES LLP"
        description="BE ADVOCATES LLP нь 2013 оноос хойш мэргэжлийн өндөр төвшинд хууль зүйн үйлчилгээг үзүүлж байна."
        name="BE ADVOCATES LLP"
        type="website"
      />
      <main className="maincontainer bg-gray-50">
        <div className="container w-full pt-28 pb-24 px-6">
          <Section title={"МАНАЙ ҮЙЛЧИЛГЭЭ"}>
            <div className="max-w-4xl mx-auto">
              {services.map((service, i) => (
                <ServiceCard service={service} key={`service${i}`} />
              ))}
            </div>
          </Section>
        </div>
      </main>
    </>
  );
};

export default Service;
