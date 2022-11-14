import Link from "next/link"

export default function ItemsTable({ items }) {
  return (
    <table className='table-auto w-full mt-20' cellPadding={10}>
      <thead className='text-left'>
        <tr className='font-bold border-b-2 border-gray-200'>
          {/* <th className='pb-4'>ID</th> */}
          <th className='pb-4'>Key</th>
          <th className='pb-4'>EN</th>
          <th className='pb-4'>ES</th>
          {/* <th className='pb-4'>Category</th> */}
          <th className='pb-4'>Category</th>
        </tr>
      </thead>
      <tbody>
        {!items?.length &&
          <tr className='p-4 dark:text-brand'>
            <td colSpan={9}>
              No results
            </td>
          </tr>
        }
        {items?.map((item) => (
          <tr key={item._id} className='outline outline-transparent hover:outline-brand hover:bg-gray-300 dark:hover:bg-gray-900 hover:cursor-pointer'>
            {/* <td>
              <Link href={`/admin/manage/items/${item._id}`}>
                <a>{item._id} </a>
              </Link>
            </td> */}
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
            {/* <td className='truncate'>
              {item.category}
            </td> */}
            <td className=''>
              <Link href={`/admin/manage/items/${item._id}`}>
                <a>{item.categoryName}</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
