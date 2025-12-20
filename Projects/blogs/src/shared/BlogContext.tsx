import { createContext, useState, useContext } from "react";
import type { Blog } from "../types";


interface BlogContextType {
    blogs: Blog[],
    addBlog: (newBlog: Blog) => void,
    updateBlog: (updatedBlog: Blog) => void,
    deleteBlog: (id: number) => void,
}

const Blogcontext = createContext<BlogContextType | undefined>(undefined)

export const BlogProvider: React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [blogs, setBlogs] = useState<Blog[]>([])

    const addBlog = (newBlog: Blog) => {
        setBlogs([...blogs, newBlog])
    }

    const updateBlog = (updatedBlog: Blog) => {
        setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)))
    }

    const deleteBlog = (id: number) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }
    return (
        <Blogcontext.Provider value={{blogs, addBlog, updateBlog, deleteBlog}}>
            {children}
        </Blogcontext.Provider>
    )

}

export const useBlogs = () => {
    const context = useContext(Blogcontext)

    if(!context){
        throw new Error("useBlogs must be used within a BlogProvider")
    }

    return context
}

