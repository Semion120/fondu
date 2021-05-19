import React, { FC } from "react"
import { rootStyle } from "./styles"

const Root: FC = ({ children }) => {
  return <main className={rootStyle}>{children}</main>
}

export default Root
