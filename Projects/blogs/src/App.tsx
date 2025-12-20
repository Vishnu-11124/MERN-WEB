import { IoMdAddCircle } from "react-icons/io"
import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
import TopicsList from "./components/TopicsList"
import TrendsList from "./components/TrendsList"
import { useState } from "react"
import type { Blog } from "./types"
import Modal from "./components/Modal"
import BlogForm from "./components/BlogForm"
import ArticleList from "./components/ArticleList"


const App = () => {
  const [isModalOpen,setModelOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined)

  const openModalForNewBlog = () => {
    setEditingBlog(undefined)
    setModelOpen(true)
  }

  const openModelForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModelOpen(true);
  }



  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <TopicsList/>

      <div className="flex justify-center gap-6 px-4 py-6">
        <section className="hidden lg:block w-64">
          <div className="sticky top-20">
            <button 
              onClick={openModalForNewBlog}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <span>Add New Blog</span>
              <IoMdAddCircle className="text-lg"/>
            </button>
          </div>
        </section>

        <div className="flex-1 max-w-4xl">
          <div className="lg:hidden mb-6">
            <button 
              onClick={openModalForNewBlog}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <span>Add New Blog</span>
              <IoMdAddCircle className="text-lg"/>
            </button>
          </div>
          <ArticleList onEdit={openModelForEdit}/>
        </div>

        {
          isModalOpen && ( <Modal onClose={() => setModelOpen(false)}>
            <BlogForm existingBlog ={editingBlog} onClose={() => setModelOpen(false)}  />
          </Modal>

          )
        }
        <div className="hidden lg:block w-100">
          <div className="sticky top-20 space-y-6">
            <PeopleToFollow/>
            <TrendsList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App