//export default function getFormattedDate(dateString: string): string {
//    return new Intl.DateTimeFormat('en-CA', { dateStyle: 'long' }).format(new Date(dateString))
//}
export default function getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
  
    // Check if 'date' is an Invalid Date
    if (isNaN(date.getTime())) {
      // Handle invalid date, for example return a default string or throw an error
      console.error(`Invalid date string: ${dateString}`);
      return "Invalid date"; // or handle it however you see fit
    }
  
    return new Intl.DateTimeFormat('en-CA', { dateStyle: 'long' }).format(date);
  }