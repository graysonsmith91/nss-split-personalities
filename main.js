const originalDisorderFormat =
  'Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia'

const splitDisorders = originalDisorderFormat.split('|$|')

const joinDisorders = splitDisorders.join('</div>\n<div>')

console.log(`<div>${joinDisorders}</div>`)