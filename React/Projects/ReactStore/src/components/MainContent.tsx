import { useEffect, useState } from "react"
import { useFilter } from "./FilterContext"
import { Tally3 } from "lucide-react"
import axios from "axios"
import BookCard from "./BookCard"

const MainContent = () => {
    const { searchQuery, selectedCategory, minPrice, maxPrice, keyword} = useFilter()

    const [ products, setProducts ] = useState<any[]>([])
    const [ filter, setFilter ] = useState('all')
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ dropdownOpen, setDropdownOpen ] = useState(false)

    const itemsPerPage = 12

    useEffect(() => {
        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`

        if (keyword) {
            url = `https://dummyjson.com/products/search?q=${keyword}`
        }

        axios.get(url)
        .then((res) => {
            setProducts(res.data.products)
            // console.log(res.data.products)
        })
        .catch((err) => {
            console.log(err)
        })
    },[currentPage, keyword])

    const getFilteredProducts = () => {
        let filteredProducts = products

        if (selectedCategory) {
           filteredProducts = filteredProducts.filter(product => product.category === selectedCategory)
        }

        if (minPrice !== undefined ){
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice)
        }

        if (maxPrice !== undefined ){
            filteredProducts = filteredProducts.filter(product => product.price <= maxPrice)
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        switch (filter) {
            case "expensive":
                return filteredProducts.sort((a, b) => b.price - a.price)
            case "cheap":
                return filteredProducts.sort((a, b) => a.price - b.price)  
            case "popular":
                return filteredProducts.sort((a, b) => b.rating - a.rating)
            default:
                return filteredProducts          
                
        }

    }

    const filteredProducts = getFilteredProducts()

    const totalProducts = 120
    const totalPages = Math.ceil(totalProducts / itemsPerPage)

    const handlePageChange = (newPage: number) => {
        if ( newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    const getPaginationButtons = () => {
        const buttons : number[] = []
        let startPage = Math.max(1, currentPage - 2)
        let endPage = Math.min(totalPages, currentPage + 2)

        if ( currentPage -2 < 1){
            endPage = Math.min(totalPages, endPage + (2 - currentPage - 1))
        }

        if ( currentPage +2 > totalPages){
            startPage = Math.max(1, startPage - (currentPage + 2 - totalPages))
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(i)
        }

        return buttons
    }


  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5 bg-gray-50 min-h-screen">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="relative my-5">
                <button
                onClick={() => setDropdownOpen(!dropdownOpen)} className="border border-gray-300 bg-white px-4 py-2 rounded-full flex items-center hover:bg-gray-50 transition-colors shadow-sm">
                    <Tally3 className="mr-2" />
                    {
                        filter === 'all' ? 'Filter' : filter.charAt(0).toUpperCase() + filter.slice(1)
                    }
                </button>

                {
                    dropdownOpen && (
                        <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full sm:w-40 shadow-lg z-10">
                            <button onClick={() => setFilter("cheap")} className="block px-4 py-2 w-full text-left hover:bg-gray-100 transition-colors rounded-t-lg">
                                Cheap
                            </button>
                            <button onClick={() => setFilter("expensive")} className="block px-4 py-2 w-full text-left hover:bg-gray-100 transition-colors">
                                Expensive
                            </button>
                            <button onClick={() => setFilter("popular")} className="block px-4 py-2 w-full text-left hover:bg-gray-100 transition-colors rounded-b-lg">
                                Popular
                            </button>
                        </div>
                    )
                }
            </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {/* Product items will be rendered here */}
                {
                    filteredProducts.map((product) => (
                        <BookCard 
                        key={product.id}
                        id={product.id}
                        title= {product.title}
                        image = {product.thumbnail}
                        price={product.price}
                        />
                    ))
                }
        </div>

        {/* Pagination */}
        <div className="flex mt-5 justify-center items-center gap-2">
                <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >Previous</button>

                <div className="flex flex-wrap justify-center gap-2">
                    {
                        getPaginationButtons().map((page) => (
                            <button key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 border rounded-lg transition-colors ${
                                currentPage === page 
                                ? 'bg-black text-white border-black' 
                                : 'bg-white border-gray-300 hover:bg-gray-50'
                            }`}
                            >{page}</button>
                        ))
                    }
                </div>

                <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >Next</button>
        </div>
      </div>
    </section>
  )
}

export default MainContent