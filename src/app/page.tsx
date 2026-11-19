// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import {
  LayoutDashboard,
  CalendarDays,
  Users,
  UserRound,
  FileText,
  Settings,
  Search,
  Bell,
  Plus,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  { title: "Total Patients", value: "1,284", change: "+12.5%", icon: Users },
  { title: "Total Doctors", value: "48", change: "+4.2%", icon: UserRound },
  { title: "Appointments", value: "356", change: "+8.1%", icon: CalendarDays },
  { title: "Prescriptions", value: "892", change: "+6.3%", icon: FileText },
];

const appointments = [
  {
    patient: "Olivia Martin",
    doctor: "Dr. Sarah Wilson",
    date: "Nov 19, 2026",
    time: "09:00 AM",
    status: "Confirmed",
  },
  {
    patient: "James Anderson",
    doctor: "Dr. Michael Chen",
    date: "Nov 19, 2026",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    patient: "Sophia Taylor",
    doctor: "Dr. Emily Davis",
    date: "Nov 20, 2026",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    patient: "William Brown",
    doctor: "Dr. James Wilson",
    date: "Nov 20, 2026",
    time: "01:30 PM",
    status: "Cancelled",
  },
];

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Appointments", icon: CalendarDays },
  { label: "Patients", icon: Users },
  { label: "Doctors", icon: UserRound },
  { label: "Prescriptions", icon: FileText },
  { label: "Settings", icon: Settings },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 md:flex">
      <aside className="w-full border-r border-slate-200 bg-white p-6 md:min-h-screen md:w-64">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-xl bg-teal-600 p-2 text-white">
            <Plus size={25} />
          </div>
          <div>
            <h1 className="text-xl font-bold">MediCare</h1>
            <p className="text-xs text-slate-500">Healthcare Portal</p>
          </div>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        <nav className="space-y-2">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  index === 0
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                <Icon size={19} />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-12 rounded-2xl bg-teal-50 p-4">
          <p className="font-semibold text-teal-900">Need help?</p>
          <p className="mt-2 text-xs leading-5 text-teal-700">
            Contact our support team for assistance.
          </p>
          <button className="mt-3 rounded-lg bg-teal-600 px-3 py-2 text-xs font-semibold text-white">
            Contact Support
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-5 md:p-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <p className="mt-1 text-sm text-slate-500">
              Welcome back! Here is your healthcare overview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-slate-200 bg-white p-3">
              <Search size={19} />
            </button>
            <button className="rounded-xl border border-slate-200 bg-white p-3">
              <Bell size={19} />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                    <Icon size={22} />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <ArrowUpRight size={15} />
                    {stat.change}
                  </span>
                </div>
                <p className="mt-5 text-sm text-slate-500">{stat.title}</p>
                <h3 className="mt-1 text-3xl font-bold">{stat.value}</h3>
              </div>
            );
          })}
        </section>

        <section className="mb-8 grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold">Appointment Overview</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Monthly appointment activity
                </p>
              </div>
              <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
                This Month
              </span>
            </div>

            <div className="h-64">
              <div className="flex h-full items-end justify-around gap-3 border-b border-l border-slate-200 px-3">
                {[45, 65, 52, 80, 60, 92, 70, 85, 55, 75, 95, 68].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex h-full flex-1 flex-col justify-end"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full rounded-t-md bg-teal-500 transition hover:bg-teal-700"
                      />
                    </div>
                  ),
                )}
              </div>
              <div className="flex justify-around pt-3 text-xs text-slate-400">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold">Quick Actions</h3>
            <p className="mt-1 text-xs text-slate-500">Common tasks</p>

            <div className="mt-6 space-y-3">
              <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left text-sm font-medium hover:bg-slate-50">
                <Plus className="text-teal-600" size={20} />
                Add New Patient
              </button>
              <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left text-sm font-medium hover:bg-slate-50">
                <CalendarDays className="text-teal-600" size={20} />
                Book Appointment
              </button>
              <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left text-sm font-medium hover:bg-slate-50">
                <UserRound className="text-teal-600" size={20} />
                Add New Doctor
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-bold">Recent Appointments</h3>
              <p className="mt-1 text-xs text-slate-500">
                Latest scheduled appointments
              </p>
            </div>
            <button className="text-sm font-semibold text-teal-700">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs text-slate-400">
                  <th className="pb-4 font-medium">Patient</th>
                  <th className="pb-4 font-medium">Doctor</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Time</th>
                  <th className="pb-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.patient}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="py-4 font-semibold">
                      {appointment.patient}
                    </td>
                    <td className="py-4 text-slate-500">
                      {appointment.doctor}
                    </td>
                    <td className="py-4 text-slate-500">{appointment.date}</td>
                    <td className="py-4 text-slate-500">
                      <span className="flex items-center gap-2">
                        <Clock size={14} />
                        {appointment.time}
                      </span>
                    </td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          appointment.status === "Confirmed"
                            ? "bg-emerald-50 text-emerald-700"
                            : appointment.status === "Pending"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-red-50 text-red-600"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="py-6 text-center text-xs text-slate-400">
          © 2026 MediCare Healthcare Portal. Portfolio demo with fictional data.
        </footer>
      </main>
    </div>
  );
}
