interface BadgeProps {
  label: string;
  color: string;
  logo?: string;
}

export function Badge({ label, color, logo }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: `${color}22`, color }}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt="" className="h-3 w-3" aria-hidden />
      ) : (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}
      {label}
    </span>
  );
}