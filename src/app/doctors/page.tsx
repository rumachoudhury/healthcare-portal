import PortalShell from "../../components/PortalShell";
import { Plus, Star } from "lucide-react";

const doctors = [
  ["Dr. Sarah Wilson", "General Medicine", "4.9", "Available", "SW"],
  ["Dr. Michael Chen", "Cardiology", "4.8", "In consultation", "MC"],
  ["Dr. Emily Davis", "Pediatrics", "5.0", "Available", "ED"],
  ["Dr. James Wilson", "Neurology", "4.7", "Off duty", "JW"],
];

export default function DoctorsPage() {
  return (
    <PortalShell
      title="Doctors"
      subtitle="Care teams and availability"
      action={
        <button className="hidden items-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-bold text-white sm:flex">
          <Plus size={17} /> Add doctor
        </button>
      }
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {doctors.map((doctor) => (
          <article
            key={doctor[0]}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700">
                {doctor[4]}
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-600">
                <Star size={13} fill="currentColor" />
                {doctor[2]}
              </span>
            </div>
            <h2 className="mt-4 font-bold">{doctor[0]}</h2>
            <p className="mt-1 text-xs text-slate-500">{doctor[1]}</p>
            <button className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-teal-700 hover:bg-teal-50">
              View profile
            </button>
          </article>
        ))}
      </section>
    </PortalShell>
  );
}
