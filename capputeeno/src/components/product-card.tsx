import { formatPrice } from "@/utils/format_price"
import Image from "next/image"
import { styled } from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 256px;

    img {
        width: 256px;
        height: 300px;
        border-radius: 10px;
        transition: transform 150ms ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;

        > div {
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0px;
            background: var(--shapes);
        }
    }
`

export function ProductCard(props : ProductCardProps){
    const price = formatPrice(props.price)

    return(
        <Card>
            <Image width={256} height={300} alt={props.title} src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}