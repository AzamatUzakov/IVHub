import PostBlock from "@/components/PostBlock";

const ribbon: React.FC = () => {
    return (
        <div className="">
            <div className="w-full  rounded-lg border border-gray-300 p-3 bg-white shadow-sm">
                {/* Поле ввода */}
                <textarea
                    placeholder="Что у вас нового ?)"
                    className="w-full resize-none border-none focus:outline-none text-gray-800 placeholder:text-gray-400"
                    rows={2}
                />

                <hr className="my-2" />

                {/* Панель кнопок */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-gray-600">
                        {/* Медиа */}
                        <label className="flex items-center gap-1 cursor-pointer hover:text-blue-800 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                <path d="M3 15l6-6 4 4 8-8" />
                            </svg>
                            <span>Медиа</span>
                            <input type="file" className="hidden" />
                        </label>

                        {/* Файл */}
                        <label className="flex items-center gap-1 cursor-pointer hover:text-blue-800 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M9 12h6M9 16h6M13 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9z" />
                            </svg>
                            <span>Файл</span>
                            <input type="file" className="hidden" />
                        </label>
                    </div>

                    {/* Кнопка отправки */}
                    <button className="bg-blue-900 text-white rounded-full p-2 hover:bg-blue-800 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>

            <div>
                <PostBlock/>
</div>

        </div>
    );
}

export default ribbon;