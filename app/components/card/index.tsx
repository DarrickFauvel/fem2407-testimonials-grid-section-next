import Image from "next/image"

import imageQuote from "@/assets/images/bg-pattern-quotation.svg"

type CardProps = {
  item: {
    name: string
    title: string
    head: string
    quote: string
    image: string
  }
}

const Card = ({ item }: CardProps) => {
  return (
    <li className="card relative flex flex-col gap-4 rounded-lg p-8 pt-6">
      <header className="flex items-center gap-4">
        <Image
          className="card-image rounded-full w-[30px]"
          src={`/images/${item.image}`}
          width={100}
          height={100}
          alt="avatar"
        />
        <div className="flex flex-col gap-1 leading-none">
          <span className="card-name font-medium text-fem-13px">
            {item.name}
          </span>
          <span className="card-title font-medium text-fem-11px opacity-50">
            {item.title}
          </span>
        </div>
      </header>

      <h2 className="card-head font-semibold text-[20px] leading-6">
        {item.head}
      </h2>

      <p className="card-quote font-normal text-fem-13px opacity-70">
        {item.quote}
      </p>

      <Image
        className="card-quote-image"
        src={imageQuote}
        width={100}
        height={100}
        alt="quote image"
      />
    </li>
  )
}
export default Card
