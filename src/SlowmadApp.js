import Tabs from './Tabs';
import ContactPage from './ContactPage';
import ResponsiveAppBar from './Navbar';
import { useMediaQuery } from '@mui/material'
import './SlowmadApp.css'

function SlowmadApp() {
    const smallScreen = useMediaQuery("(max-width: 768px)");
    return (
        <div className='app-background'>
            <ResponsiveAppBar />
            <div className='container'>
                <h1 className={smallScreen ? 'small-app-title' : 'app-title'}>Slowmad Families</h1>
                <span className='app-description'>School based on the big 7 in life</span>
                <div className='items-container'>
                    <Tabs />
                </div>
            </div>
        </div>
    )
}

export default SlowmadApp;