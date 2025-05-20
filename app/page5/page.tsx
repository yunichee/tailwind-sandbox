export default function Page() {
  return (
    <div className="flex flex-col border-1 border-gray-200 bg-gray-200">
      {/* h-screenを指定すると最初に表示されている画面のみがエリアとなってしまうので指定しない
          flex-col: コンテンツを縦並びにする
       */}
      <header className="fixed top-0 flex h-1/20 w-full justify-center border-1 border-gray-500 bg-gray-500 p-3">
        {/* fixed top-0: 上部に固定
         */}
        <p>header</p>
      </header>
      <div className="mt-20 flex h-18/20 flex-row">
        {/* mt-20: fixedで指定したコンテンツは高さがなくなってしまうらしいので、mtを指定して下に下げて表示
         */}
        <aside className="fixed h-full w-1/5 border-1 bg-gray-100 p-3">aside</aside>
        {/* fixed: サイドバーを固定表示
         */}
        <main className="ml-70 w-4/5 border-1 p-3">
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
          <div className="h-50 border-1">c1</div>
        </main>
      </div>
    </div>
  );
}
