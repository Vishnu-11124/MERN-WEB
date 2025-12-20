import { useEffect,useState } from "react";
import { useBlogs } from "../shared/BlogContext"
import type { Blog } from "../types";

interface BlogFormProps {
    existingBlog?: Blog;
    onClose: () => void;
}
  

const BlogForm: React.FC<BlogFormProps> = ({existingBlog, onClose}) => {
    const {addBlog, updateBlog} = useBlogs()
    const [title, setTitle] = useState(existingBlog?.title || '')
    const [description, setDescription] = useState(existingBlog?.description || '')
    const [image, setImage] = useState(existingBlog?.image || '')
    const [time, setTime] = useState(existingBlog?.time || '')

    useEffect(() => {
        if (existingBlog) {
            setTitle(existingBlog.title)
            setDescription(existingBlog.description)
            setImage(existingBlog.image)
            setTime(existingBlog.time)
        }
    },[existingBlog])

    const handleSubmit = () => {
        const newBlog: Blog = {
            id: existingBlog? existingBlog.id : Date.now(),
            title,
            description,
            image,
            time
    }

    if(existingBlog){
        updateBlog(newBlog)
        onClose()
    } else {
        addBlog(newBlog)
        onClose()
    }
}



  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">{existingBlog ? "✏️" : "📝"}</span>
            {existingBlog? "Edit Blog" : "Add Blog"}
          </h3>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
              Title
            </label>
            <input 
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
              Description
            </label>
            <textarea 
              placeholder="Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
              Image URL
            </label>
            <input 
              type="text" 
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm"
            />
            {image && (
              <div className="mt-2">
                <p className="text-xs text-gray-500 font-semibold mb-1.5 uppercase">Preview:</p>
                <img 
                  src={image} 
                  alt="Preview" 
                  className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
              Date
            </label>
            <input 
              type="date" 
              placeholder="Time" 
              value={time}  
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 text-gray-800 text-sm"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <section className="p-4 bg-gray-50 rounded-b-2xl flex gap-3">
          <button 
            onClick={handleSubmit}
            className="flex-1 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm"
          >
            {existingBlog ? "✓ Update" : "+ Add"}
          </button>
          <button 
            onClick={onClose}
            className="flex-1 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all duration-200 text-sm"
          >
            Cancel
          </button>
        </section>
      </div>
    </div>
  )
}

export default BlogForm