import { DateTime } from "luxon";

export const getYearDiff = (from: DateTime, to: DateTime) => {
  const d = from.diff(to, ["years", 'months']).toObject();
  const years = d.years && Math.abs(d.years) >= 1 && Math.floor(Math.abs(d.years));
  const months = d.months && Math.abs(d.months) >= 1 && Math.floor(Math.abs(d.months));


  let str = '';
  if(years) {
    str += `${years} y.`

    if(months) {
      str += `, ${years} m.`
    }
  } else {
    if(months) {
      str += `${months} m.`
    }
  }

  return str
}
