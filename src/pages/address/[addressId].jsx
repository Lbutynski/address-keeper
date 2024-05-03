import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import axios from "axios"
import Link from "next/link"

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
const DetailsPage = ({ address }) => (
  <>
    <Header />
    <span>{address.title}</span>
    <span>{address.street}</span>
    <span>{address.city}</span>
    <Link href={`/address/${address._id}/edit`}>
      <Button>Edit</Button>
    </Link>
  </>
)
export default DetailsPage
