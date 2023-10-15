import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/layout'
import { publicRoutes } from '@/routes/publicRoutes.ts'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return (
              <Route
                key={index}
                element={
                  <MainLayout>
                    <Page />
                  </MainLayout>
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
