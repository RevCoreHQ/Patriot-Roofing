export default function BlogLoading() {
  return (
    <div className="section-padding animate-pulse">
      <div className="container-wide">
        <div className="h-10 w-1/3 bg-slate-200 rounded-xl mb-3" />
        <div className="h-5 w-1/2 bg-slate-100 rounded-lg mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-slate-100">
              <div className="aspect-video bg-slate-200" />
              <div className="p-6 space-y-3">
                <div className="h-3 w-1/4 bg-slate-100 rounded" />
                <div className="h-6 w-full bg-slate-200 rounded" />
                <div className="h-4 w-3/4 bg-slate-100 rounded" />
                <div className="h-3 w-1/3 bg-slate-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
