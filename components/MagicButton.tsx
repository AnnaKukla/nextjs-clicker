"use client"; // Обязательная строка для кнопок, которые реагируют на нажатия

import { useState } from "react";

export default function MagicButton() {
  // Это "память" кнопки. Изначально счет равен 0.
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount(count + 1)} // При клике увеличиваем счет
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition-all"
    >
      ✨ Нажато раз: {count}
    </button>
  );
}