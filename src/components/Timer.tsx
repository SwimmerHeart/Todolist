import React, {useEffect} from 'react';
import {format, formatDistance, formatDistanceToNowStrict, formatDuration, intervalToDuration} from "date-fns";
import {ru} from "date-fns/locale";

type TTimerProps = {
    startDate: string
    endDate: string
}

const Timer:React.FC<TTimerProps> = ({startDate, endDate}) => {


        // 03-12-22 21:00:57 start
    // 2022-12-04T20:42 end
    // const date = format(new Date(), 'dd-MM-yy H:mm',{locale:ru} )

    // const transformationTime = (startDate: string,endDate= startDate ) => {
        const start = new Date(startDate)
        let end = new Date(endDate)
        const current1 = new Date()

        const startTime = format(new Date(start),'dd.MM.yyyy H:mm',{locale:ru} )
        const endTime = format(new Date(end),'dd-MM-yy H:mm:ss',{locale:ru} )
        const currentTime = format(new Date(),'dd-MM-yy H:mm:ss',{locale:ru} )
        const distance = formatDistance(start, end, {includeSeconds: true, locale:ru})
    // }
    const totalTimeObj = intervalToDuration({start, end})
    end = new Date()
    const toCurrentTimeObj = intervalToDuration({start, end})

    const totalTime = formatDuration(totalTimeObj,{format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes'],locale: ru})
    const toCurrentTime = formatDuration(toCurrentTimeObj,{format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes'],locale: ru})
    useEffect(()=>{

    },[])
    // console.log(formatDistanceToNowStrict(end,{addSuffix:true,unit: 'second',locale:ru}))
    // const temp2 = formatDistanceToNowStrict(end,{addSuffix:true,unit: 'second',locale:ru}).split(' ')
    // console.log(temp2[1])
    // const itog = numeral(`${temp2[1]}0`).format('00:00:00')
    // console.log(itog)



    return (
        <div>
            <div>Продолжительность задачи {totalTime}</div>
            <div>Прошло времени {toCurrentTime}</div>
        </div>
    );
};

export default Timer;