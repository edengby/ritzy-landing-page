export default function Footer() {
    return (
        <footer className="border-t border-border/60 mt-16">
            <div className="container-max py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} Ritzy Labs. All rights reserved.</p>
                <nav className="flex gap-6">
                    <a className="hover:text-slate-200" href="#privacy">Privacy</a>
                    <a className="hover:text-slate-200" href="#terms">Terms</a>
                    <a className="hover:text-slate-200" href="#contact">Contact</a>
                </nav>
            </div>
        </footer>
    );
}
