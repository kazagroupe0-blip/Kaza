export default function MainLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-[var(--background-page)] text-kaza-green">
      <header className="border-b border-kaza-green/10 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-[var(--font-sora)] text-xl font-bold">Kaza</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#" className="text-kaza-green/80 hover:text-kaza-green">Accueil</a>
            <a href="#" className="text-kaza-green/80 hover:text-kaza-green">Produits</a>
            <a href="#" className="text-kaza-green/80 hover:text-kaza-green">Services</a>
            <a href="#" className="text-kaza-green/80 hover:text-kaza-green">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {title && (
          <h1 className="mb-8 font-[var(--font-sora)] text-4xl font-bold text-kaza-green">
            {title}
          </h1>
        )}
        {children}
      </main>
    </div>
  );
}
