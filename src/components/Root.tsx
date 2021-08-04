import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const rootStyle = classnames(
  'container',
  'mx-auto',
  'px-5',
  'pb-10',
  'bg-background-main'
)

const Root: FC = ({ children }) => {
  return <main className={rootStyle}>{children}</main>
}

export default observer(Root)
