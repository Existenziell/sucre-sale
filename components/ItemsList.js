import Link from "next/link"

export default function ItemsList({ items }) {
  return (
    <div className='text-sm flex justify-start flex-wrap gap-4 w-full mb-12'>
      {items.map(item => (
        <div key={item.key} className='flex justify-between gap-4 max-w-sm'>
          <Link href={`/admin/manage/items/${item._id}`}>
            <a className='overflow-hidden bg-white dark:bg-black p-4'>
              <p className='whitespace-nowrap'>Key: {item.key}</p>
              {/* <p className='mb-2'>Category: {item.category}</p> */}
              <p className='mb-2'>Category: {item.categoryName}</p>
              <p className='truncate'>EN: {item.en}</p>
              <p className='truncate'>ES: {item.es}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
