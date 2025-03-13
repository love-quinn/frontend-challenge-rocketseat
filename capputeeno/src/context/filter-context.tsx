/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { FilterType } from "@/types/filter-types";
// import { PriorityTypes } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    setSearch: (_value: string) => {},
    setPage: (_value: number) => {},
    setType: (_value: FilterType) => {},
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)

    return(
        <FilterContext.Provider 
            value={{
                search, 
                page, type, 
                setSearch, 
                setType, 
                setPage,
            }}>
            {children}
        </FilterContext.Provider>
    )
}