export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white text-[#1a2332] px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="h-1 w-24 bg-[#ca3433] mb-6" />
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-[#001f3f]">
          Why Choose Exceed's
          <br className="hidden md:block" />
          Tutoring Services:
        </h2>
        <p className="text-[#334155] mb-8 text-base md:text-lg max-w-3xl">
          At Exceed Learning Academy, we believe in unlocking the potential within every learner.
        </p>

        <ul className="space-y-4 mb-10 text-base md:text-lg">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#001f3f]"></span>
            <p>
              <span className="text-[#ca3433] font-extrabold">Proven Results:</span>{" "}
              Join a program with a proven track record of academic excellence, where students consistently achieve positive
              results and academic success.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#001f3f]"></span>
            <p>
              <span className="text-[#ca3433] font-extrabold">Personalized Approach:</span>{" "}
              Benefit from a personalized approach to learning, where tutors focus on individual strengths and challenges to
              tailor their support accordingly.
            </p>
          </li>
        </ul>

        <div
          className="relative text-white p-6 md:p-8 bg-[#001f3f]"
          style={{ clipPath: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)" }}
        >
          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-white"></span>
              <p>
                <span className="text-[#ca3433] font-extrabold">Holistic Development:</span>{" "}
                Our tutoring services go beyond academic improvement, emphasizing the development of critical thinking skills,
                problem-solving abilities, and a love for learning.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-white"></span>
              <p>
                <span className="text-[#ca3433] font-extrabold">Regular Progress Updates:</span>{" "}
                Stay informed about your child's or your own academic progress with regular updates and feedback from our tutors,
                ensuring transparency and involvement in the learning process.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
