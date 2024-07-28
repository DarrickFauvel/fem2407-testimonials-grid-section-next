import Image from "next/image"

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
    <li className="card flex flex-col gap-4 rounded-lg p-8 pt-6">
      <header className="flex items-center gap-4">
        <Image
          className="rounded-full w-[1.75rem] "
          src={`/images/${item.image}`}
          width={100}
          height={100}
          alt="avatar"
        />
        <div className="flex flex-col">
          <span className="card-name font-medium text-fem-13px">
            {item.name}
          </span>
          <span className="card-title font-medium text-fem-11px">
            {item.title}
          </span>
        </div>
      </header>

      <h2 className="card-head font-semibold text-fem-20px leading-6">
        {item.head}
      </h2>

      <p className="card-quote font-medium text-fem-13px">{item.quote}</p>
    </li>
  )
}
export default Card
