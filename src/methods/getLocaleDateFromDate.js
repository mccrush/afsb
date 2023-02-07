export const getLocaleDateFromDate = (date = '') => {
  let LocaleDate
  if (date) {
    LocaleDate = new Date(date)
  } else {
    LocaleDate = new Date()
  }

  LocaleDate = LocaleDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return LocaleDate
}