import Section from "../components/common/section";
import SEO from "../components/common/SEO";

const ContactInfo = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
    <div className="text-gray-600">{children}</div>
  </div>
);

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact | BE ADVOCATES LLP"
        description="BE ADVOCATES LLP нь 2013 оноос хойш мэргэжлийн өндөр төвшинд хууль зүйн үйлчилгээг үзүүлж байна."
        name="BE ADVOCATES LLP"
        type="website"
      />
      <main className="maincontainer bg-gradient-to-b from-gray-50 to-white">
        <div className="container w-full pt-28 pb-24">
          <Section title={"Холбоо барих"}>
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="h-full flex flex-col gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-md flex-1">
                    <div className="space-y-6">
                      <ContactInfo label="Байршил">
                        <p className="leading-relaxed">
                          Монгол улс, Улаанбаатар, Чингэлтэй дүүрэг, 4-р хороо,
                          Макс Тоуэр, 7 давхар, 706 тоот
                        </p>
                      </ContactInfo>

                      <ContactInfo label="Утас">
                        <div className="flex flex-wrap gap-2">
                          <a
                            href="tel:976-99115442"
                            className="inline-flex items-center gap-2 hover:text-black transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
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
                            976-99115442
                          </a>
                          <span className="text-gray-400">|</span>
                          <a
                            href="tel:976-88106076"
                            className="inline-flex items-center gap-2 hover:text-black transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
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
                            976-88106076
                          </a>
                        </div>
                      </ContactInfo>

                      <ContactInfo label="И-мэйл">
                        <a
                          href="mailto:info@lrcm.mn"
                          className="inline-flex items-center gap-2 hover:text-black transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
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
                          info@lrcm.mn
                        </a>
                      </ContactInfo>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Ажлын цаг</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Даваа - Баасан: 09:00 - 18:00</p>
                      <p>Бямба, Ням: Амарна</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="h-full">
                  <div className="bg-white p-4 rounded-xl shadow-md h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.6576957566575!2d106.91005885038494!3d47.92053977653079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925be2b18aab%3A0x9f24ad2b0fd9ef65!2z0JzQsNC60YEg0KLQsNGD0Y3RgA!5e0!3m2!1smn!2smn!4v1738666781662!5m2!1smn!2smn"
                      className="w-full h-full min-h-[500px] rounded-lg"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
};

export default Contact;
