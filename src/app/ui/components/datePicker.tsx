import { useState } from "react";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState("");

    return (
        // <div className="flex flex-col items-center space-y-4">
        <div className="relative w-1/6 my-6 sm:my-12 shadow">

            <label htmlFor="date" className="text-gray-700 font-medium">
                Selecciona una fecha:
            </label>
            <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {selectedDate && (
                <p className="text-gray-600">
                    Fecha seleccionada:{" "}
                    <span className="font-semibold">{selectedDate}</span>
                </p>
            )}
        </div>
    );
};

export default DatePicker;

