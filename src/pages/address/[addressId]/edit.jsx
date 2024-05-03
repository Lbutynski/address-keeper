import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { Header } from "@/components/Header"
import axios from "axios"
import { Formik } from "formik"
import { useRouter } from "next/router"
import * as yup from "yup"
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
const EditPage = ({ address }) => {
  const router = useRouter()
  const handleSubmit = async (data) => {
    await axios.patch(`/api/address/${address._id}`, data)
    router.push(`/address/${address._id}`)
  }
  const initialValues = {
    title: address.title,
    street: address.street,
    city: address.city,
    postalCode: address.postalCode,
    country: address.country,
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
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  )
}
export default EditPage
