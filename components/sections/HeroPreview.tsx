import {
  LayoutDashboard,
  ListChecks,
  Bell,
  CalendarDays,
  TrendingUp,
  Settings,
} from "lucide-react";

const NAV = [
  { Icon: LayoutDashboard, active: true },
  { Icon: ListChecks, active: false },
  { Icon: Bell, active: false },
  { Icon: CalendarDays, active: false },
  { Icon: TrendingUp, active: false },
  { Icon: Settings, active: false },
];

const SUBS = [
  { name: "Netflix", color: "#E50914", price: "Rp 153.000", cycle: "/bln", status: "active" },
  { name: "Spotify", color: "#1DB954", price: "Rp 54.990", cycle: "/bln", status: "active" },
  { name: "Vidio", color: "#E63946", price: "Rp 399.000", cycle: "/thn", status: "trial" },
];

const ACTIVE = [
  { name: "Netflix", color: "#E50914" },
  { name: "Spotify", color: "#1DB954" },
  { name: "ChatGPT", color: "#10A37F" },
];

export function HeroPreview() {
  return (
    <div className="overflow-hidden rounded-card border border-white/70 bg-white/75 shadow-clay backdrop-blur-xl">
      <div className="flex items-center gap-3 border-b border-white/50 bg-white/60 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
          <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
          <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
        </div>
        <span className="flex-1 truncate text-center text-xs font-medium text-text-muted">
          Langganin
        </span>
        <span className="w-12" aria-hidden />
      </div>

      <div className="flex">
        <div className="hidden w-12 shrink-0 flex-col items-center gap-1 border-r border-white/50 py-3 sm:flex">
          {NAV.map((item, i) => (
            <span
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-[12px] ${
                item.active ? "bg-brand-500 text-white shadow-clay" : "text-text-muted"
              }`}
            >
              <item.Icon size={16} aria-hidden />
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1 space-y-3 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="truncate text-sm font-semibold text-text">Halo, Raka</p>
            <p className="shrink-0 text-sm font-bold tabular-nums text-text">
              Rp 696.000 <span className="font-medium text-text-muted">/bln</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[14px] bg-surface p-2.5 shadow-sm">
              <p className="text-[10px] text-text-muted">Total bulan ini</p>
              <p className="mt-1 truncate text-sm font-bold tabular-nums text-text">Rp 696.000</p>
            </div>
            <div className="rounded-[14px] bg-surface p-2.5 shadow-sm">
              <p className="text-[10px] text-text-muted">Langganan aktif</p>
              <div className="mt-1 flex items-center -space-x-1.5">
                {ACTIVE.map((s) => (
                  <span
                    key={s.name}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold text-white ring-2 ring-surface"
                    style={{ backgroundColor: s.color }}
                    aria-label={s.name}
                  >
                    {s.name[0]}
                  </span>
                ))}
                <span className="text-[10px] font-semibold text-text-subtle">+1</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {SUBS.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2.5 rounded-[14px] bg-surface px-3 py-2 shadow-sm"
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-[8px] text-[10px] font-bold text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.name[0]}
                </span>
                <span className="min-w-0 flex-1 truncate text-xs font-semibold text-text">
                  {s.name}
                </span>
                <span
                  className={`shrink-0 rounded-pill px-2 py-0.5 text-[9px] font-bold ${
                    s.status === "trial" ? "bg-warning/10 text-warning" : "bg-success/10 text-success"
                  }`}
                >
                  {s.status === "trial" ? "Trial" : "Aktif"}
                </span>
                <span className="shrink-0 text-xs font-bold tabular-nums text-text">
                  {s.price}
                  <span className="font-medium text-text-muted">{s.cycle}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}