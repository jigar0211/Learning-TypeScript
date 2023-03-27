import { ReactNode } from "react"

interface ListProps<T> {
    items: T[],
    render: (items:T) => ReactNode
}

const List = <T,>({items,render}:ListProps<T>) => {
  return (
    <ul>
        {items.map((items,i) => (
            <li key={i}>   
                {render(items)}
            </li>
        ))}
    </ul>
  )
}
export default List