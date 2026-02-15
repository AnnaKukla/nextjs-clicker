import MagicButton from "@/components/MagicButton";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-black gap-4">
      <h1 className="text-4xl text-white font-bold text-center">
        Синхронизация с Базой Данных 📡
      </h1>
      
      {/* Выдаем каждой кнопке свой паспорт (ID) */}
      <MagicButton id={1} />
      <MagicButton id={2} />
      <MagicButton id={3} />
    </div>
  );
}