"use client"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { name: "Лента", href: "/dashboard/ribbon" },
    { name: "Профиль", href: "/dashboard/profile" },
  ];
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      <Header />

      <div className="px-[30px]">
        <div className="relative  flex rounded-[5px]  justify-around border border-[#003A73] bg-white p-1 w-full">
          {tabs.map((tab) => {
            const isActive =
              pathname === tab.href ||
              (tab.href === "/dashboard/ribbon" && pathname === "/dashboard");

            return (
              <button
                key={tab.href}
                onClick={() => router.push(tab.href)}
                className={`relative z-10 px-4 cursor-pointer py-1 text-sm font-medium transition-colors ${isActive ? "text-white" : "text-black"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 z-0  w-full rounded-[10px] bg-[#003A73]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.name}</span>
              </button>
            );
          })}
        </div>
        <div className='w-full h-[4px] my-[16px] rounded-[9px] bg-[var(--color3)]'></div>

        <div>{children}</div>
      </div>
      <Footer active4={true} />
    </div>
  );
}
