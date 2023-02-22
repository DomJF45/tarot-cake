const useDate = () => {
  const today: Date = new Date();
  const yyyy: number = today.getFullYear();
  let mm: string | number = today.getMonth() + 1;
  let dd: string | number = today.getDate();

  if (dd < 10) { dd = '0' + dd.toString()};
  if (mm < 10) { mm = '0' + mm.toString()};

  const formattedToday: string = dd + '/' + mm + '/' + yyyy;
  const formattedTime: string = new Date().toLocaleTimeString();

  const hookDate = {formattedToday, formattedTime}

  return hookDate;
}

export default useDate;