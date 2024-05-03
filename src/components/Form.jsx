import clsx from "clsx"
import { Form as FormFormik } from "formik"
export const Form = ({className,...otherProps}) => (
    <FormFormik className={clsx("flex flex-col",className)} noValidate {...otherProps}/>

  )