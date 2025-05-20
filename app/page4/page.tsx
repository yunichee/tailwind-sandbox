export default function Page() {
  return (
    <div className="flex h-screen flex-col border-1 border-gray-200 bg-gray-200">
      {/* h-screen: 縦幅全体確保
          flex-col: コンテンツを縦並びにする
       */}
      <header className="flex h-1/20 justify-center border-1 border-gray-500 p-3">
        {/* h-1/20: 縦幅のうち5%をヘッダー部分にする
          justify-center: コンテンツを中央ぞろえにする
       */}
        <p>header</p>
      </header>
      <div className="flex h-18/20 flex-row">
        {/* h-18/20: 縦幅のうち90%をコンテンツ部分にする
          flex-row: 子要素を横並びにする
       */}
        <aside className="w-1/5 border-1 p-3">aside</aside>
        <main className="w-4/5 border-1 p-3">main</main>
      </div>
      <footer className="flex grow items-end justify-center border-1 p-3">
        {/* grow: 残りの縦幅を全部フッターにする
          items-end: 子要素を下から並べる
       */}
        <p>footer</p>
      </footer>
    </div>
  );
}
