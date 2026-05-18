import { ArrowLeft, Globe, Zap } from "lucide-react";
import Link from "next/link";

interface PageHeaderProps {
    title?: string;
    subtitle?: string;
    backHref: string;
    variant?: "dark" | "light";
    showLanguage?: boolean;
    languageName?: string;
    children?: React.ReactNode;
}

export const PageHeader = ({
    title,
    subtitle,
    backHref,
    variant = "dark",
    showLanguage = false,
    languageName,
    children,
}: PageHeaderProps) => {
    const isDark = variant === "dark";

    return (
        <header
            className={`${isDark ? "absolute top-0 right-0 left-0 bg-linear-to-b from-black/70 to-transparent text-white" : "relative border-b border-slate-100 bg-white text-slate-900 shadow-sm"} z-20 flex flex-col gap-4 p-4`}
        >
            <div className="flex items-center justify-between gap-2">
                <Link
                    href={backHref}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isDark
                            ? "bg-white/10 backdrop-blur-md hover:bg-white/20"
                            : "bg-slate-100 hover:bg-slate-200"
                    }`}
                >
                    <ArrowLeft size={24} className={isDark ? "text-white" : "text-slate-600"} />
                </Link>

                {children ? (
                    <div className="min-w-0 flex-1">{children}</div>
                ) : (
                    <div className="flex min-w-0 flex-1 flex-col items-center px-2 text-center">
                        <span
                            className={`w-full truncate text-[10px] font-bold tracking-widest uppercase sm:text-xs ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                        >
                            {title}
                        </span>
                        <span className="w-full truncate text-xs font-medium sm:text-sm">
                            {subtitle}
                        </span>
                    </div>
                )}

                <div className="flex shrink-0 items-center justify-end">
                    {showLanguage ? (
                        <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                            <Globe size={14} className="text-emerald-600" />
                            <span className="hidden text-xs font-bold text-slate-700 sm:inline">
                                {languageName || "English"}
                            </span>
                            <span className="text-xs font-bold text-slate-700 sm:hidden">
                                {languageName ? languageName.substring(0, 2).toUpperCase() : "EN"}
                            </span>
                        </div>
                    ) : isDark ? (
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20">
                            <Zap size={20} className="text-amber-400" />
                        </button>
                    ) : (
                        <div className="w-10" />
                    )}
                </div>
            </div>
        </header>
    );
};
