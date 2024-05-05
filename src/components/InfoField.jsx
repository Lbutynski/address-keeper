import clsx from "clsx"

export const InfoField = ({ title, content, classname, ...otherProps }) => (
  <div className={clsx("flex flex-row gap-2", classname)} {...otherProps}>
    <h3>{title}</h3>
    <span>{content}</span>
  </div>
)
