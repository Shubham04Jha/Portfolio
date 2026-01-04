import { ActivityCalendar } from "react-activity-calendar"
import type { CalendarData } from "../../hooks/useCodingActivity"

const explicitTheme = {
  light: ['#f0f0f0', '#0a2929', '#1f7a7a', '#33cccc', '#a8f0ed'],
  dark: ['#2b2b2b', '#0e3a3a', '#166d6d', '#1fb3b3', '#6ee7e3'],
}

export const CodingActivity = ({data,loading}: {data: CalendarData[],loading: boolean})=>{
    return <ActivityCalendar showWeekdayLabels 
            data={data} 
            theme={explicitTheme} 
            tooltips={{
                activity: {
                    text: activity => `${activity.level} activities on ${new Date(activity.date).toDateString()}`,
                    placement: 'right',
                    offset: 6,
                    hoverRestMs: 300,
                    transitionStyles: {
                        duration: 100,
                        common: { fontFamily: 'monospace' },
                    },
                    withArrow: true,
                },
                colorLegend: {
                    text: level => `Activity level ${level}`
                },
            }}
            loading={loading}
            />
}