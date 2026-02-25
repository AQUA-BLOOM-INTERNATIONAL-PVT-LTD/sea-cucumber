import React from "react";
import CallToAction from "./CallToAction";
import Bioactive from "./Bioactive";

const IntroPage = () => {
    return (
        <main
            id="learn-more-sea-cucumber"
            className="bg-[#F5F7FB] py-12 sm:py-16 md:py-10"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-10">
                {/* HERO / INTRO */}
                <section className="grid md:grid-cols-[1.3fr,1fr] gap-10 md:gap-12 items-center mb-10">
                    {/* Text */}
                    <div>
                        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#2774E1] mb-3">
                            🪸 What Is Sea Cucumber?
                        </p>
                        <h1 className="text-[#0A2365] font-bold text-2xl sm:text-3xl md:text-4xl leading-snug mb-4">
                            A Unique Marine Delicacy with Nutritional &amp; Cultural Value
                        </h1>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                            Sea cucumber is a soft-bodied marine animal found on ocean floors
                            around the world and belongs to the same group as starfish and sea
                            urchins. It is widely harvested and processed as a valuable
                            seafood product, especially in Asian and global markets.
                        </p>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                            Known for its high nutritional value, sea cucumber is rich in
                            protein, vitamins, minerals, and bioactive compounds while
                            remaining naturally low in fat.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm text-slate-700 shadow-sm border border-slate-100">
                                <span className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">
                                    ★
                                </span>
                                High-protein marine superfood
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm text-slate-700 shadow-sm border border-slate-100">
                                <span className="h-6 w-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-xs">
                                    🌊
                                </span>
                                Important for oceans &amp; communities
                            </div>
                        </div>
                    </div>

                    {/* Visual / animation */}
                    <div className="relative">
                        <div className="relative rounded-3xl bg-gradient-to-br from-[#0A2365] via-[#1F8ABF] to-[#DBB687] p-1 shadow-xl overflow-hidden">
                            <div className="rounded-3xl bg-[#F5F7FB]/80 backdrop-blur-sm p-6 sm:p-7 h-full">
                                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-2xl mb-4">
                                    <img
                                        src="/Sea_Cucumber_1.jpeg"
                                        alt="Processed sea cucumber products"
                                        className="w-full h-full object-cover scale-105 transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs sm:text-sm text-white">
                                        <span className="font-semibold">
                                            Premium Dried Sea Cucumber
                                        </span>
                                        <span className="px-2 py-1 rounded-full bg-white/15 backdrop-blur text-[10px] sm:text-[11px]">
                                            Nutrient Rich • Low Fat
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3 text-[10px] sm:text-xs text-slate-700">
                                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                                        <p className="font-semibold text-[#0A2365] mb-1">
                                            Rich in Protein
                                        </p>
                                        <p>Supports tissue repair and muscle health.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                                        <p className="font-semibold text-[#0A2365] mb-1">
                                            Bioactive Compounds
                                        </p>
                                        <p>Contains collagen, antioxidants, and minerals.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                                        <p className="font-semibold text-[#0A2365] mb-1">
                                            Ocean Friendly
                                        </p>
                                        <p>Plays a role in cleaning and recycling seabeds.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating bubble animation */}
                        <div className="pointer-events-none">
                            <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-sky-200/70 blur-lg animate-pulse" />
                            <span className="absolute -bottom-6 -left-2 w-20 h-20 rounded-full bg-emerald-100/70 blur-lg animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* USES SECTION */}
                <section className="mb-10">
                    <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                        <div>
                            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#2774E1] mb-2">
                                🍽️ Uses of Sea Cucumber
                            </p>
                            <h2 className="text-[#0A2365] font-bold text-xl sm:text-2xl md:text-3xl">
                                From Kitchen Tables to Wellness &amp; Industry
                            </h2>
                        </div>

                    </header>

                    <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                        {/* Culinary */}
                        <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 flex flex-col">
                            {/* Food image */}
                            <div className="relative w-full h-40 sm:h-44 mb-4 overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                                <img
                                    src="/Food.png"
                                    alt="Sea cucumber dish"
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-lg">
                                    🍜
                                </span>
                                <h3 className="text-[#0A2365] font-semibold text-sm sm:text-base">
                                    Culinary Uses
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                                Sea cucumber is considered a premium seafood delicacy and is
                                commonly used in soups, stews, stir-fries, and traditional
                                dishes, particularly in Asian cuisine.
                            </p>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                It is prized for its unique texture and its ability to absorb
                                rich flavors from sauces, broths, and spices.
                            </p>
                        </article>

                        {/* Traditional & Medicinal */}
                        <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 flex flex-col">
                            {/* Medicine image */}
                            <div className="relative w-full h-40 sm:h-44 mb-4 overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                                <img
                                    src="/Medicine.png"
                                    alt="Sea cucumber supplement bottles"
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-lg">
                                    🌿
                                </span>
                                <h3 className="text-[#0A2365] font-semibold text-sm sm:text-base">
                                    Traditional &amp; Medicinal Uses
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                                For centuries, sea cucumber has been used in traditional
                                medicine to support joint health, reduce inflammation, and
                                promote overall wellness, though scientific evidence varies.
                            </p>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                It contains compounds such as chondroitin sulfate and
                                antioxidants that are being studied for potential health
                                benefits.
                            </p>
                        </article>

                        {/* Industrial & Cosmetic */}
                        <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6 flex flex-col">
                            {/* Cosmetics image */}
                            <div className="relative w-full h-40 sm:h-44 mb-4 overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                                <img
                                    src="/Cosmetics.png"
                                    alt="Cosmetic products with sea cucumber extracts"
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-lg">
                                    🧴
                                </span>
                                <h3 className="text-[#0A2365] font-semibold text-sm sm:text-base">
                                    Industrial &amp; Cosmetic Uses
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                                Sea cucumber extracts are used in supplements, oils, creams, and
                                cosmetic products thanks to their collagen and bioactive
                                compounds.
                            </p>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                These ingredients are valued for supporting skin, tissue
                                elasticity, and overall vitality.
                            </p>
                        </article>
                    </div>
                </section>

                {/* NUTRITION & HEALTH BENEFITS */}
                <section className="mb-10">
                    <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 md:gap-10 items-center">
                        <div>
                            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#2774E1] mb-2">
                                💪 Nutritional &amp; Health Benefits
                            </p>
                            <h2 className="text-[#0A2365] font-bold text-xl sm:text-2xl md:text-3xl mb-3">
                                Nutrient-Dense and Naturally Functional
                            </h2>
                            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                                Sea cucumbers are highly nutritious and provide important
                                nutrients like protein, riboflavin, magnesium, and antioxidants
                                that contribute to healthy metabolism and overall wellbeing.
                            </p>
                            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                                Research shows they contain amino acids, collagen, and bioactive
                                compounds with antioxidant and anti-inflammatory properties,
                                supporting body functions from tissue repair to cellular
                                protection.
                            </p>
                            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                Some studies are also exploring their potential roles in immune
                                support, tissue regeneration, and other therapeutic
                                applications.
                            </p>
                        </div>

                        {/* Stats / animated rings */}
                        <div className="relative">
                            <div className="relative bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-7 overflow-hidden">
                                <div className="absolute -top-10 -right-6 w-28 h-28 rounded-full bg-sky-100 blur-2xl" />
                                <div className="absolute -bottom-12 -left-10 w-32 h-32 rounded-full bg-emerald-100 blur-2xl" />

                                <h3 className="text-[#0A2365] font-semibold text-sm sm:text-base mb-4 relative">
                                    Key Nutritional Highlights
                                </h3>

                                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 relative">
                                    <div className="bg-[#F5F7FB] rounded-2xl p-4">
                                        <p className="text-[11px] font-semibold text-[#0A2365] mb-1">
                                            High Protein
                                        </p>
                                        <p>Lean source with very low fat content.</p>
                                    </div>
                                    <div className="bg-[#F5F7FB] rounded-2xl p-4">
                                        <p className="text-[11px] font-semibold text-[#0A2365] mb-1">
                                            Collagen &amp; Amino Acids
                                        </p>
                                        <p>Support skin, joint, and tissue health.</p>
                                    </div>
                                    <div className="bg-[#F5F7FB] rounded-2xl p-4">
                                        <p className="text-[11px] font-semibold text-[#0A2365] mb-1">
                                            Antioxidant Activity
                                        </p>
                                        <p>Compounds studied for protective effects.</p>
                                    </div>
                                    <div className="bg-[#F5F7FB] rounded-2xl p-4">
                                        <p className="text-[11px] font-semibold text-[#0A2365] mb-1">
                                            Minerals &amp; Vitamins
                                        </p>
                                        <p>Includes magnesium, riboflavin, and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ECONOMIC & ECOLOGICAL IMPORTANCE */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                        {/* Economic */}
                        <article className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-7">
                            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#2774E1] mb-2">
                                🌍 Economic &amp; Global Importance
                            </p>
                            <h2 className="text-[#0A2365] font-bold text-lg sm:text-xl md:text-2xl mb-3">
                                A Valuable Resource in Global Seafood Trade
                            </h2>

                            {/* Global trade image */}
                            <div className="mb-4">
                                <div className="relative w-full h-32 sm:h-40 md:h-44 overflow-hidden rounded-2xl bg-sky-50 border border-sky-100">
                                    <img
                                        src="/global.png"
                                        alt="Global sea cucumber trade connections"
                                        className="w-full h-full object-contain scale-105"
                                    />
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-3">
                                Sea cucumber is an economically important marine product with
                                strong demand in international markets, particularly for dried
                                products used in cuisine and traditional foods.
                            </p>
                            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                                Because of this high demand, sustainable harvesting, responsible
                                processing, and traceable supply chains are essential to protect
                                marine ecosystems and secure long-term availability for
                                communities that depend on this resource.
                            </p>
                        </article>

                        {/* Ecological */}
                        <article className="bg-[#0A2365] rounded-3xl shadow-lg overflow-hidden relative text-white">
                            <div className="absolute inset-0 opacity-25 mix-blend-overlay">
                                <img
                                    src="/sea_shell.png"
                                    alt="Ocean illustration"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="relative p-6 sm:p-7">
                                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-sky-200 mb-2">
                                    🌊 Ecological Importance
                                </p>
                                <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-3">
                                    Keeping Ocean Floors Clean &amp; Balanced
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-slate-100/95 leading-relaxed mb-4">
                                    Sea cucumbers play a vital role in marine ecosystems by
                                    recycling organic matter on the seabed. As they feed on
                                    sediments, they help break down and process waste, improving
                                    sediment quality and nutrient cycling.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base text-slate-100/95 leading-relaxed">
                                    By maintaining cleaner seabeds and balanced ecosystems, sea
                                    cucumbers support healthy habitats for many other marine
                                    species, making them an important part of ocean biodiversity.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3 text-[11px] sm:text-xs">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/40">
                                        <span className="text-sky-200">◎</span> Natural
                                        recyclers of the seabed
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40">
                                        <span className="text-emerald-200">◎</span> Support
                                        biodiversity &amp; habitat health
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

            <Bioactive />
            <CallToAction />
        </main>
    );
};

export default IntroPage;