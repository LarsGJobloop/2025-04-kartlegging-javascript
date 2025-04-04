function handleClickA() {
  console.log("Button A clicked!")
}

function handleClickB() {
  console.log("Button B clicked!")
}

function increment() {
  console.log("Increment count")
  let countElement = document.getElementById("count")

  let previousValue = Number(countElement.textContent)
  let newValue = previousValue + 1

  countElement.textContent = newValue
}

function decrement() {
  console.log("Decrement count")
  let countElement = document.getElementById("count")
  
  let previousValue = Number(countElement.textContent)
  let newValue = previousValue - 1

  countElement.textContent = newValue
}

function reset() {
  console.log("Resetting count")
  let countElement = document.getElementById("count")
  countElement.textContent = 0
}
