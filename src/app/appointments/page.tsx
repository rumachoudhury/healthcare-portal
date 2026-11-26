"use client";

import PortalShell from "../../components/PortalShell";
import { CalendarDays, Clock, Plus, Search } from "lucide-react";

const appointments = [
  [
    "Olivia Martin",
    "Dr. Sarah Wilson",
    "Nov 23, 2026",
    "09:00 AM",
    "Confirmed",
  ],
  ["James Anderson", "Dr. Michael Chen", "Nov 23, 2026", "10:30 AM", "Pending"],
  ["Sophia Taylor", "Dr. Emily Davis", "Nov 23, 2026", "12:00 PM", "Confirmed"],
  [
    "William Brown",
    "Dr. James Wilson",
    "Nov 24, 2026",
    "02:30 PM",
    "Cancelled",
  ],
];

export default function AppointmentsPage() {
  return (
    <PortalShell
      title="Appointments"
      subtitle="Schedule and manage patient visits"
      action={
        <button className="hidden items-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-bold text-white sm:flex">
          <Plus size={17} /> New appointment
        </button>
      }
    >
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          ["Today", "12", CalendarDays],
          ["Pending", "5", Clock],
          ["This week", "38", CalendarDays],
        ].map(([label, value, Icon]) => (
          <div
            key={label as string}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label as string}</span>
              <span className="rounded-xl bg-teal-50 p-2.5 text-teal-700">
                <Icon size={18} />
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {value as string}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5">
          <h2 className="font-bold">All appointments</h2>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-slate-400">
            <Search size={15} />
            <input
              className="w-36 bg-transparent text-sm"
              placeholder="Search appointments"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-400">
              <tr>
                <th className="px-5 py-3">Patient</th>
                <th className="px-4 py-3">Doctor</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {appointments.map((row) => (
                <tr key={row[0]} className="hover:bg-slate-50/60">
                  <td className="px-5 py-4 font-bold">{row[0]}</td>
                  <td className="px-4 py-4 text-slate-500">{row[1]}</td>
                  <td className="px-4 py-4 text-slate-500">{row[2]}</td>
                  <td className="px-4 py-4 text-slate-500">{row[3]}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${row[4] === "Confirmed" ? "bg-emerald-50 text-emerald-700" : row[4] === "Pending" ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"}`}
                    >
                      {row[4]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PortalShell>
  );
}
