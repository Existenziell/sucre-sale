import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const BackBtn = ({ link }) => (
  <Link href={link}>
    <a className="max-w-max bg-brand mb-8 text-white shadow hover:text-brand-dark hover:shadow-none transition-all p-1 rounded-sm block">
      <ChevronLeftIcon className='w-6' />
    </a>
  </Link>
)

export default BackBtn
