import { MdEmail } from "react-icons/md"; // Material Design email icon
import { BsTelephoneFill } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi"; // Add this import
import { Link } from "react-router-dom";

const MemberCard = ({ style, member }) => {
  return (
    <Link
      to={`/attorney/${member.id}`}
      target="_top"
      className="transform hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="h-full flex justify-center">
        <div
          className={`w-full h-full overflow-hidden ${style} relative group/member`}
        >
          {/* Image Container */}
          <div className="h-[70%] overflow-hidden">
            <img
              src={member.imageUrl || "/empty.webp"}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/member:scale-105"
              alt={member.name || "image"}
            />
          </div>

          {/* Info Container */}
          <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>

            {/* Hover Content */}
            <div className="overflow-hidden">
              <div className="transform transition-transform duration-300 translate-y-full group-hover/member:translate-y-0">
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div
                    //   href={`tel:${member?.phone}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <BsTelephoneFill size={16} />
                    <span>{member?.phone}</span>
                  </div>
                  <div
                    //   href={`mailto:${member?.email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <MdEmail size={18} />
                    <span>{member?.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Profile Button */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover/member:bg-gray-900 group-hover/member:text-white transition-all duration-300">
                <HiChevronRight size={20} />
              </div>
            </div>
          </div>

          {/* Overlay for smooth transition */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/member:bg-black/5" />
        </div>
      </div>
    </Link>
  );
};

const Team = () => {
  const team = [
    {
      id: 1,
      name: "БАЛЖИННЯМ БУЯНТОГОС",
      position: "Хуульч, өмгөөлөгч",
      phone: "99115442",
      email: "buyantogos@lrcm.mn",
      imageUrl: "./member1.webp",
    },
    {
      id: 2,
      name: "ДЭЛЭГ ЭНХГЭРЭЛ",
      position: "Гишүүн хуульч, өмгөөлөгч",
      phone: "88106076",
      email: "enkhgerel@lrcm.mn",
      imageUrl: "./member2.webp",
    },
    {
      id: 3,
      name: "ОДГЭРЭЛ УЯНГА",
      position: "Хуульч",
      phone: "99990907",
      email: "info@lrcm.mn",
      imageUrl: "./member3.webp",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div
            key={`members${i}`}
            className="transform hover:-translate-y-2 transition-transform duration-300"
          >
            <MemberCard
              member={member}
              style="w-full h-[450px] bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
