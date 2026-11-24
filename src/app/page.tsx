"use client";

import Link from "next/link";
import { useState } from "react";

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

import PortalShell from "../components/PortalShell";
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
  Stethoscope,
  Activity,
  ShieldCheck,
  ChevronRight,
  CircleCheck,
  TrendingDown,
  MoreHorizontal,
} from "lucide-react";

const dashboardStats = [
  {
    label: "Total patients",
    value: "1,284",
    change: "12.5%",
    trend: "up",
    icon: Users,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    label: "Appointments",
    value: "356",
    change: "8.1%",
    trend: "up",
    icon: CalendarDays,
    accent: "bg-violet-50 text-violet-700",
  },
  {
    label: "Active doctors",
    value: "48",
    change: "4.2%",
    trend: "up",
    icon: Stethoscope,
    accent: "bg-teal-50 text-teal-700",
  },
  {
    label: "Prescriptions",
    value: "892",
    change: "2.4%",
    trend: "down",
    icon: FileText,
    accent: "bg-amber-50 text-amber-700",
  },
];

const todaySchedule = [
  {
    time: "09:00",
    name: "Olivia Martin",
    type: "General consultation",
    initials: "OM",
    color: "bg-violet-100 text-violet-700",
  },
  {
    time: "10:30",
    name: "James Anderson",
    type: "Cardiology follow-up",
    initials: "JA",
    color: "bg-blue-100 text-blue-700",
  },
  {
    time: "12:00",
    name: "Sophia Taylor",
    type: "Routine examination",
    initials: "ST",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    time: "14:30",
    name: "William Brown",
    type: "Lab review",
    initials: "WB",
    color: "bg-amber-100 text-amber-700",
  },
];

const patientActivity = [
  {
    name: "Emma Thompson",
    event: "Completed blood test",
    time: "12 min ago",
    initials: "ET",
  },
  {
    name: "Noah Williams",
    event: "Booked a consultation",
    time: "28 min ago",
    initials: "NW",
  },
  {
    name: "Ava Rodriguez",
    event: "Prescription renewed",
    time: "1 hr ago",
    initials: "AR",
  },
];

export default function Home() {
  const [month, setMonth] = useState("This month");

  return (
    <PortalShell
      title="Good morning, Admin"
      subtitle="Monday, November 23"
      action={
        <button className="hidden items-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-teal-700/10 hover:bg-teal-800 sm:flex">
          <Plus size={17} /> New appointment
        </button>
      }
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article
              key={stat.label}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.accent}`}
                >
                  <Icon size={20} />
                </span>
                <span
                  className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold ${
                    stat.trend === "up"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Compared with last month
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(280px,.75fr)]">
        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30 md:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold text-slate-900">
                Appointment analytics
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Visits scheduled across the year
              </p>
            </div>
            <select
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600"
            >
              <option>This month</option>
              <option>Last 6 months</option>
              <option>This year</option>
            </select>
          </div>

          <div className="mt-7 flex h-64 items-end gap-2 border-b border-slate-100 px-1">
            {[38, 58, 45, 72, 54, 86, 68, 78, 62, 92, 74, 88].map(
              (height, index) => (
                <div key={index} className="group flex h-full flex-1 items-end">
                  <div
                    className="relative w-full rounded-t-md bg-teal-500/80 group-hover:bg-teal-600"
                    style={{ height: `${height}%` }}
                    title={`${height * 4} appointments`}
                  >
                    <span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded bg-slate-900 px-2 py-1 text-[10px] text-white group-hover:block">
                      {height * 4}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="mt-3 grid grid-cols-12 text-center text-[10px] text-slate-400">
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
            ].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-900">Today’s schedule</h2>
              <p className="mt-1 text-xs text-slate-500">
                4 appointments remaining
              </p>
            </div>
            <button
              aria-label="More options"
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-50"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
          <div className="mt-5 space-y-1">
            {todaySchedule.map((item) => (
              <button
                key={item.time}
                className="group flex w-full items-center gap-3 rounded-xl p-2.5 text-left hover:bg-slate-50"
              >
                <span className="w-12 text-xs font-bold text-slate-400">
                  {item.time}
                </span>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${item.color}`}
                >
                  {item.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold text-slate-800">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-slate-400">
                    {item.type}
                  </span>
                </span>
                <ChevronRight
                  size={16}
                  className="text-slate-300 group-hover:text-teal-600"
                />
              </button>
            ))}
          </div>
          <Link
            href="/appointments"
            className="mt-4 flex w-full items-center justify-center rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-teal-700 hover:border-teal-200 hover:bg-teal-50"
          >
            View full schedule
          </Link>
        </article>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)]">
        <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/30">
          <div className="flex items-center justify-between px-5 py-5 md:px-6">
            <div>
              <h2 className="font-bold text-slate-900">Recent appointments</h2>
              <p className="mt-1 text-xs text-slate-500">
                Latest patient visits
              </p>
            </div>
            <Link
              href="/appointments"
              className="text-xs font-bold text-teal-700"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-slate-50/70 text-[11px] uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-6 py-3 font-bold">Patient</th>
                  <th className="px-4 py-3 font-bold">Doctor</th>
                  <th className="px-4 py-3 font-bold">Date</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Olivia Martin",
                    "Dr. Sarah Wilson",
                    "Nov 23, 09:00",
                    "Confirmed",
                    "OM",
                  ],
                  [
                    "James Anderson",
                    "Dr. Michael Chen",
                    "Nov 23, 10:30",
                    "Pending",
                    "JA",
                  ],
                  [
                    "Sophia Taylor",
                    "Dr. Emily Davis",
                    "Nov 23, 12:00",
                    "Confirmed",
                    "ST",
                  ],
                ].map((row) => (
                  <tr key={row[0]} className="hover:bg-slate-50/60">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-3 font-bold">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[10px] text-slate-600">
                          {row[4]}
                        </span>
                        {row[0]}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-500">{row[1]}</td>
                    <td className="px-4 py-4 text-slate-500">{row[2]}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          row[3] === "Confirmed"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {row[3]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30 md:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Recent activity</h2>
            <Activity size={18} className="text-teal-600" />
          </div>
          <div className="mt-5 space-y-5">
            {patientActivity.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
                  {item.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-slate-800">
                    {item.name}
                  </p>
                  <p className="mt-1 truncate text-[11px] text-slate-400">
                    {item.event}
                  </p>
                </div>
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <footer className="flex items-center justify-center gap-2 py-8 text-[11px] text-slate-400">
        <ShieldCheck size={14} /> Secure healthcare management portal
      </footer>
    </PortalShell>
  );
}

export function LegacyHome() {
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
              <Link
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
              </Link>
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
