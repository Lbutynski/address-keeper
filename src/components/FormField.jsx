import clsx from "clsx"
import { ErrorMessage, Field } from "formik"

export const FormField = ({className, name, ...otherprops}) => (<>
  <Field className={clsx("", className)} name={name} {...otherprops} />
  <ErrorMessage name={name} />
</>
)