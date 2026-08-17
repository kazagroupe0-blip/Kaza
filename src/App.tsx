import "./index.css";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <h1 className="font-heading text-4xl text-kaza-green">
        Kaza — Test Theme
      </h1>
      <div className="flex gap-3">
        <span className="px-4 py-2 rounded bg-kaza-mint text-white font-body">
          Payé
        </span>
        <span className="px-4 py-2 rounded bg-kaza-amber text-white font-body">
          En attente
        </span>
        <span className="px-4 py-2 rounded bg-kaza-red text-white font-body">
          Impayé
        </span>
      </div>
      <button className="px-4 py-2 rounded border-2 border-kaza-green text-kaza-green hover:bg-kaza-green hover:text-white transition-colors">
        Bouton Secondary
      </button>
    </main>
  );
}

export default App;
