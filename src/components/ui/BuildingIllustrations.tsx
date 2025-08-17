interface BuildingIllustrationsProps {
  sectionId: string;
  className?: string;
}

export default function BuildingIllustrations({ sectionId, className = "" }: BuildingIllustrationsProps) {
  const illustrations = {
    about: (
      <div className={`absolute inset-0 ${className}`}>
        {/* Eye with detailed iris and pupil */}
        <div className="absolute top-1 right-1 w-8 h-6 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          {/* Eyelashes */}
          <div className="absolute -top-1 left-1 w-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="absolute -top-1 right-1 w-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="absolute -top-0.5 left-0.5 w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
          <div className="absolute -top-0.5 right-0.5 w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
        </div>
        {/* Face with mouth */}
        <div className="absolute top-8 right-1 w-6 h-4 bg-white rounded-full border border-gray-300 flex items-center justify-center">
          <div className="w-3 h-0.5 bg-gray-600 rounded-full"></div>
        </div>
        {/* Nose */}
        <div className="absolute top-9 right-3 w-1 h-1 bg-gray-400 rounded-full"></div>
      </div>
    ),
    projects: (
      <div className={`absolute inset-0 ${className}`}>
        {/* Microphone with detailed stand */}
        <div className="absolute top-1 right-1 w-6 h-8 bg-purple-500 rounded-t-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        {/* Microphone stand */}
        <div className="absolute top-7 right-3 w-1 h-4 bg-purple-600"></div>
        {/* Microphone base */}
        <div className="absolute top-9 right-2 w-3 h-1 bg-purple-600 rounded"></div>
        {/* Headphones */}
        <div className="absolute top-10 right-1 w-6 h-3 bg-white/90 rounded-full border border-purple-300 flex items-center justify-center">
          <div className="w-4 h-2 bg-purple-500 rounded-full"></div>
        </div>
        {/* Ear cups */}
        <div className="absolute top-9 right-0.5 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        <div className="absolute top-9 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
      </div>
    ),
    blog: (
      <div className={`absolute inset-0 ${className}`}>
        {/* TV with detailed screen */}
        <div className="absolute top-1 right-1 w-8 h-6 bg-orange-500 rounded-lg border-2 border-white/50 flex items-center justify-center">
          <div className="w-6 h-4 bg-white/90 rounded flex items-center justify-center">
            <div className="w-4 h-2 bg-orange-400 rounded"></div>
          </div>
        </div>
        {/* TV stand */}
        <div className="absolute top-5 right-3 w-3 h-2 bg-orange-600 rounded"></div>
        {/* TV base */}
        <div className="absolute top-6 right-2 w-5 h-1 bg-orange-600 rounded"></div>
        {/* Calendar */}
        <div className="absolute top-8 right-1 w-5 h-4 bg-white/90 rounded border border-orange-300 flex items-center justify-center">
          <span className="text-xs text-orange-600 font-bold">17</span>
        </div>
        {/* Calendar rings */}
        <div className="absolute top-7 right-2 w-1 h-1 bg-orange-400 rounded-full"></div>
        <div className="absolute top-7 right-5 w-1 h-1 bg-orange-400 rounded-full"></div>
      </div>
    ),
    links: (
      <div className={`absolute inset-0 ${className}`}>
        {/* Clock Tower */}
        <div className="absolute top-1 right-1 w-6 h-8 bg-green-500 rounded-t-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        {/* Clock face with hands */}
        <div className="absolute top-3 right-2 w-3 h-3 bg-white/90 rounded-full border border-green-300 flex items-center justify-center">
          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
        </div>
        {/* Clock hands */}
        <div className="absolute top-4 right-3.5 w-0.5 h-1 bg-green-600 transform rotate-45"></div>
        <div className="absolute top-4 right-3.5 w-0.5 h-1.5 bg-green-600 transform -rotate-45"></div>
        {/* Tower windows */}
        <div className="absolute top-10 right-2 w-4 h-3 bg-white/90 rounded border border-green-300 flex items-center justify-center">
          <div className="w-2 h-1 bg-green-500 rounded"></div>
        </div>
        {/* Tower base */}
        <div className="absolute top-11 right-1 w-6 h-1 bg-green-600 rounded"></div>
      </div>
    ),
    contact: (
      <div className={`absolute inset-0 ${className}`}>
        {/* Telescope */}
        <div className="absolute top-1 right-1 w-8 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <div className="w-6 h-4 bg-white/90 rounded-full flex items-center justify-center">
            <div className="w-3 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>
        {/* Telescope stand */}
        <div className="absolute top-5 right-3 w-1 h-4 bg-blue-600"></div>
        {/* Telescope base */}
        <div className="absolute top-7 right-2 w-3 h-1 bg-blue-600 rounded"></div>
        {/* Telescope legs */}
        <div className="absolute top-8 right-1 w-1 h-1 bg-blue-600 rounded-full"></div>
        <div className="absolute top-8 right-5 w-1 h-1 bg-blue-600 rounded-full"></div>
        {/* Envelope */}
        <div className="absolute top-9 right-1 w-5 h-3 bg-white/90 rounded border border-blue-300 flex items-center justify-center">
          <div className="w-3 h-1 bg-blue-500 rounded"></div>
        </div>
        {/* Envelope flap */}
        <div className="absolute top-9 right-1 w-5 h-1 bg-blue-400 rounded-t transform -skew-x-12"></div>
      </div>
    ),
  };

  return illustrations[sectionId as keyof typeof illustrations] || null;
}
