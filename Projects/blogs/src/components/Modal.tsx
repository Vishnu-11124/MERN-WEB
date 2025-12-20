const Modal: React.FC<{ children: React.ReactNode, onClose: () => void }> = ({children, onClose}) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {children}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-red-500 text-gray-600 hover:text-white rounded-full font-bold text-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 z-10"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default Modal