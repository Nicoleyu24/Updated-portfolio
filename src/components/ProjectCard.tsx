import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
    year: string;
    company: string;
    projectArea: string;
    role: string;
    industry?: string;
    visitSiteUrl?: string;
}

export function ProjectCard({
    year,
    company,
    projectArea,
    role,
    industry,
    visitSiteUrl = "#",
}: ProjectCardProps) {
    return (
        <div className="w-full max-w-[1000px] mt-0 mb-48 group animate-in fade-in duration-1000 slide-in-from-bottom-12">
            <div className="flex flex-col gap-6 px-4 md:px-0">
                <Badge
                    variant="outline"
                    className="bg-[oklch(0.96_0.018_27.4)] text-primary border-none px-3 py-1.5 text-[11px] font-black uppercase tracking-widest rounded-full w-fit"
                >
                    {year}
                </Badge>

                <h2 className="text-4xl font-bold tracking-tight">
                    <span className="text-[#9BA1A6] font-medium">{company}</span>
                    <span className="text-[#9BA1A6] mx-4 font-light opacity-50">/</span>
                    <span className="text-[#1A1A1A]">{projectArea}</span>
                    {industry && (
                        <>
                            <span className="text-[#9BA1A6] mx-4 font-light opacity-50">/</span>
                            <span className="text-[#9BA1A6] font-medium">{industry}</span>
                        </>
                    )}
                </h2>

                <p className="text-[#4A4A4A] text-xl leading-relaxed max-w-2xl font-normal">
                    {role}
                </p>

                <a
                    href={visitSiteUrl}
                    className="group/link text-primary font-bold text-xs tracking-[0.2em] flex items-center gap-3 hover:gap-4 transition-all w-fit uppercase"
                >
                    VISIT SITE
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>

                <a
                    href={visitSiteUrl}
                    {...(visitSiteUrl.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="w-full aspect-[16/10] bg-muted/30 rounded-[40px] border border-border/40 overflow-hidden relative shadow-sm group-hover:shadow-xl transition-all duration-700 ease-out cursor-pointer group-hover:-translate-y-1 block"
                >
                    {/* Decorative elements for the frame */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                            <ArrowRight className="w-8 h-8 text-[#1a1a1a]/40" />
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-[#BDBDBD] font-light text-xl tracking-wide uppercase opacity-40 group-hover:opacity-10 transition-opacity">
                            Future Content
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
}
