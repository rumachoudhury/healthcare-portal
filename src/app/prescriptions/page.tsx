"use client";

import { useMemo, useState } from "react";
import PortalShell from "../../components/PortalShell";
import { Plus, Search, FileText, CheckCircle2, Clock, X } from "lucide-react";

const prescriptions = [
  {
    id: "RX-10482",
    patient: "Olivia Martin",
    medication: "Atorvastatin 20mg",
    doctor: "Dr. Sarah Wilson",
    status: "Active",
  },
  {
    id: "RX-10481",
    patient: "James Anderson",
    medication: "Lisinopril 10mg",
    doctor: "Dr. Michael Chen",
    status: "Active",
  },
  {
    id: "RX-10479",
    patient: "Sophia Taylor",
    medication: "Cetirizine 10mg",
    doctor: "Dr. Emily Davis",
    status: "Completed",
  },
];

export default function PrescriptionsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const filteredPrescriptions = useMemo(() => {
    return prescriptions.filter((item) => {
      const matchesSearch = [
        item.id,
        item.patient,
        item.medication,
        item.doctor,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter = filter === "All" || item.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const stats = [
    {
      title: "Total prescriptions",
      value: prescriptions.length,
      icon: FileText,
    },
    {
      title: "Active",
      value: prescriptions.filter((p) => p.status === "Active").length,
      icon: CheckCircle2,
    },
    {
      title: "Completed",
      value: prescriptions.filter((p) => p.status === "Completed").length,
      icon: Clock,
    },
  ];

  return (
    <PortalShell
      title="Prescriptions"
      subtitle="Manage medication records"
      action={
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-bold text-white hover:bg-teal-800"
        >
          <Plus size={17} />
          New prescription
        </button>
      }
    >
      <div className="space-y-6">
        {/* Summary cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ title, value, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">{title}</p>
                <Icon size={20} className="text-teal-700" />
              </div>
              <p className="mt-3 text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Prescriptions table */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold">Recent prescriptions</h2>
              <p className="mt-1 text-xs text-slate-500">
                View and manage prescription records
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3">
                <Search size={17} className="text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search prescriptions..."
                  className="w-full py-2 text-sm outline-none sm:w-48"
                />
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none"
              >
                <option value="All">All statuses</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-400">
                <tr>
                  <th className="px-5 py-3">Reference</th>
                  <th className="px-4 py-3">Patient</th>
                  <th className="px-4 py-3">Medication</th>
                  <th className="px-4 py-3">Prescriber</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredPrescriptions.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-bold text-teal-700">
                      {row.id}
                    </td>
                    <td className="px-4 py-4">{row.patient}</td>
                    <td className="px-4 py-4 text-slate-500">
                      {row.medication}
                    </td>
                    <td className="px-4 py-4 text-slate-500">{row.doctor}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          row.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredPrescriptions.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-10 text-center text-slate-400"
                    >
                      No prescriptions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* New prescription modal placeholder */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">New prescription</h2>
                <button onClick={() => setShowForm(false)}>
                  <X size={20} />
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Prescription creation will be connected to your database in the
                next step.
              </p>
              <button
                onClick={() => setShowForm(false)}
                className="mt-5 w-full rounded-xl bg-teal-700 px-4 py-3 text-sm font-bold text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </PortalShell>
  );
}
