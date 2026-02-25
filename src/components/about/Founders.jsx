import React from "react";

const leaders = [
    {
        name: "Vellupillai Subaskaran",
        role: "Chief Executive Officer",
        image: "/founder-ceo.jpg",
        quote:
            "We are building a company trusted for quality, responsibility, and long-term partnerships.",
    },
    {
        name: "Aanchikan Subaskaran",
        role: "Managing Director",
        image: "/founder-md.jpeg",
        quote:
            "Every step of our operation is guided by consistency, care, and respect for our partners.",
    },
    {
        name: "Nadarajapillai Jathurshan",
        role: "General Manager",
        image: "/founder-gm.jpeg",
        quote:
            "Continuous improvement and reliable systems keep our team and products performing at their best.",
    },
];

const Founders = () => {
    return (
        <section className="bg-[#DBB687] pt-20 pb-5 relative overflow-hidden rounded-3xl m-5 shadow-2xl">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-20 md:h-28"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#e6f4fb" />
                            <stop offset="100%" stopColor="#DBB687" />
                        </linearGradient>
                    </defs>

                    <path
                        d="M0,40 C240,120 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
                        fill="url(#waveGradient)"
                    />
                </svg>
            </div>
            <div className="max-w-6xl mx-auto p-6">
                {/* Title */}
                <header className="text-center mb-5">
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8c5207] mb-2">
                        Leadership & Founders
                    </p>
                    <h2 className="text-[#543307] font-bold text-2xl sm:text-3xl md:text-4xl">
                        Guiding Aqua Bloom Forward
                    </h2>
                </header>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    {leaders.map((leader) => (
                        <article
                            key={leader.name}
                            className="rounded-2xl p-6 shadow-xl border border-slate-200 hover:shadow-xl transition bg-[#ead5bb]"
                        >
                            <div className="flex items-center gap-4 mb-4 ">
                                <div className="w-14 h-18 rounded-full overflow-hidden border border-slate-300">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#0A2365] font-semibold text-sm">
                                        {leader.name}
                                    </h3>
                                    <p className="text-[10px] tracking-[0.18em] uppercase text-slate-500">
                                        {leader.role}
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-600 leading-relaxed">
                                “{leader.quote}”
                            </p>
                        </article>
                    ))}
                </div>
            </div>

            {/* Seashells decoration */}
            <div className="pointer-events-none absolute -bottom-2 md:-bottom-6 -left-6 rotate-[-12deg]">
                <img
                    src="/sea_shell.png"
                    alt="Sea shell left"
                    className="w-36 sm:w-44 md:w-52 lg:w-60 opacity-90 drop-shadow-lg"
                />
            </div>
            <div className="pointer-events-none absolute -bottom-2 md:-bottom-6 -right-6 rotate-[12deg]">
                <img
                    src="/sea_shell.png"
                    alt="Sea shell right"
                    className="w-36 sm:w-44 md:w-52 lg:w-60 opacity-90 scale-x-[-1] drop-shadow-lg"
                />
            </div>
        </section>
    );
};

export default Founders;
