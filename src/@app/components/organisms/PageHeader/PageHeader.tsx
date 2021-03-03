/**
 * Global UI
 */
import { PageHeader } from '@ui'

export interface ComponentProps {
  title: string
  'sub-title': string
}

const Component: SetupFunction<ComponentProps, JSX.Element> = ({
  title,
  'sub-title': subtitle,
}) => {
  // @ts-ignore
  return <PageHeader title={title} sub-title={subtitle} />
}

export default Component
