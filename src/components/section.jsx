const Section = ({ title, children }) => {
  return (
    <section className="">
      <div className="w-full flex flex-col items-center gap-4 mb-12">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          {title}
        </h1>
        <div className="h-1 w-24 bg-black rounded"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
