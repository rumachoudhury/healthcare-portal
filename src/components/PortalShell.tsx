"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  UserRound,
  FileText,
  Settings,
  Bell,
  Plus,
  Search,
  Menu,
  X,
  HeartPulse,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const navigation = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Appointments", href: "/appointments", icon: CalendarDays },
  { label: "Patients", href: "/patients", icon: Users },
  { label: "Doctors", href: "/doctors", icon: UserRound },
  { label: "Prescriptions", href: "/prescriptions", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function PortalShell({
  title,
  subtitle,
  action,
  children,
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7f9] text-slate-800 lg:flex">
      {menuOpen && (
        <button
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200/80 bg-white p-5 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/20">
              <HeartPulse size={23} />
            </span>
            <span>
              <span className="block text-lg font-bold tracking-tight">
                MediCare
              </span>
              <span className="block text-xs text-slate-500">
                Healthcare Portal
              </span>
            </span>
          </Link>
          <button
            aria-label="Close menu"
            className="rounded-lg p-2 text-slate-500 lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-3 mt-9 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Main menu
        </p>
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${
                  active
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                <Icon size={19} strokeWidth={active ? 2.3 : 1.8} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-teal-100 bg-teal-50 p-4">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-teal-700">
            <Plus size={18} />
          </div>
          <p className="text-sm font-bold text-teal-950">Need assistance?</p>
          <p className="mt-1 text-xs leading-5 text-teal-700">
            Our care support team is available 24/7.
          </p>
          <button className="mt-3 w-full rounded-lg bg-teal-700 px-3 py-2 text-xs font-bold text-white hover:bg-teal-800">
            Contact support
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-[78px] items-center justify-between border-b border-slate-200/80 bg-[#f4f7f9]/90 px-5 backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="rounded-xl border border-slate-200 bg-white p-2.5 lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 md:text-xl">
                {title}
              </h1>
              <p className="mt-0.5 hidden text-xs text-slate-500 sm:block">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-400 md:flex">
              <Search size={16} />
              <input
                aria-label="Search"
                className="w-32 bg-transparent text-sm text-slate-700 placeholder:text-slate-400"
                placeholder="Search..."
              />
            </div>
            <button
              aria-label="Notifications"
              className="relative rounded-xl border border-slate-200 bg-white p-3 text-slate-600"
            >
              <Bell size={18} />
              <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
            </button>
            {action}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
              AU
            </div>
          </div>
        </header>
        <div className="p-5 md:p-8">{children}</div>
      </main>
    </div>
  );
}
