import { Header } from "@/components/Header"
import { ListComponent } from "@/components/ListComponent"
import axios from "axios"
export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/address")

  return {
    props: {
      addresses,
    },
  }
}
const HomePage = ({ addresses }) => (
  <>
    <Header />
    <main>
      <div className="flex flex-col bg-blue-100 m-5">
        {addresses.map((address) => (
          <ListComponent
            key={address._id}
            _id={address._id}
            title={address.title}
            street={address.street}
            city={address.city}
            postalCode={address.postalCode}
            country={address.country}
          />
        ))}
      </div>
    </main>
  </>
)
export default HomePage
