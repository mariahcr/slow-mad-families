import ResponsiveAppBar from './Navbar';

const bigSeven = ['sleep', 'nutrition', 'exercise', 'community', 'sunlight', 'nature', 'purpose']

function SlowmadApp() {
    return (
        <div>
            <ResponsiveAppBar />
            <h1>Slowmad Families</h1>
            <span>School based on the big 7 in life</span>
            <div>
                {bigSeven.map(item => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default SlowmadApp;