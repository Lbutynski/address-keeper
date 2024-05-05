import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { InfoField } from "@/components/InfoField"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"

export const getServerSideProps = async ({ params: { addressId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/address/${addressId}`,
  )

  return {
    props: {
      address,
    },
  }
}
// eslint-disable-next-line max-lines-per-function
const DetailsPage = ({ address }) => {
  const handleDelete = async () => {
    await axios.delete(`/api/address/${address._id}`)
    router.push("/")
  }
  const router = useRouter()

  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="flex flex-col m-5 align-middle bg-blue-50 rounded-lg w-1/2 justify-center items-center">
          <InfoField title="Title :" content={address.title} />
          <InfoField
            title="Address :"
            content={`${address.street}, ${address.postalCode} ${address.city}, ${address.country}`}
          />
          <InfoField title="Category :" content={address.category} />
          {address.category === "Restaurant"
            ? [
                <InfoField
                  key="cuisineType"
                  title="Cuisine type :"
                  content={address.restaurantDetails.cuisineType}
                />,
                <InfoField
                  key="starNumber"
                  title="Number of stars :"
                  content={address.restaurantDetails.starNumber}
                />,
                <InfoField
                  key="medianPrice"
                  title="Median price :"
                  content={address.restaurantDetails.medianPrice}
                />,
              ]
            : null}
          {address.category === "Museum"
            ? [
                <InfoField
                  key="artisticCurrent"
                  title="Artistic current :"
                  content={address.museumDetails.artisticCurrent}
                />,
                <InfoField
                  key="artType"
                  title="Type of art :"
                  content={address.museumDetails.artType}
                />,
                <InfoField
                  key="priceOrder"
                  title="Price order :"
                  content={address.museumDetails.priceOrder}
                />,
                <InfoField
                  key="price"
                  name="Price :"
                  content={address.museumDetails.price}
                />,
              ]
            : null}
          {address.category === "Bar"
            ? [
                <InfoField
                  key="barType"
                  title="Type of bar"
                  content={address.barDetails.barType}
                />,
                <InfoField
                  key="priceOrder"
                  title="priceOrder"
                  content={address.barDetails.priceOrder}
                />,
              ]
            : null}
          {address.category === "Parc"
            ? [
                <InfoField
                  key="parcType"
                  title="Type of parc :"
                  content={address.parcDetails.parcType}
                />,
                <InfoField
                  key="isPublic"
                  title="Status of the parc :"
                  content={address.parcDetails.isPublic}
                />,
                <InfoField
                  key="priceOrder"
                  title="priceOrder"
                  content={address.parcDetails.priceOrder}
                />,
                <InfoField
                  key="price"
                  name="Price :"
                  content={address.museumDetails.price}
                />,
              ]
            : null}
          <div>
            <Link href={`/address/${address._id}/edit`}>
              <Button>Edit</Button>
            </Link>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default DetailsPage
