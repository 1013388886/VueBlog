
export default function getTime(val) {
    let now = Date.parse(new Date());
    let day = Math.floor((now-val)/1000/60/60/24)
    return  day 
}

