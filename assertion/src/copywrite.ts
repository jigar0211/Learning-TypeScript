// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// 1st Variation :
// const year: HTMLElement | null = document.getElementById("year")
// const thisYear: number = new Date().getFullYear()
// if (year) {
//   year.setAttribute("datetime", thisYear.toString())
//   year.textContent = thisYear.toString()
// }

// 2nd Variation :
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if(year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }

// 3rd Variation :
const year = document.getElementById("year") as HTMLElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear