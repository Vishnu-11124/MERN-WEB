import { SearchProvider } from "./search"
import { DataProvider } from "./data"


export const MainWrapper = ({children}) => {
    return(
        <DataProvider>
            <SearchProvider>
                {children}
            </SearchProvider>
        </DataProvider>
    )
}