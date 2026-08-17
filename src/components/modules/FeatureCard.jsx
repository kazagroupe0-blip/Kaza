export default function FeatureCard({ title, description, accent = 'green' }) {
  const accentClasses = {
    green: 'bg-kaza-green text-white',
    peach: 'bg-kaza-peach text-kaza-green',
    mint: 'bg-kaza-mint text-white',
    amber: 'bg-kaza-amber text-white',
  };

  return (
    <article className={['rounded-2xl p-5 shadow-sm ring-1 ring-black/5', accentClasses[accent]].join(' ')}>
      <h3 className="mb-2 font-[var(--font-sora)] text-xl font-semibold">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </article>
  );
}
