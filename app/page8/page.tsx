import { PlusIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col border-1 border-gray-200 bg-gray-200">
      <header className="sticky top-0 z-10 flex h-20 w-full justify-center border-1 border-gray-500 bg-gray-500 p-3">
        <p>header</p>
      </header>
      <div className="mt-4 flex flex-row">
        <aside className="sticky top-30 m-3 h-180 w-50 border-1 bg-gray-100 p-3">left navi</aside>
        <main className="relative z-0 mx-4 w-200 border-1 p-3">
          <div className="h-50 border-1">c1</div>
          <div className="sticky top-20 h-50 border-1 bg-red-100">sticky</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1"></div>
          <div className="sticky top-70 h-50 border-1 bg-red-100">sticky</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
        </main>
        <aside className="sticky top-30 m-3 h-180 w-50 border-1 bg-gray-100 p-3">right navi</aside>
        <button className="fixed right-10 bottom-10 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-950 text-neutral-200 shadow-lg shadow-gray-700 hover:bg-neutral-600">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
