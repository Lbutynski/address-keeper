import { Button } from "@/components/Button"


export const ListComponent =  ({_id,title,street,city,postalCode,country,...otherProps}) => {
  
  return (
    <div>
    <h2>{title}</h2>
    <span>{`${street}, ${city} ${postalCode} ${country}`}</span>
      <Button className="">Edit</Button>
  </div>
  )
}