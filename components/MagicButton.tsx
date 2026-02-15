"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function MagicButton({ id }: { id: number }) {
  const [count, setCount] = useState(0);

  // 1. При загрузке страницы: Спрашиваем у базы текущее число
  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase
        .from('buttons')
        .select('count')
        .eq('id', id)
        .single();

      if (data) {
        setCount(data.count);
      }
    };
    fetchCount();
  }, []);

  // 2. При клике: Обновляем и экран, и базу
  const handleClick = async () => {
    const newCount = count + 1;
    setCount(newCount); // Сначала меняем цифру на экране (чтобы было быстро)
    
    // Потом отправляем в базу
    await supabase
      .from('buttons')
      .update({ count: newCount })
      .eq('id', id);
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition-all block"
    >
      ✨ Кнопка {id}: {count}
    </button>
  );
}