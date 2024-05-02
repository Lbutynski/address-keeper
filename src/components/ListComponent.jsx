import Link from "next/link"


export const ListComponent =  ({_id,title,street,city,postalCode,country,...otherProps}) => (<Link href={`/address/${_id}`}>
    <div {...otherProps}>
    <h2>{title}</h2>
    <span>{`${street}, ${city} ${postalCode} ${country}`}</span>
  </div>
  </Link>
  )