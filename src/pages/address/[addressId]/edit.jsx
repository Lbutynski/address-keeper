import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { Header } from "@/components/Header"
import { Select } from "@/components/Select"
import { categoryFormFields, categoryList } from "@/constants/list"
import axios from "axios"
import { Formik } from "formik"
import { useRouter } from "next/router"
import * as yup from "yup"
import { useState } from "react"
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
const EditPage = ({ address }) => {
  const router = useRouter()
  const handleChange = (e) => {
    setCategory(e.target.value)
  }
  const [category, setCategory] = useState(address.category)
  // eslint-disable-next-line max-lines-per-function
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
    priceOrder,
    price,
    barType,
    parcType,
    isPublic,
  }) => {
    const restaurantDetails =
      category === "Restaurant"
        ? {
            cuisineType,
            starNumber,
            medianPrice,
          }
        : null
    const museumDetails =
      category === "Museum"
        ? {
            artisticCurrent,
            artType,
            priceOrder,
            price,
          }
        : null
    const barDetails = category === "Bar" ? { barType, priceOrder } : null
    const parcDetails =
      category === "Parc"
        ? {
            parcType,
            isPublic,
            priceOrder,
            price,
          }
        : null
    await axios.patch(`/api/address/${address._id}`, {
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
    router.push(`/address/${address._id}`)
  }
  const initialValues = {
    title: address.title,
    street: address.street,
    city: address.city,
    postalCode: address.postalCode,
    country: address.country,
    category: address.category,

    cuisineType: address.restaurantDetails?.cuisineType,
    starNumber: address.restaurantDetails?.starNumber,
    medianPrice: address.restaurantDetails?.medianPrice,

    artisticCurrent: address.museumDetails?.artisticCurrent,
    artType: address.museumDetails?.artType,
    priceOrder: address.museumDetails?.priceOrder,

    barType: address.barDetails?.barType,
    parcType: address.parcDetails?.parcType,

    isPublic: address.parcDetails?.isPublic,
  }
  const validationSchema = yup.object({
    title: yup.string().min(1).required().label("title"),
    street: yup.string().min(1).required().label("street"),
    city: yup.string().min(1).required().label("city"),
    postalCode: yup.number().min(5).required().label("postalCode"),
    country: yup.string().min(1).required().label("country"),
  })

  return (
    <>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField name="title" placeholder="Enter a title" />
          <FormField name="street" placeholder="Enter number and street" />
          <FormField name="city" placeholder="Enter city" />
          <FormField name="postalCode" placeholder="Enter the postal code" />
          <FormField name="country" placeholder="Enter country" />
          <Select
            name="category"
            optionsList={categoryList}
            onChange={handleChange}
          />
          {categoryFormFields[category]}
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  )
}
export default EditPage
