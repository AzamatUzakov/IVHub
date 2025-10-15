"use client"
import { useState } from "react";

export default function ProfileForm() {
    const [role, setRole] = useState("1");
    const [direction, setDirection] = useState("ИСТ");
    const [group, setGroup] = useState("09-562");
    const [subgroup, setSubgroup] = useState("1");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            role,
            direction,
            group,
            subgroup,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-[450px] mx-auto mt-6 gap-[20px] font-[Montserrat]"
        >
            {/* Роль */}
            <div className="flex flex-col gap-[7px]">
                <label className="text-[13px] font-medium text-[#111827]">
                    Выберите роль
                </label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border border-[var(--color6)] rounded-xl h-[56px] px-4 text-[var(--color9)] outline-none focus:border-black transition-colors"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <p className="text-[12px] text-[#6B7280]">
                    Роль выдается после модерации (по всем вопросам @norrthh)
                </p>
            </div>

            {/* Направление */}
            <div className="flex flex-col gap-[7px]">
                <label className="text-[13px] font-medium text-[#111827]">
                    Выберите свое направление
                </label>
                <select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    className="border border-[var(--color6)] rounded-xl h-[56px] px-4 text-[var(--color9)] outline-none focus:border-black transition-colors"
                >
                    <option value="ИСТ">ИСТ</option>
                    <option value="ПМИ">ПМИ</option>
                    <option value="ФИИТ">ФИИТ</option>
                </select>
            </div>

            {/* Группа */}
            <div className="flex flex-col gap-[7px]">
                <label className="text-[13px] font-medium text-[#111827]">
                    Выберите свою группу
                </label>
                <select
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    className="border border-[var(--color6)] rounded-xl h-[56px] px-4 text-[var(--color9)] outline-none focus:border-black transition-colors"
                >
                    <option value="09-562">09-562</option>
                    <option value="09-563">09-563</option>
                    <option value="09-564">09-564</option>
                </select>
            </div>

            {/* Номер подгруппы */}
            <div className="flex flex-col gap-[7px]">
                <label className="text-[13px] font-medium text-[#111827]">
                    Выберите номер группы
                </label>
                <select
                    value={subgroup}
                    onChange={(e) => setSubgroup(e.target.value)}
                    className="border border-[var(--color6)] rounded-xl h-[56px] px-4 text-[var(--color9)] outline-none focus:border-black transition-colors"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>

            {/* Кнопка */}
            <button
                type="submit"
                className="mt-[24px] w-[160px] h-[48px] bg-[var(--color11)] rounded-[20px] text-[var(--white)] font-semibold mx-auto transition-colors hover:opacity-90"
            >
                Сохранить
            </button>
        </form>
    );
}
