import Link from "next/link"

export const Header = () => {
  return (
    <div className="w-full">
      <ul className="flex flex-row gap-5 w-full m-5">
        <li className="p-5 bg-blue-500 rounded-md text-white"><Link href="/">Home</Link></li>
        <li className="p-5 bg-blue-500 rounded-md text-white"><Link href="/create">Create</Link></li>
      </ul>
    </div>
  )
}
