export default function PersonalizedTutoringSection() {
  return (
    <section className="w-full bg-white text-[#001f3f] px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="h-1 w-full bg-[#ca3433] mb-8" />
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#ca3433] mb-12 leading-tight">
          Personalized Tutoring Services
          <br />
          at Exceed Learning Center
        </h2>

        {/* Algebra 1 Course */}
        <div className="mb-8">
          <div className="inline-block bg-[#ca3433] text-white px-6 py-3 rounded-sm mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">ALGEBRA 1 ($1795)</h3>
          </div>

          <div className="border-4 border-[#8b5cf6] bg-white p-6 rounded-sm">
            <ul className="space-y-3 text-base md:text-lg">
              <li className="flex items-start">
                <span className="mr-3 text-[#001f3f]">•</span>
                <div>
                  <span className="font-bold text-[#001f3f]">Inclusions:</span> Notes, worksheets, 2 free review sessions and exam practice day
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#001f3f]">•</span>
                <div>
                  <span className="font-bold text-[#001f3f]">Early Bird Discount:</span> $100 off if registered by March 15, 2026
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#001f3f]">•</span>
                <div>
                  <span className="font-bold text-[#001f3f]">Duration:</span> 8 weeks (3 hours per session)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#001f3f]">•</span>
                <div>
                  <span className="font-bold text-[#001f3f]">Class Dates:</span> April 12, 19, 26, May 3, 17, 24, 31, June 7, 2026 (12:00 PM – 3:00 PM)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#001f3f]">•</span>
                <div>
                  <span className="font-bold text-[#001f3f]">Bootcamp Review:</span> June 14–16, 2026
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#001f3f]">•</span>
                <div>
                  <span className="font-bold text-[#001f3f]">Regents Exam Date:</span> June 17, 2026
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Algebra 2/Trig Course */}
        <div>
          <div className="inline-block bg-[#ca3433] text-white px-6 py-3 rounded-sm mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">ALGEBRA 2 / TRIG ($2095)</h3>
          </div>

          <div className="bg-[#001f3f] text-white p-6 rounded-sm">
            <ul className="space-y-3 text-base md:text-lg">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Inclusions:</span> Notes, worksheets, 2 free review sessions, and exam practice day
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Early Bird Discount:</span> $100 off if registered by March 1, 2026
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Duration:</span> 10 weeks (3 hours per session)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Class Dates:</span> March 16, 22, 29, April 12, 19, 26, May 3, 17, 24, 31, 2026 (12:00 PM – 3:00 PM)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Bootcamp Review:</span> June 7–9, 2026
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Regents Exam Date:</span> June 10, 2026
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
