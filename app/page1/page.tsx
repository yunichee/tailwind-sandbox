export default function Page() {
  return (
    <>
      <div className="flex h-screen flex-col border-1 p-5">
        {/* h-screen で現在のウインドウサイズの大きさを要素の高さとして確保する */}
        <div className="h-9/10">
          {" "}
          {/* h-screeのうちメインコンテンツは90%のサイズを使う */}
          <p>親要素に className="flex" を指定すると横並びになる(デフォルトは縦に並ぶ)</p>
          <div className="flex">
            <div className="border-1">横並び</div>
            <div className="border-1">横並び</div>
          </div>
          <p>親要素に className="flex justify-center" で中央横並び</p>
          <div className="flex justify-center">
            <div className="border-1">中央横並び</div>
            <div className="border-1">中央横並び</div>
          </div>
          <p>親要素に className="flex justify-between" で両端にくっついた均等並び</p>
          <div className="flex justify-between">
            <div className="border-1">左端</div>
            <div className="border-1">真ん中</div>
            <div className="border-1">右端</div>
          </div>
        </div>
        <div className="m-2 flex h-1/10 items-end justify-center border-1 border-amber-700">
          {/* h-1/10とフッター領域の高さを確保して、そこを items-end にすることで子要素が下に配置される 
          フッター領域を作らないと items-end の領域を絞り込めない(全部下に寄ってしまう)
          (基本は上から順に子要素を並べたいが、フッターだけは下に配置したい)
          また、要素の高さをh-screenと指定してウインドウ領域全体を確保したうえで、h-1/10とフッター領域を確保
          さらに justify-centerをここで指定することで中央ぞろえになる */}
          <p className="border-1 border-b-amber-950">hoge</p>
          <p className="border-1 border-b-amber-950">hoge</p>
        </div>
      </div>
    </>
  );
}
