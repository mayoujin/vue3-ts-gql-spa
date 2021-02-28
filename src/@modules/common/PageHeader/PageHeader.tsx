/**
 * Global UI
 */
import { PageHeader } from 'ant-design-vue'

export type ComponentProps = {
  title: string
  'sub-title': string
}

const Component: SetupFunction<ComponentProps, JSX.Element> = ({
  title,
  'sub-title': subtitle,
}) => {
  return <PageHeader title={title} sub-title={subtitle} />
}

export default Component
