import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const BackBtn = ({ link }) => (
  <Link href={link}>
    <a className="absolute max-w-max bg-white dark:bg-black mb-8 shadow hover:text-brand hover:shadow-none transition-all p-1 rounded-sm block">
      <ChevronLeftIcon className='w-6' />
    </a>
  </Link>
)

export default BackBtn
