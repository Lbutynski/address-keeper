import clsx from "clsx"

export const Button = ({ className, ...otherProps }) => (
    <button className={clsx("py-2 px-4 m-2 rounded-md bg-blue-400 hover:bg-blue-500 text-white",className)}
      {...otherProps}
    />
  )