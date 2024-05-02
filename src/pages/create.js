import { Button } from "@/components/Button"
import { FormField } from "@/components/FormField"
import { Header } from "@/components/Header"
import axios from "axios"
import { Form, Formik } from "formik"
import * as yup from "yup"
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
const createPage = () => {
  const handleSubmit = async (
    { title, street, city, postalCode, country },
    { resetForm },
  ) => {
    console.log(title)
    await axios.post("/api/address", {
      title,
      street,
      city,
      postalCode,
      country,
    })
    resetForm()
  }
  return (
    <>
      <Header />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form noValidate>
          <FormField name="title" placeholder="Enter a title" />
          <FormField name="street" placeholder="Enter number and street" />
          <FormField name="city" placeholder="Enter city" />
          <FormField name="postalCode" placeholder="Enter the postal code" />
          <FormField name="country" placeholder="Enter country" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  )
}
export default createPage
