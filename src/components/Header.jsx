import Link from "next/link"

export const Header = () => (
  <div className="w-full">
    <ul className="flex flex-row w-full  m-5 justify-between">
      <Link href="/">
        <li className="p-5 bg-blue-500 rounded-md text-white">Home</li>
      </Link>
      <Link href="/create">
        <li className="p-5 bg-blue-500 rounded-md text-white ">Create</li>
      </Link>
    </ul>
  </div>
)
