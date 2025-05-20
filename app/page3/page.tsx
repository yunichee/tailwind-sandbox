export default function Page() {
  return (
    <div className="flex justify-center">
      {/* 幅指定の親要素で flex jusitify-center を指定すると子要素が中央に寄る */}
      <div className="flex h-screen w-8/10 flex-col border-1 border-gray-300 bg-gray-300">
        {/* w-8/10 で幅80%のコンテンツになる */}
        <p className="h-1/2">contents</p>
        <p className="h-1/5">contents2</p>
        <div className="flex grow items-end justify-center border-1">
          <p>footer</p>
        </div>
      </div>
    </div>
  );
}
