import React, { useState } from 'react'
import data from '../components/data'

const Accordion = () => {
    const [selected, setSelected] = useState()
    const [multiSelect, setMultiSelect] = useState(false)
    const [selectedItems, setselectedItems] = useState([])

    const handleSelection = (currentId) => {
        if (multiSelect === false) {
            setSelected(currentId === selected ? null : currentId)
        }
        else{
            let items = [...selectedItems];
            if (items.includes(currentId)) {
                items = items.filter(id => id !== currentId);
                setselectedItems(items);
            } else {
                items.push(currentId);
                setselectedItems(items);
            }
        }
    }

    return (
    <div className="max-w-xl mx-auto p-6">
        <div className="mb-4 flex justify-end">
            <button 
                onClick={() => setMultiSelect(!multiSelect)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                {multiSelect ? "Disable Multi Select" : "Enable Multi Select"}
            </button>
        </div>

      <div className="space-y-4">
        {
            data && data.length > 0 ? 
            data.map((dataItem) =>(
                <div 
                  key={dataItem.id} 
                  className="border border-gray-300 rounded-lg shadow-sm"
                >
                    <div 
                      onClick={() =>handleSelection(dataItem.id)}
                      className="cursor-pointer p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition rounded-lg"
                    >
                        <h3 className="text-lg font-semibold">{dataItem.question}</h3>
                        <span className="text-xl font-bold">
                          +
                        </span>
                    </div>

                    {
                        (!multiSelect)?
                        selected === dataItem.id && (
                            <div className="p-4 bg-white border-t border-gray-200">
                                <p className="text-gray-700">{dataItem.answer}</p>
                            </div>
                        ):
                        selectedItems.includes(dataItem.id) && (
                            <div className="p-4 bg-white border-t border-gray-200">
                                <p className="text-gray-700">{dataItem.answer}</p>
                            </div>
                        )
                    }
                </div>
            )):
            <div className="text-center text-gray-500">No data found!!</div>
        }
      </div>
    </div>
  )
}

export default Accordion
