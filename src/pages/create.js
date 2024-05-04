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
import {
  artisticCurrentList,
  categoryList,
  cuisineList,
  medianPricesList,
  parcTypesList,
  priceOrderList,
  starsNumberList,
} from "@/constants/list"

const categoryFormFields = {
  Restaurant: [
    <Select key="cuisineType" name="cuisineType" optionsList={cuisineList} />,
    <Select key="starNumber" name="starNumber" optionsList={starsNumberList} />,
    <Select
      key="medianPrice"
      name="medianPrice"
      optionsList={medianPricesList}
    />,
  ],
  Museum: [
    <Select
      key="artisticCurrent"
      name="artisticCurrent"
      optionsList={artisticCurrentList}
    />,
    <FormField
      key="artType"
      name="artType"
      placeholder="Enter the type of art"
    />,
    <Select key="priceOrder" name="priceOrder" optionsList={priceOrderList} />,
  ],
  Bar: [
    <FormField
      key="barType"
      name="barType"
      placeholder="Enter the type of bar"
    />,
    <Select key="priceOrder" name="priceOrder" optionsList={priceOrderList} />,
  ],
  Parc: [
    <Select key="parcType" name="parcType" optionsList={parcTypesList} />,
    <Select key="isPublic" name="isPublic" optionsList={[true, false]} />,
    <Select
      key="priceOrder"
      name="priceOrder"
      optionsList={[priceOrderList]}
    />,
  ],
}
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
  const handleSubmit = async (
    {
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
    },
    { resetForm },
  ) => {
    const restaurantDetails =
      category === "Restaurant"
        ? { cuisineType, starNumber, medianPrice }
        : null
    const museumDetails =
      category === "Museum"
        ? { artisticCurrent, artType, priceOrder, price }
        : null
    const barDetails = category === "Bar" ? { barType, priceOrder } : null
    const parcDetails =
      category === "Parc" ? { parcType, isPublic, priceOrder, price } : null
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
    resetForm()
  }
  const handleChange = (e) => {
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
// eslint-disable-next-line max-lines
export default CreatePage
