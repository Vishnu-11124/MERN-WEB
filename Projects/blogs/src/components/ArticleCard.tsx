import type React from "react";
import type { Blog } from "../types";
import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}


const ArticleCard: React.FC<ArticleCardProps> = ({article, onDelete, onEdit}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-300 group">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
            <span className="text-sm">📅</span>
            {article.time}
          </span>
          
          <div className="flex items-center gap-2">
            <button 
              className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              title="Bookmark"
            >
              <FaBookmark className="text-sm"/>
            </button>
            <button 
              onClick={onEdit}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              title="Edit"
            >
              <FaEdit className="text-sm"/>
            </button>
            <button 
              onClick={onDelete}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              title="Delete"
            >
              <FaTrash className="text-sm"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard