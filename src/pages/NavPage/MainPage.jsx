import { useSelector } from 'react-redux'
import Home from '../Home/Home';
import CreatorPage from '../CreatorPage/CreatorPage';
import QrCodeGeneratorPage from '../QrCodeGeneratorPage/QrCodeGeneratorPage';
const MainPage = () => {
    const newAppMode = useSelector((state) => state.creatorViewSlice.newAppMode);
    const appMode = useSelector((state) => state.creatorViewSlice.appMode);
    const handleNav = () => {
      switch(appMode){
        case 'Home':
          return(<Home/>)
        case 'CreatorPage':
          return(<CreatorPage/>)
        case 'QrCodeGeneratorPage':
          return(<QrCodeGeneratorPage/>)
        default:
            return(<Home/>)
      }
    }
  return (
    <>
        {handleNav()}
    </>
  )
}

export default MainPage