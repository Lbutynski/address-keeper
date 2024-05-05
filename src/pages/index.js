import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { Header } from "@/components/Header"
import { ListComponent } from "@/components/ListComponent"
import { Select } from "@/components/Select"
import { categoryFormFields, categoryList } from "@/constants/list"
import axios from "axios"
import { Formik } from "formik"
import { useState } from "react"
import * as yup from "yup"
export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/address")

  return {
    props: {
      addresses,
    },
  }
}
// eslint-disable-next-line max-lines-per-function
const HomePage = ({ addresses }) => {
  const handleSubmit = () => {
    const filterCategory = category === "No Filter" ? null : category
    setFilter({ category: filterCategory })
  }
  const handleChange = (e) => {
    setCategory(e.target.value)
  }
  const initialValues = {}
  const validationSchema = yup.object({})
  const [filter, setFilter] = useState({ category: null })
  const [category, setCategory] = useState()

  return (
    <>
      <Header />
      <main className="flex">
        <div className="basis-1/3">
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="flex flex-row">
                <h3>Category :</h3>
                <Select
                  name="category"
                  optionsList={["No Filter", ...categoryList]}
                  onChange={handleChange}
                />
              </div>
              {categoryFormFields[category]}
              <Button type="submit">Filter</Button>
            </Form>
          </Formik>
        </div>
        <div className="flex flex-col bg-blue-100 m-5 basis-2/3">
          {addresses
            .filter(
              (address) =>
                filter.category === null ||
                address.category === filter.category,
            )
            .map((address) => (
              <ListComponent
                key={address._id}
                _id={address._id}
                title={address.title}
                street={address.street}
                city={address.city}
                postalCode={address.postalCode}
                country={address.country}
                category={address.category}
              />
            ))}
        </div>
      </main>
    </>
  )
}
export default HomePage
