export default function ServicesLoading() {
  return (
    <div className="section-padding animate-pulse">
      <div className="container-wide">
        <div className="h-10 w-1/2 bg-slate-200 rounded-xl mb-3 mx-auto" />
        <div className="h-5 w-1/3 bg-slate-100 rounded-lg mb-12 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 p-6">
              <div className="h-48 bg-slate-200 rounded-xl mb-6" />
              <div className="h-4 w-1/4 bg-slate-100 rounded mb-3" />
              <div className="h-6 w-3/4 bg-slate-200 rounded mb-3" />
              <div className="h-4 w-full bg-slate-100 rounded mb-2" />
              <div className="h-4 w-2/3 bg-slate-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
