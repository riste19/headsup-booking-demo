export const SERVICES = [
  { id: 'hair', name: 'Машко шишање', detail: 'Прецизна форма. Свеж изглед.', duration: 30, price: 300, icon: '✂' },
  { id: 'beard', name: 'Брада & Стилизирање', detail: 'Чисти линии до последен детал.', duration: 20, price: 200, icon: '◒' },
  { id: 'combo', name: 'Комбо (Шишање + Брада)', detail: 'Целосно средување, во еден термин.', duration: 45, price: 450, icon: '✦' },
  { id: 'kids', name: 'Детско шишање', detail: 'Голем стил за најмалите.', duration: 30, price: 250, icon: '⌁' }
];
export const BARBERS = [{id:'any',name:'Било кој слободен бербер',initial:'↗'},{id:'viktor',name:'Виктор',initial:'В'},{id:'marko',name:'Марко',initial:'М'}];
export const STORAGE_KEY = 'headsup-demo-bookings-v1';
export const timeNumber = time => Number(time.slice(0,2))*60+Number(time.slice(3));
export const timeString = value => `${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`;
export function todayKey(now = new Date()) { return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Skopje',year:'numeric',month:'2-digit',day:'2-digit'}).format(now); }
export function addDays(day, count) { const d = new Date(day+'T12:00:00Z'); d.setUTCDate(d.getUTCDate()+count); return d.toISOString().slice(0,10); }
export const dateLabel = (day, options={day:'numeric',month:'long'}) => new Intl.DateTimeFormat('mk-MK',options).format(new Date(day+'T12:00:00Z'));
export const serviceById = id => SERVICES.find(s=>s.id===id);
export const barberById = id => BARBERS.find(b=>b.id===id);
export function seedBookings(day) {
  return [
    {id:'seed-1',date:day,time:'10:00',name:'Александар П.',phone:'07X XXX XXX',service:'hair',barber:'viktor',status:'completed',note:'Примерен клиент'},
    {id:'seed-2',date:day,time:'11:20',name:'Стефан М.',phone:'07X XXX XXX',service:'combo',barber:'marko',status:'confirmed',note:'Примерен клиент'},
    {id:'seed-3',date:day,time:'12:00',name:'Даниел К.',phone:'07X XXX XXX',service:'beard',barber:'viktor',status:'confirmed',note:'Примерен клиент'},
    {id:'seed-4',date:day,time:'14:00',name:'Никола С.',phone:'07X XXX XXX',service:'hair',barber:'marko',status:'confirmed',note:'Примерен клиент'}
  ];
}
export function isFree(bookings,date,time,barber,duration) {
  const start=timeNumber(time);
  return start>=600 && start+duration<=1080 && !bookings.some(b=>b.date===date && b.barber===barber && b.status!=='cancelled' && start<timeNumber(b.time)+serviceById(b.service).duration && start+duration>timeNumber(b.time));
}
export function availableBarber(bookings,date,time,barber,service) {
  const candidates=barber==='any'?BARBERS.slice(1):BARBERS.filter(b=>b.id===barber);
  return candidates.find(b=>isFree(bookings,date,time,b.id,serviceById(service).duration))?.id ?? null;
}
export function dailyStats(bookings,date) {
  const items=bookings.filter(b=>b.date===date && b.status!=='cancelled');
  return {count:items.length, revenue:items.reduce((n,b)=>n+serviceById(b.service).price,0),completed:items.filter(b=>b.status==='completed').length};
}
