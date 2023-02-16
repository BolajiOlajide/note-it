import isYesterday from 'date-fns/isYesterday'
import isToday from 'date-fns/isToday'

export const calculateNoteDate = (ts: number): string => {
  const date = new Date(ts)

  if (isToday(date)) {
    return 'Today'
  }

  if (isYesterday(date)) {
    return 'Yesterday'
  }

  return date.toLocaleDateString()
}
