import { useState } from "react";
import Section from "../components/section";
import SEO from "../components/SEO";
import { siteConfig } from "../data/siteData";

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
  const { services } = siteConfig;

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
