import Link from "next/link"

export const Header = () => (
  <div className="w-full">
    <ul className="flex flex-row w-full  m-5 ">
      <Link href="/">
        <li className="p-5 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
          Address Keeper
        </li>
      </Link>
      <Link href="/create">
        <li className="p-5 bg-blue-500 hover:bg-blue-600 rounded-md text-white mx-10">
          Create
        </li>
      </Link>
    </ul>
  </div>
)
