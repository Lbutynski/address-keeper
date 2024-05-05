import clsx from "clsx"
import Link from "next/link"

export const ListComponent = ({
  _id,
  title,
  street,
  city,
  postalCode,
  country,
  category,
  ...otherProps
}) => (
  <Link
    href={`/address/${_id}`}
    className={clsx("m-5 bg-blue-300 rounded-lg p-5", {
      "bg-red-300": category === "Museum",
      " bg-yellow-300": category === "Bar",
      "bg-green-300": category === "Parc",
    })}
  >
    <div {...otherProps}>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <span>{`${street}, ${city} ${postalCode} ${country}`}</span>
    </div>
  </Link>
)
