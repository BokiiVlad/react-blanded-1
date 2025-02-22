import { formatDistanceToNow, format } from 'date-fns'

export const formattedDate = (date) => formatDistanceToNow(new Date(date), { addSuffix: true });

export const formattedDateNew = (date) => format(new Date(date), 'Pp');
