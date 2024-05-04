import clsx from "clsx"
import { Field } from "formik"

export const Select = ({ name, className, optionsList, ...otherProps }) => (
  <>
    <Field
      name={name}
      className={clsx("", className)}
      component="select"
      {...otherProps}
    >
      {optionsList.map((element) => (
        <option key={element}>{element}</option>
      ))}
    </Field>
  </>
)
