export default function Page() {
  return (
    <div className="flex h-screen flex-col border-1">
      {/* h-screenは必須。これがないと画面全体を確保してくれない */}
      <p>contents</p>
      <div className="flex grow items-end justify-center border-1">
        <p>footer</p>
      </div>
    </div>
  );
}
