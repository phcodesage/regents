export default function RegentsExamSection() {
  return (
    <section className="w-full bg-white text-[#1a2332] px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-sm bg-white">
        {/* Header: Navy background with red title */}
        <div className="bg-[#001f3f] text-center py-10 px-6">
          <div className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#ff5757]">REGENTS EXAM</div>
          <div className="text-xl md:text-2xl font-semibold text-white mt-2">Preparation Classes</div>
        </div>

        <div className="bg-white text-center py-10 px-6">
          <p className="italic text-lg md:text-xl text-[#1a2332]">Focused test prep.</p>
          <p className="italic text-lg md:text-xl text-[#1a2332]">Holistic growth.</p>
          <p className="italic text-lg md:text-xl text-[#1a2332]">Lifelong success.</p>
        </div>

        <div className="bg-[#ca3433] text-white text-center py-4">
          <a
            href="https://www.exceedlearningcenterny.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold tracking-wide hover:underline"
          >
            www.exceedlearningcenterny.com
          </a>
        </div>
      </div>
    </section>
  );
}
