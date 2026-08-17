export default function InputField({ label, type = 'text', placeholder, value, onChange, className = '' }) {
  return (
    <label className="block w-full space-y-2 text-sm font-medium text-kaza-green">
      {label && <span>{label}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={[
          'w-full rounded-xl border border-kaza-green/20 bg-white px-4 py-3 text-kaza-green outline-none transition focus:border-kaza-mint focus:ring-2 focus:ring-kaza-mint/20',
          className,
        ].join(' ')}
      />
    </label>
  );
}
