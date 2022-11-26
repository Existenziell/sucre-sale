import Link from "next/link"
import { useEffect, useState } from "react"

export default function ItemsTable({ categories, items }) {
  const [view, setView] = useState('breakfast')
  const [filteredItems, setFilteredItems] = useState(items)

  useEffect(() => {
    const filtered = items.filter(item => (item.categorySlug === view))
    setFilteredItems(filtered)
  }, [view])

  return (
    <>
      <div className="flex mb-4 gap-6 text-sm">
        {categories.map(cat => (
          <div
            key={cat._id}
            onClick={() => setView(cat.key)}
            className={`${view === cat.key ? `active-menu-nav` : `menu-nav`}`}
          >
            {cat.en}
          </div>
        ))}
      </div>

      <table className='table-auto w-full bg-white dark:bg-black' cellPadding={10}>
        <thead className='text-left'>
          <tr className='font-bold border-b-2 border-gray-200'>
            <th className='pb-4'>Key</th>
            <th className='pb-4'>EN</th>
            <th className='pb-4'>ES</th>
            <th className='pb-4'>Category</th>
          </tr>
        </thead>
        <tbody>
          {!filteredItems?.length &&
            <tr className='p-4'>
              <td colSpan={9}>
                No results
              </td>
            </tr>
          }
          {filteredItems?.map((item) => (
            <tr key={item._id} className='outline outline-transparent hover:outline-brand hover:cursor-pointer'>
              <td className='whitespace-nowrap'>
                <Link href={`/admin/manage/items/${item._id}`}>
                  <a>{item.key}</a>
                </Link>
              </td>
              <td className='max-w-[200px] truncate '>
                <Link href={`/admin/manage/items/${item._id}`}>
                  <a>{item.en}</a>
                </Link>
              </td>
              <td className='max-w-[200px] truncate '>
                <Link href={`/admin/manage/items/${item._id}`}>
                  <a>{item.es}</a>
                </Link>
              </td>
              <td className=''>
                <Link href={`/admin/manage/items/${item._id}`}>
                  <a>{item.categoryName}</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
