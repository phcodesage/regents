export default function FirstSection() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-8">
      <div className="max-w-6xl w-full space-y-8">
        {/* Geometry Course */}
        <div className="space-y-4">
          <div className="inline-block bg-[#1a2332] px-6 py-3 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-bold">GEOMETRY ($1795)</h2>
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
                <span className="font-bold">Early Bird Discount:</span> $100 off if registered by March 15, 2026
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Duration:</span> 8 weeks (3 hours per session)
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Class Dates:</span> April 22, 27, 29, May 4, 6, 11, 13, 18, 20, 25, 27, June 1, 3, 8, 10, 15, 2026 (5:30 PM – 7:00 PM)
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Bootcamp Review:</span> June 17, 21, 22, 2026
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Regents Exam Date:</span> June 23, 2026
              </div>
            </li>
          </ul>
        </div>

        {/* Earth Science Course */}
        <div className="space-y-4">
          <div className="inline-block bg-[#1a2332] px-6 py-3 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-bold">EARTH SCIENCE ($1595)</h2>
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
                <span className="font-bold">Early Bird Discount:</span> $100 off if registered by March 15, 2026
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Duration:</span> 6 weeks (2 hours per session)
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Class Dates:</span> May 5, 12, 19, 26, June 2, 9, 2026 (4:00 PM – 6:00 PM)
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Bootcamp Review:</span> June 14, 16, 17, 2026
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-bold">Regents Exam Date:</span> June 18, 2026
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Student Image - Full Width */}
      <div className="mt-8 w-full">
        <div 
          className="h-48 md:h-64 w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/first-section-image.png')"
          }}
        />
      </div>
    </div>
  );
}
