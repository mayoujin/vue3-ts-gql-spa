import {
  ComponentProps as PageHeaderProps,
  PageHeaderDataSymbol,
} from '@app/components/organisms/PageHeader'

export interface Metadata {
  [PageHeaderDataSymbol]?: PageHeaderProps
}
