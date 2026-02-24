
const StatsRow = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
            {/* Clients */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-[#F3F7FF] text-[#E53E3E]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="w-6 h-6"
                    >
                        <path d="M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
                        <path d="M4 20a4 4 0 0 1 8 0" />
                        <path d="M17 11a2 2 0 1 0-2-2" />
                        <path d="M15 20a4 4 0 0 1 4-4" />
                    </svg>
                </div>
                <p className="text-2xl font-bold text-[#0A2365]">120+</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Happy Clients
                </p>
            </div>

            {/* Profit per year */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-[#F3F7FF] text-[#E53E3E]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="w-6 h-6"
                    >
                        <path d="M4 7h16" />
                        <path d="M4 12h16" />
                        <path d="M4 17h16" />
                        <path d="M8 5v4" />
                        <path d="M12 10v4" />
                        <path d="M16 15v4" />
                    </svg>
                </div>
                <p className="text-2xl font-bold text-[#0A2365]">$5M+</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Annual Export Value
                </p>
            </div>

            {/* Purchasing centers */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-[#F3F7FF] text-[#E53E3E]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="w-6 h-6"
                    >
                        <path d="M3 9.5 12 4l9 5.5" />
                        <path d="M5 10v8h14v-8" />
                        <path d="M9 14h6" />
                    </svg>
                </div>
                <p className="text-2xl font-bold text-[#0A2365]">15</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Purchasing Centres
                </p>
            </div>

            {/* Processing centers */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-[#F3F7FF] text-[#E53E3E]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="w-6 h-6"
                    >
                        <rect x="3" y="8" width="7" height="10" rx="1" />
                        <rect x="14" y="6" width="7" height="12" rx="1" />
                        <path d="M6.5 5V3" />
                        <path d="M17.5 4V2" />
                    </svg>
                </div>
                <p className="text-2xl font-bold text-[#0A2365]">3</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Processing Centres
                </p>
            </div>
        </div>
    )
}

export default StatsRow