export function randomProblemBg() :  string{
  let result : string = "";

  let bgs :string []=[
    "bg-red-50",
    "bg-yellow-50",
    "bg-green-50",
    "bg-blue-50",
    "bg-indigo-50",
    "bg-purple-50",
    "bg-pink-50",
    //000,
    "bg-green-50",
    "bg-blue-50",
  ]

  result = bgs[Math.floor(Math.random() * 10)]

  return result
}
