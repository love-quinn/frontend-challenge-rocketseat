"use client"

import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";
// import { FilterByPriority } from "./filter-by-priority";

// interface FilterBarProps {

// }

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar(){
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer>
    )
}