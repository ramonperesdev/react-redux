export function SkeletonModule() {
  return (
    <div className="animate-pulse">
      <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-slate-500 text-xs font-semibold"></div>
        <div className="flex flex-col gap-2 text-left">
          <div className="w-32 h-3 bg-slate-500 rounded-full"></div>
          <div className="w-12 h-2 bg-slate-500 rounded-full"></div>
        </div>
        <div className="flex h-5 w-5 ml-auto rounded-full items-center justify-center bg-slate-500 text-xs font-semibold"></div>
      </div>
      <div className="flex flex-col p-6 gap-4 items-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full gap-3"
          >
            <div className="h-5 w-5 rounded-full bg-slate-500 flex items-center justify-center text-xs font-semibold"></div>
            <div className="w-28 h-3 mr-auto bg-slate-500 rounded-full"></div>
            <div className="w-8 h-3 bg-slate-500 rounded-full ml-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
