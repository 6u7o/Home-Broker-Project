const getYesterdayDate = () => {
  const today = new Date()
  const yesterday = new Date(today)

  yesterday.setDate(yesterday.getDate() - 1)

  today.toDateString()
  const aaa = yesterday
  const date = aaa.toISOString().split('T')[0];

  return date;
}

module.exports = getYesterdayDate;