import { useParams } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SEO from "../components/common/SEO";
import { siteConfig } from "../data/siteData";
import Image from "../components/common/Image";

const Attorney = () => {
  const { id } = useParams();
  const attorney = siteConfig.team.find((member) => member.id === parseInt(id));

  if (!attorney) {
    return <div>Attorney not found</div>;
  }

  return (
    <>
      <SEO
        title={`${attorney.name} | ${siteConfig.name}`}
        description={attorney.about}
        name={siteConfig.name}
        type="profile"
        image={attorney.imageUrl}
      />
      <main className="maincontainer ">
        <div className="container w-full pt-28 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src={attorney.imageUrl}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h1 className="text-2xl font-bold mb-2">{attorney.name}</h1>
                  <p className="text-gray-600 mb-4">{attorney.position}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {attorney.about}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 pb-8">
                    <span className="font-medium">Ажиллах хэл:</span>
                    <span>{attorney.languages}</span>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <a
                      href={`tel:${attorney.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <BsTelephoneFill size={16} />
                      <span>{attorney.phone}</span>
                    </a>
                    <a
                      href={`mailto:${attorney.email}`}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <MdEmail />
                      <span>{attorney.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-6">Боловсрол</h2>
                <ul className="space-y-4">
                  {attorney.education.map((edu, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-6">Ажлын туршлага</h2>
                <ul className="space-y-4">
                  {attorney.prevWorkPlace.map((work, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-6">
                Хийж гүйцэтгэсэн ажлууд
              </h2>
              <ul className="space-y-6">
                {attorney.experience.map((exp, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed">
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Attorney;
