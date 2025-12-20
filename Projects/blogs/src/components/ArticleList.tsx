import { useBlogs } from "../shared/BlogContext"
import type { Blog } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}


const ArticleList: React.FC<ArticleListProps>= ({onEdit}) => {
  const {blogs, deleteBlog} = useBlogs()
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {blogs.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-8xl mb-6">📝</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-3">No articles yet</h3>
          <p className="text-gray-500 text-lg">Start creating your first blog post!</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map((blog) => (
                <ArticleCard key={blog.id} article={blog} onDelete={() => deleteBlog(blog.id)} onEdit={() => onEdit(blog)}/>
            ))
          }
        </div>
      )}
    </div>
  )
}

export default ArticleList