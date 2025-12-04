export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/images/figueroa-removebg-preview.png"
          alt="Figueroa Cleaning Services"
          className="h-24 w-24 object-contain animate-bounce"
        />
        <p className="text-blue-600 font-semibold">Making It Spotless...</p>
      </div>
    </div>
  )
}
