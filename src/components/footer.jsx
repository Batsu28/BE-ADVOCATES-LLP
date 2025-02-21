import Logo from "./svg/logo";
import { Link } from "react-router-dom";

const FooterSection = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 md:px-6 py-8 md:py-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-lg text-gray-900">
                  <Logo />
                </div>
                <span className="text-lg md:text-xl font-semibold text-white">
                  ADVOCATES LLP
                </span>
              </div>
              <p className="text-sm text-gray-400">
                BE ADVOCATES LLP нь 2013 оноос хойш мэргэжлийн өндөр төвшинд
                хууль зүйн үйлчилгээг үзүүлж байна.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <FooterSection title="Цэс">
              <ul className="space-y-2">
                {[
                  { path: "/", label: "Нүүр" },
                  { path: "/about", label: "Бидний тухай" },
                  { path: "/services", label: "Үйлчилгээ" },
                  { path: "/contact", label: "Холбоо барих" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      target="_top"
                      className="text-gray-400 hover:text-white transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <FooterSection title="Холбоо барих">
              <div className="space-y-3 text-gray-400">
                <a
                  href="tel:976-99115442"
                  className="flex items-center gap-2 hover:text-white transition-colors py-1"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="break-all">976-99115442</span>
                </a>
                <a
                  href="tel:976-99115442"
                  className="flex items-center gap-2 hover:text-white transition-colors py-1"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="break-all">976-88106076</span>
                </a>
                <a
                  href="mailto:info@lrcm.mn"
                  className="flex items-center gap-2 hover:text-white transition-colors py-1"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-all">info@lrcm.mn</span>
                </a>
              </div>
            </FooterSection>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <FooterSection title="Хаяг">
              <p className="text-gray-400 leading-relaxed">
                Монгол улс, Улаанбаатар, Чингэлтэй дүүрэг, 4-р хороо, Макс
                Тоуэр, 7 давхар, 706 тоот
              </p>
            </FooterSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 md:px-6 py-4">
          <div className="text-xs md:text-sm text-gray-400 text-center">
            © 2013-{new Date().getFullYear()} BE ADVOCATES LLP. Бүх эрх хуулиар
            хамгаалагдсан.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
