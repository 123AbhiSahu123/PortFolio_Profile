import React, { useState } from "react";
import {
    RiArrowLeftLine,
    RiArrowRightLine,
    RiGraduationCapLine,
    RiComputerLine,
    RiBookOpenLine,
    RiUserLine,
} from "@remixicon/react";

const certificates = [
    {
        image: "/certificate/acmeLetter.jpg",
        title: "Intership Experience Letter",
        issuer: " Issued by Acme Infolabs Pvt. Ltd.",
    },
    {
        image: "/certificate/diplomaDegree.jpg",
        title: " 3 year Diploma in CSE ",
        issuer: " Issued by GPR ",
    },
    {
        image: "/certificate/certificateDucat.png",
        title: " MERN Stack + DSA + JAVA ",
        issuer: " Issued by Ducat "
    },
    {
        image: "/certificate/ccaCertificate.jpg",
        title: " CCA Certificate ",
        issuer: "Issued by PMKK",
    },
    {
        image: "/certificate/12Result.jpeg",
        title: " Intermediate ",
        issuer: " Issued by GIC ",
    },
    {
        image: "/certificate/10Result.jpeg",
        title: " High School ",
        issuer: "Issued by GIC",
    },
];

const qualifications = [
    {
        title: "Bachelor in Computer Aplication (BCA)",
        institute: "Indira Gandhi National Open University, Greater Noida",
        icon: RiComputerLine,
        color: "from-blue-500 to-cyan-400",
        dot: "bg-cyan-400",
    },
    {
        title: "Diploma in Computer Science & Engg. (CSE)",
        institute: "Government Polytechnic, Rampur",
        icon: RiGraduationCapLine,
        color: "from-emerald-500 to-cyan-400",
        dot: "bg-emerald-400",
    },
    {
        title: "Intermediate, 12th",
        institute: "Government Inter College, Prayagraj",
        icon: RiUserLine,
        color: "from-violet-500 to-purple-400",
        dot: "bg-violet-400",
    },
    {
        title: "High School, 10th",
        institute: "Government Inter College, Prayagraj",
        icon: RiUserLine,
        color: "from-blue-500 to-black-400",
        dot: "bg-blue-400",
    },
];

const Achievements = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % certificates.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prev) => (prev - 1 + certificates.length) % certificates.length
        );
    };

    return (
        <section
            id="Achievements"
            className="relative overflow-hidden bg-[#171D32] px-5 py-20 text-white sm:px-8 md:px-12 lg:px-16"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-3xl" />

            {/* ================= HEADER ================= */}
            <div className="relative z-10 mx-auto mb-12 max-w-7xl text-center">
                <div className="mb-3 flex items-center justify-center gap-4">
                    <span className="h-[2px] w-10 bg-cyan-400" />

                    <p className="text-xs font-semibold tracking-[0.3em] text-cyan-400 sm:text-sm">
                        MY ACHIEVEMENTS
                    </p>

                    <span className="h-[2px] w-10 bg-cyan-400" />
                </div>

                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    Certificates &{" "}
                    <span className="text-cyan-400">Qualifications</span>
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
                    A journey of learning, growth and continuous improvement.
                </p>
            </div>

            {/* ================= CERTIFICATES ================= */}
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="relative">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-3 top-[35%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0b2038]/90 text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#0f172a] md:-left-6"
                        aria-label="Previous certificate"
                    >
                        <RiArrowLeftLine size={22} />
                    </button>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={nextSlide}
                        className="absolute -right-3 top-[35%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0b2038]/90 text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#0f172a] md:-right-6"
                        aria-label="Next certificate"
                    >
                        <RiArrowRightLine size={22} />
                    </button>

                    {/* CERTIFICATE GRID */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        {certificates.map((certificate, index) => {
                            const position =
                                (index - activeIndex + certificates.length) %
                                certificates.length;

                            return (
                                <div
                                    key={index}
                                    className={`group rounded-xl border border-cyan-400/20 bg-[#081a2e]/70 p-2 shadow-[0_0_20px_rgba(0,200,255,0.04)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] ${index === activeIndex
                                            ? "border-cyan-400/40"
                                            : ""
                                        }`}
                                >
                                    {/* IMAGE */}
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white">
                                        <img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        {/* Image glow */}
                                        <div className="pointer-events-none absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/5" />
                                    </div>

                                    {/* CARD CONTENT */}
                                    <div className="px-2 pb-2 pt-4">
                                        <h3 className="min-h-[38px] text-xs font-semibold leading-5 text-white sm:text-sm">
                                            {certificate.title}
                                        </h3>

                                        <p className="mt-1 text-[11px] text-slate-400">
                                            {certificate.issuer}
                                        </p>

                                        <div className="mt-3 h-[3px] w-7 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-12" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ================= DOTS ================= */}
                <div className="mt-8 flex justify-center gap-2">
                    {certificates.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to certificate ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "w-2.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ================= QUALIFICATION ================= */}
            <div className="relative z-10 mx-auto mt-12 max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#07182b]/70 px-6 py-10 shadow-[0_0_40px_rgba(0,150,255,0.05)] backdrop-blur-md sm:px-10 lg:px-16">

                    {/* Decorative background */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.5fr]">

                        {/* ================= LEFT CONTENT ================= */}
                        <div>
                            {/* Graduation Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                                <RiGraduationCapLine size={34} />
                            </div>

                            <p className="mb-2 text-sm font-medium text-cyan-400">
                                My Qualification
                            </p>

                            <h3 className="text-4xl font-bold leading-tight sm:text-5xl">
                                My{" "}
                                <span className="text-cyan-400">Qualification</span>
                            </h3>

                            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                                Building a strong foundation in technology and computer
                                science to create a better future.
                            </p>

                            {/* Decorative line */}
                            <div className="mt-6 h-[3px] w-28 -skew-x-12 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

                            <p className="mt-8 text-sm italic text-cyan-300">
                                Always Learning ↗
                            </p>
                        </div>

                        {/* ================= RIGHT TIMELINE ================= */}
                        <div className="relative">

                            {/* Qualification Cards */}
                            <div className="lg:pl-16">
                                {qualifications.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="group relative"
                                        >
                                            {/* Connector line */}
                                            <div
                                                className={`absolute -left-16 top-1/2 hidden h-[2px] w-16 -translate-y-1/2 lg:block ${index === 0
                                                        ? "bg-cyan-400"
                                                        : index === 1
                                                            ? "bg-emerald-400"
                                                            : index === 2
                                                            ? "bg-violet-400"
                                                            : "bg-blue-400"
                                                    }`}
                                            />

                                            {/* Node */}
                                            <div
                                                className={`absolute -left-[20px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full lg:block ${item.dot} shadow-[0_0_12px_currentColor]`}
                                            />

                                            {/* Card */}
                                            <div className="relative flex items-center gap-5 rounded-2xl border border-cyan-400/20 bg-[#0a2037]/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#0d2944] hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] sm:p-5">

                                                {/* Icon */}
                                                <div
                                                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                                                >
                                                    <Icon size={27} />
                                                </div>

                                                {/* Text */}
                                                <div className="min-w-0">
                                                    <h4 className="text-base font-bold text-white sm:text-lg">
                                                        {item.title}
                                                    </h4>

                                                    <p className="mt-1 text-sm text-slate-400">
                                                        {item.institute}
                                                    </p>
                                                </div>

                                                {/* Arrow */}
                                                <RiArrowRightLine
                                                    size={24}
                                                    className="ml-auto shrink-0 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;