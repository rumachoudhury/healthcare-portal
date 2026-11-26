import PortalShell from "../../components/PortalShell";
import { Bell, Lock, Building2, Palette } from "lucide-react";

export default function SettingsPage() {
  const sections = [
    [Building2, "Organization", "Clinic details and operational information"],
    [Bell, "Notifications", "Email and appointment alerts"],
    [Lock, "Security", "Password and authentication settings"],
    [Palette, "Appearance", "Theme and display preferences"],
  ] as const;
  return (
    <PortalShell title="Settings" subtitle="Configure your portal preferences">
      <section className="max-w-3xl space-y-3">
        {sections.map(([Icon, title, subtitle]) => (
          <button
            key={title}
            className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left hover:border-teal-200 hover:bg-teal-50/30"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <Icon size={19} />
            </span>
            <span className="flex-1">
              <span className="block font-bold">{title}</span>
              <span className="mt-1 block text-xs text-slate-500">
                {subtitle}
              </span>
            </span>
            <span className="text-slate-300">›</span>
          </button>
        ))}
      </section>
    </PortalShell>
  );
}
