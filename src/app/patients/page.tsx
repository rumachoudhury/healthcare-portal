import PortalShell from "../../components/PortalShell";
import { Plus, Search } from "lucide-react";

const patients = [
  ["Olivia Martin", "34 years", "olivia@example.com", "Active", "OM"],
  ["James Anderson", "41 years", "james@example.com", "Active", "JA"],
  ["Sophia Taylor", "28 years", "sophia@example.com", "New", "ST"],
  ["William Brown", "52 years", "william@example.com", "Follow-up", "WB"],
];

export default function PatientsPage() {
  return (
    <PortalShell
      title="Patients"
      subtitle="Manage patient records and care"
      action={
        <button className="hidden items-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-bold text-white sm:flex">
          <Plus size={17} /> Add patient
        </button>
      }
    >
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Total patients</p>
          <p className="mt-3 text-3xl font-bold">1,284</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">New this month</p>
          <p className="mt-3 text-3xl font-bold">86</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Follow-ups</p>
          <p className="mt-3 text-3xl font-bold">124</p>
        </div>
      </section>
      <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5">
          <h2 className="font-bold">Patient directory</h2>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-slate-400">
            <Search size={15} />
            <input
              className="w-36 bg-transparent text-sm"
              placeholder="Search patients"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-400">
              <tr>
                <th className="px-5 py-3">Patient</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {patients.map((row) => (
                <tr key={row[0]}>
                  <td className="px-5 py-4">
                    <span className="flex items-center gap-3 font-bold">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-xs text-teal-700">
                        {row[4]}
                      </span>
                      {row[0]}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-500">{row[1]}</td>
                  <td className="px-4 py-4 text-slate-500">{row[2]}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                      {row[3]}
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
