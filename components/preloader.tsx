export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-blue-600 font-semibold">Making It Spotless...</p>
      </div>
    </div>
  )
}
