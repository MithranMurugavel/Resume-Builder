import {
    Mail,
    Phone,
    MapPin,
    Globe,
    Briefcase,
    GraduationCap,
    Code2,
    UserRound
} from "lucide-react";

const UniqueTemplate = ({ data, accentColor }) => {

    const formatDate = (dateStr) => {
        if (!dateStr) return "";

        const [year, month] = dateStr.split("-");

        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    const SectionTitle = ({ icon: Icon, children }) => (
        <div className="flex items-center gap-2 mb-4">
            <Icon
                className="size-4"
                style={{ color: accentColor }}
            />

            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
                {children}
            </h2>

            <div className="h-px bg-gray-200 flex-1 ml-2" />
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800 px-10 py-9">

            {/* ================= HEADER ================= */}
            <header className="pb-6 border-b border-gray-200">

                <div className="flex justify-between items-start gap-8">

                    <div>
                        <h1
                            className="text-4xl font-black tracking-tight"
                            style={{ color: accentColor }}
                        >
                            {data.personal_info?.full_name || "Your Name"}
                        </h1>

                        <p className="mt-2 text-sm font-medium text-gray-500 tracking-wide">
                            SOFTWARE DEVELOPER
                        </p>
                    </div>

                    <div className="text-right text-xs text-gray-600 space-y-2">

                        {data.personal_info?.email && (
                            <div className="flex justify-end items-center gap-2">
                                <span>{data.personal_info.email}</span>
                                <Mail className="size-3.5" />
                            </div>
                        )}

                        {data.personal_info?.phone && (
                            <div className="flex justify-end items-center gap-2">
                                <span>{data.personal_info.phone}</span>
                                <Phone className="size-3.5" />
                            </div>
                        )}

                        {data.personal_info?.location && (
                            <div className="flex justify-end items-center gap-2">
                                <span>{data.personal_info.location}</span>
                                <MapPin className="size-3.5" />
                            </div>
                        )}

                        {data.personal_info?.website && (
                            <div className="flex justify-end items-center gap-2">
                                <span className="break-all">
                                    {data.personal_info.website}
                                </span>
                                <Globe className="size-3.5" />
                            </div>
                        )}

                    </div>

                </div>

            </header>


            {/* ================= MAIN CONTENT ================= */}
            <main className="pt-7">

                {/* ================= SUMMARY ================= */}
                {data.professional_summary && (
                    <section className="mb-7">

                        <SectionTitle icon={UserRound}>
                            Profile
                        </SectionTitle>

                        <p className="text-[13px] leading-6 text-gray-700">
                            {data.professional_summary}
                        </p>

                    </section>
                )}


                {/* ================= EXPERIENCE ================= */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-7">

                        <SectionTitle icon={Briefcase}>
                            Experience
                        </SectionTitle>

                        <div className="space-y-6">

                            {data.experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[145px_1fr] gap-5"
                                >

                                    {/* Date */}
                                    <div className="text-xs text-gray-500 pt-1">
                                        <p className="font-semibold text-gray-700">
                                            {formatDate(exp.start_date)}
                                        </p>

                                        <p className="mt-0.5">
                                            {exp.is_current
                                                ? "Present"
                                                : formatDate(exp.end_date)}
                                        </p>
                                    </div>


                                    {/* Experience Content */}
                                    <div className="relative pl-5 border-l-2"
                                        style={{
                                            borderColor: accentColor
                                        }}
                                    >

                                        <div
                                            className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full"
                                            style={{
                                                backgroundColor: accentColor
                                            }}
                                        />

                                        <h3 className="font-bold text-gray-900 text-[15px]">
                                            {exp.position}
                                        </h3>

                                        <p
                                            className="text-sm font-semibold mt-1"
                                            style={{ color: accentColor }}
                                        >
                                            {exp.company}
                                        </p>

                                        {exp.description && (
                                            <p className="mt-2 text-[13px] leading-6 text-gray-700 whitespace-pre-line">
                                                {exp.description}
                                            </p>
                                        )}

                                    </div>

                                </div>
                            ))}

                        </div>

                    </section>
                )}


                {/* ================= PROJECTS ================= */}
                {data.project && data.project.length > 0 && (
                    <section className="mb-7">

                        <SectionTitle icon={Code2}>
                            Selected Projects
                        </SectionTitle>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-5">

                            {data.project.map((proj, index) => (
                                <div
                                    key={index}
                                    className="group"
                                >

                                    <div className="flex items-start gap-2">

                                        <span
                                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{
                                                backgroundColor: accentColor
                                            }}
                                        />

                                        <div>

                                            <h3 className="font-bold text-sm text-gray-900">
                                                {proj.name}
                                            </h3>

                                            {proj.description && (
                                                <p className="text-xs leading-5 text-gray-600 mt-1">
                                                    {proj.description}
                                                </p>
                                            )}

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </section>
                )}


                {/* ================= EDUCATION ================= */}
                {data.education && data.education.length > 0 && (
                    <section className="mb-7">

                        <SectionTitle icon={GraduationCap}>
                            Education
                        </SectionTitle>

                        <div className="space-y-4">

                            {data.education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between gap-6"
                                >

                                    <div>

                                        <h3 className="font-bold text-sm text-gray-900">
                                            {edu.degree}
                                            {edu.field && ` in ${edu.field}`}
                                        </h3>

                                        <p className="text-xs text-gray-600 mt-1">
                                            {edu.institution}
                                        </p>

                                        {edu.gpa && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                GPA: {edu.gpa}
                                            </p>
                                        )}

                                    </div>

                                    {edu.graduation_date && (
                                        <p className="text-xs text-gray-500 whitespace-nowrap">
                                            {formatDate(edu.graduation_date)}
                                        </p>
                                    )}

                                </div>
                            ))}

                        </div>

                    </section>
                )}


                {/* ================= SKILLS ================= */}
                {data.skills && data.skills.length > 0 && (
                    <section>

                        <SectionTitle icon={Code2}>
                            Technical Skills
                        </SectionTitle>

                        <div className="flex flex-wrap gap-2">

                            {data.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 bg-gray-50 text-gray-700"
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </section>
                )}

            </main>

        </div>
    );
};

export default UniqueTemplate;