export default function FloatingButton() {
  return (
    <a
      href="tel:224-619-7572"
      className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-6 shadow-2xl hover:bg-blue-700 transition transform hover:scale-110 z-40 flex items-center justify-center"
      title="Call us"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.5 1.5h-21C.67 1.5 0 2.17 0 3v18c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5V3c0-.83-.67-1.5-1.5-1.5zM6.62 19.59c-2.97-1.47-5.76-4.26-7.23-7.23-.4-.81.63-1.61 1.44-1.2 2.72 1.35 5.19 3.82 6.54 6.54.41.81-.39 1.84-1.2 1.44H6.62zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm9.38 7.59c-.81.41-1.61-.63-1.2-1.44 1.35-2.72 3.82-5.19 6.54-6.54.81-.41 1.84.39 1.44 1.2-1.47 2.97-4.26 5.76-7.23 7.23h-.55z" />
      </svg>
    </a>
  )
}
