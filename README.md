# Carify

Carify is a lexikon for number plates in Germany and Austria. You can enter the location letters and press search or enter to get the spelled location. In order to switch between the 2 countries, just press onto the country indicator at the bottom left of the number plate.

## API

### API URL:
https://carify.vercel.app/api/(country)-(search).json

- country: [d,a,de,at,germany,austria] (not case sensitive)
- search: A-Z; a-z; 1-9

### Example: 

URL: https://carify.vercel.app/api/d-bl.json

Output: {"title":"Balingen (Zollernalbkreis)","state":"Baden-Württemberg"}

## Reverse API

### API URL:
https://carify.vercel.app/api/reverse/(country)-(search).json

- country: [d,a,de,at,germany,austria] (not case sensitive)

### Example: 

URL: https://carify.vercel.app/api/reverse/d-Balingen (Zollernalbkreis).json

Output: {"title":"Balingen (Zollernalbkreis)","state":"Baden-Württemberg","key":"BL"}