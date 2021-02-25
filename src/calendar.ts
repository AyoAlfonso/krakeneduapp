import ICAL from 'ical.js'
export const createEventInvite = (props:{
  id:number | string,
  description: string,
  summary: string,
  start_date: string,
  location: string,
  end_date: string,
})=> {

  let calendar = new ICAL.Component(['vcalendar',[],[]])
  calendar.updatePropertyWithValue('version', '2.0');
  calendar.updatePropertyWithValue('prodid', `${window.location.origin}`);
  calendar.updatePropertyWithValue('method', "REQUEST")
  calendar.updatePropertyWithValue('name', 'KrakenEdu Calendar')
  calendar.updatePropertyWithValue('x-wr-calname', 'KrakenEdu Calendar')

  let vevent = new ICAL.Component('vevent')
  let calEvent = new ICAL.Event(vevent)
  calEvent.uid = 'krakenedu-'+props.id
  calEvent.description = props.description
  calEvent.summary = props.summary
  calEvent.location = props.location
  calEvent.startDate = ICAL.Time.fromJSDate(new Date(props.start_date), true)
  calEvent.endDate = ICAL.Time.fromJSDate(new Date(props.end_date), true)

  calendar.addSubcomponent(vevent)
  return calendar
}
