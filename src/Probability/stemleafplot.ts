/**
 * Transforms data into a stem and leaf plot.
 * @param data The data to show in the plot
 * @returns A string containing the plot
 */
const stemleafplot = (data: number[]) => {
  let plot = '';
  const sortedData = data.sort((a, b) => a - b);
  const map = new Map<String, String>();
  sortedData.forEach(el => {
    if (el < 10) {
      map.set('0', (map.get('0') || '') + el.toString());
    } else {
      const start = el.toString().slice(0, el.toString().length - 1);
      const end = el.toString().slice(el.toString().length - 1, el.toString().length);
      map.set(start, (map.get(start) || '') + end);
    }
  });
  for (const key of Array.from(map.keys())) {
    const line = `${key}|${map.get(key)}\n`;
    plot = plot + line;
  }
  return plot;
};

export default stemleafplot;
