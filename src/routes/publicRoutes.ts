import { PATH_RECORD, PATH_TOP_PAGE } from '@/routes/routes.ts'
import { HomePage } from '@/pages/HomePage'
import { MyRecord } from '@/pages/MyRecord'

export const publicRoutes = [
  {
    path: PATH_TOP_PAGE,
    component: HomePage,
  },
  {
    path: PATH_RECORD,
    component: MyRecord,
  },
]
