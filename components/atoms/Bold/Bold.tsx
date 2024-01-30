import { PropsWithChildren } from "react"
import { styles } from "./stylesBold"

export const Bold = ({children}: PropsWithChildren) => {
  return (
    <>
        <strong style={styles.bold}>{children}</strong>
    </>
  )
}
