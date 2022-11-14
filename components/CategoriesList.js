import Link from "next/link"

export default function CategoriesList({ categories }) {
  return (
    <div className='text-sm flex justify-start flex-wrap gap-4 w-full mb-12'>
      {categories.map(cat => (
        <Link key={cat.key} href={`/admin/manage/categories/${cat._id}`}>
          <a className='bg-white dark:bg-black px-4 py-3 rounded-sm block whitespace-nowrap min-w-[200px]'>
            <p className='text-lg mb-1'>{cat.en}</p>
            <p className='text-sm'>Key: {cat.key}</p>
            <p>Number of items: {cat.items.length}</p>
          </a>
        </Link>
      ))}
    </div>
  )
}
