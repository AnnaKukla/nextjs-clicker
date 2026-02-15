import MagicButton from "@/components/MagicButton";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-black gap-4">
      <h1 className="text-4xl text-white font-bold">
        Привет, это мой первый Next.js проект! 🚀
      </h1>
      
      {/* Вот здесь мы ставим нашу кнопку */}
      <MagicButton />
      <MagicButton />
      <MagicButton />
    </div>
  );
}