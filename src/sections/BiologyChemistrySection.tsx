export default function BiologyChemistrySection() {
  return (
    <section className="w-full bg-white text-[#001f3f] px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header Image */}
        <div className="relative mb-8">
          <img
            src="/last-section-image.png"
            alt="Biology and Chemistry header"
            className="w-full h-auto rounded-lg"
            loading="eager"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-transparent"></div>
        </div>

        {/* Biology Course */}
        <div className="mb-12">
          <div className="inline-block bg-[#ca3433] text-white px-6 py-3 rounded-sm mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">BIOLOGY ($1895)</h3>
          </div>

          <ul className="space-y-3 text-base md:text-lg bg-white p-6 border-l-4 border-purple-500">
            <li className="flex items-start">
              <span className="mr-3 text-[#001f3f]">•</span>
              <div>
                <span className="font-bold text-[#001f3f]">Inclusions:</span> Notes, worksheets, 2 free review sessions, and exam practice day
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
                <span className="font-bold text-[#001f3f]">Duration:</span> 6 weeks (2 hours per session)
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#001f3f]">•</span>
              <div>
                <span className="font-bold text-[#001f3f]">Class Dates:</span> May 5, 12, 19, 26, June 2, 9, 2026 (5:30 PM – 7:30 PM)
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#001f3f]">•</span>
              <div>
                <span className="font-bold text-[#001f3f]">Bootcamp Review:</span> June 14, 16, 17, 2026
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#001f3f]">•</span>
              <div>
                <span className="font-bold text-[#001f3f]">Regents Exam Date:</span> June 18, 2026
              </div>
            </li>
          </ul>
        </div>

        {/* Chemistry Course */}
        <div>
          <div className="inline-block bg-[#ca3433] text-white px-6 py-3 rounded-sm mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">CHEMISTRY ($1995)</h3>
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
                  <span className="font-bold">Duration:</span> 9 weeks (3 hours per session)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Class Dates:</span> March 24, 25, 31, April 14, 15, 21, 22, 28, 29, May 5, 6, 12, 13, 19, 20, 26, 27, June 2, 2026 (6:00 PM – 7:30 PM)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Bootcamp Review:</span> June 3, 7, 8, 2026
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-bold">Regents Exam Dates:</span> June 9, 2026 (New)
                  <div className="ml-6 mt-1">
                    <span className="text-gray-300">◦ June 24, 2026 (Old Exam)</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
