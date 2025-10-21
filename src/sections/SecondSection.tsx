export default function SecondSection() {
  return (
    <div className="min-h-screen w-full bg-white text-[#1a2332] px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Physics Course */}
        <div className="space-y-4 mb-16">
          <div className="inline-block bg-[#1a2332] text-white px-6 py-3 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-bold">PHYSICS ($2097)</h2>
          </div>

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
                <span className="font-bold">Class Dates:</span> March 22, 29, April 12, 19, 26, May 3, 17, 24, 31, 2026 (9:00 AM – 12:00 PM)
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
                <span className="font-bold">Regents Exam Dates:</span> June 10, 2026 (New); June 25, 2026 (Old Exam)
              </div>
            </li>
          </ul>
        </div>

        {/* Also Available & Contact Section */}
        <div className="relative">
          <div
            className="relative bg-cover bg-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/second-section-image.png')",
              minHeight: "500px",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 p-8 md:p-12 text-white">
              {/* Also Available Banner */}
              <div className="inline-block bg-[#d44545] px-6 py-3 mb-6">
                <h3 className="text-2xl md:text-3xl font-bold">ALSO AVAILABLE:</h3>
              </div>

              <ul className="space-y-2 text-xl md:text-2xl font-semibold mb-12">
                <li>• History Global</li>
                <li>• US History</li>
              </ul>

              {/* Contact Section */}
              <div className="absolute bottom-8 right-8">
                <div className="bg-[#1a2332] text-white px-8 py-4 rounded-sm mb-4 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-xl md:text-2xl font-bold">CONTACT US</span>
                </div>

                <div className="space-y-3 bg-white/95 rounded-sm p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#d44545] p-2 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-[#1a2332] font-semibold">+1 (516) 226-3114</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#d44545] p-2 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M2 12h20"></path>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <span className="text-[#1a2332] font-semibold">exceedlearningcenterny.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#d44545] p-2 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#1a2332] font-semibold">regent@exceedlearningcenterny.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#d44545] p-2 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="text-[#1a2332] font-semibold">1360 Willis Ave, Albertson, NY 11507</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
