"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-40 border-b border-border/60 bg-[color:var(--bg)]/70 backdrop-blur">
            <div className="container-max h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-accent/20 border border-accent/40 grid place-items-center">
            <span className="h-2 w-2 rounded bg-accent block" />
          </span>
                    <span className="font-semibold tracking-widest">RITZY</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-slate-300">
                    <Link href="#features" className="hover:text-white">Features</Link>
                    <Link href="#pricing" className="hover:text-white">Pricing</Link>
                    <Link href="#faq" className="hover:text-white">FAQ</Link>
                    <Link href="#contact" className="btn btn-ghost">Book a demo</Link>
                </nav>

                <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-border/60 bg-[color:var(--bg)]">
                    <div className="container-max py-4 flex flex-col gap-4">
                        <Link href="#features" onClick={() => setOpen(false)}>Features</Link>
                        <Link href="#pricing" onClick={() => setOpen(false)}>Pricing</Link>
                        <Link href="#faq" onClick={() => setOpen(false)}>FAQ</Link>
                        <Link className="btn btn-ghost w-fit" href="#contact" onClick={() => setOpen(false)}>
                            Book a demo
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
