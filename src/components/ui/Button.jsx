export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-kaza-green text-white border-kaza-green hover:opacity-90',
    secondary: 'bg-kaza-peach text-kaza-green border-kaza-peach hover:opacity-90',
    ghost: 'bg-transparent text-kaza-green border-kaza-green hover:bg-white/60',
  };

  return (
    <button
      className={[
        'inline-flex items-center justify-center rounded-xl border px-4 py-2 font-medium transition-all duration-200',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
