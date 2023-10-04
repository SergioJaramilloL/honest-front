import { Outlet, useNavigation } from "react-router-dom"

const Root = () => {
  const navigation = useNavigation()

  return (
    <>
      {/* put your header here */}
      <main>
        {
          navigation.state === 'loading' 
            ? 'Loading...'      
            : <Outlet />
        }
      </main>
      {/* put your footer here */}
    </>
  )
}

export default Root