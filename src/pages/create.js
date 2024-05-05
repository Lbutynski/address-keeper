/* eslint-disable max-lines */
import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { Header } from "@/components/Header"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"
import { useState } from "react"
import { Select } from "@/components/Select"
import { useRouter } from "next/router"
import { categoryFormFields, categoryList } from "@/constants/list"

const initialValues = {
  title: "",
  street: "",
  city: "",
  postalCode: "",
  country: "",
}
const validationSchema = yup.object({
  title: yup.string().min(1).required().label("title"),
  street: yup.string().min(1).required().label("street"),
  city: yup.string().min(1).required().label("city"),
  postalCode: yup.number().min(5).required().label("postalCode"),
  country: yup.string().min(1).required().label("country"),
})
// eslint-disable-next-line max-lines-per-function
const CreatePage = () => {
  const handleSubmit = async ({
    title,
    street,
    city,
    postalCode,
    country,
    cuisineType,
    starNumber,
    medianPrice,
    artisticCurrent,
    artType,
    barPriceOrder,
    museumPriceOrder,
    parcPriceOrder,
    museumPrice,
    parcPrice,
    barType,
    parcType,
    isPublic,
  }) => {
    const restaurantDetails =
      category === "Restaurant"
        ? { cuisineType, starNumber, medianPrice }
        : null
    const museumDetails =
      category === "Museum"
        ? { artisticCurrent, artType, museumPriceOrder, museumPrice }
        : null
    const barDetails = category === "Bar" ? { barType, barPriceOrder } : null
    const parcDetails =
      category === "Parc"
        ? { parcType, isPublic, parcPriceOrder, parcPrice }
        : null
    const request = await axios.post("/api/address", {
      title,
      street,
      city,
      postalCode,
      country,
      category,
      restaurantDetails,
      museumDetails,
      barDetails,
      parcDetails,
    })
    router.push(`/address/${request.data._id}`)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const [category, setCategory] = useState("None")
  const router = useRouter()

  return (
    <>
      <Header />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="m-5">
          <FormField name="title" placeholder="Enter a title" />
          <FormField name="street" placeholder="Enter number and street" />
          <FormField name="city" placeholder="Enter city" />
          <FormField name="postalCode" placeholder="Enter the postal code" />
          <FormField name="country" placeholder="Enter country" />
          <Select
            name="category"
            optionsList={categoryList}
            onChange={handleCategory}
          />
          {categoryFormFields[category]}
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  )
}
export default CreatePage
