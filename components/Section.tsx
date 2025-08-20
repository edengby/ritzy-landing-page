import { ReactNode } from "react";

export default function Section({
                                    id,
                                    title,
                                    kicker,
                                    children
                                }: {
    id?: string;
    title: string;
    kicker?: string;
    children: ReactNode;
}) {
    return (
        <section id={id} className="container-max py-16 sm:py-24">
            <div className="max-w-2xl mb-10">
                {kicker && <span className="badge mb-4">{kicker}</span>}
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
            </div>
            {children}
        </section>
    );
}
