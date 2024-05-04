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
