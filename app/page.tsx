import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4 flex flex-col">
      <Link className="underline" href="/page1">
        <p>flex試し</p>
      </Link>
      <Link className="underline" href="/page2">
        <p>growで残りの高さ確保</p>
      </Link>
      <Link className="underline" href="/page3">
        <p>画面幅80%使う(中央表示)</p>
      </Link>
      <Link className="underline" href="/page4">
        <p>ヘッダー、サイドバー、コンテンツ、フッター</p>
      </Link>
      <Link className="underline" href="/page5">
        <p>ヘッダー、サイドバーを固定</p>
      </Link>
      <Link className="underline" href="/page6">
        <p>ヘッダー、両サイドバー、フッター、sticky版</p>
      </Link>
      <Link className="underline" href="/page7">
        <p>スクロールすると途中からコンテンツが固定される</p>
      </Link>
      <Link className="underline" href="/page8">
        <p>画面右下に丸い固定ボタン</p>
      </Link>
    </div>
  );
}
