import HomeTabs from './HomeTabs';
import seedValues from './seedValues';
import './SlowmadApp.css'

function SlowmadApp() {
    return (
        <div className='container'>
            <h1 className='app-title'>Slowmad Families</h1>
            <span className='app-description'>School based on the big 7 in life</span>
            <div className='items-container'>
                <HomeTabs seedValues={seedValues} />
            </div>
        </div>
    )
}

export default SlowmadApp;