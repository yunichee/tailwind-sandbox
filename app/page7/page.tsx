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
        {/* 見栄えは悪いが、右下に丸い固定ボタンを設置
      見栄えの調整はshadcn/uiのボタンなどを使う */}
        <p className="fixed right-10 bottom-15 z-20 h-12 w-12 cursor-pointer rounded-full border-1 border-black bg-black p-4 text-white">
          ＋
        </p>
      </div>
      <footer className="sticky bottom-0 z-10 flex h-10 w-full justify-center border-1 border-gray-500 bg-gray-500 p-3">
        <p>footer</p>
      </footer>
    </div>
  );
}
