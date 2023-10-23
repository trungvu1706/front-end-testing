import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/layout'
import { publicRoutes } from '@/routes/publicRoutes.ts'
import { PATH_TOP_PAGE } from '@/routes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout
            if (route.layout) {
              Layout = route.layout
            } else {
              Layout = MainLayout
            }
            return (
              <Route
                key={index}
                element={
                  <Layout hasSummaryCharts={route.path === PATH_TOP_PAGE}>
                    <Page />
                  </Layout>
                }
                path={route.path}
              />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
