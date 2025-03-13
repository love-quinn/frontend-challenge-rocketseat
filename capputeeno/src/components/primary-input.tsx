import { styled } from "styled-components"
import { SearchIcon } from "./search-loupe"
import { InputHTMLAttributes } from "react"

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background-color: var(--bg-secondary);
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 353px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%)
    }
`

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
        <div>
            <InputContainer>
                <PrimaryInput {...props}/>
                <SearchIcon/>
            </InputContainer>
        </div>
    )
}