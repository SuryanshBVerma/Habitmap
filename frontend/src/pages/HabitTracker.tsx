import HeatMap from '@uiw/react-heat-map';
import heatmapData from '../data/heatmapData.json';

const HabitTracker = () => {
    return (
        <div className="space-y-12">
            <h2 className="text-2xl font-semibold text-white">Consistency Over Time</h2>

            {heatmapData.map((habit) => (
                <div key={habit.name} className="border border-[#30363d] p-6 rounded-xl space-y-4 overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-white">{habit.name}</h3>
                        <span className="text-xs text-[#8b949e] uppercase tracking-widest">Last 90 Days</span>
                    </div>

                    <HeatMap
                        value={habit.data}
                        width={800} // Reduce width to prevent horizontal overflow/scaling issues
                        startDate={new Date('2026/01/01')}
                        endDate={new Date('2026/12/31')}
                        rectSize={14}
                        space={4}
                        // FIX: Explicitly set rectProps to remove the default stroke/outline
                        rectProps={{
                            rx: 2, // Rounded corners like your image
                            stroke: 'none', // Removes default borders that cause artifacts
                        }}
                        // FIX: Custom text styles for month and day labels
                        monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                        legendRender={(props) => <rect {...props} y={props.y + 10} rx={2} />} // Moves legend if needed
                        style={{ color: '#7d8590', fontSize: '10px' }}
                        panelColors={{
                            0: '#161b22', // Empty cell color
                            1: habit.color || '#39d353',
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default HabitTracker;
