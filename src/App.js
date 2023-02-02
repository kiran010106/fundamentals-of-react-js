

/*const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
     <p>Hello world it is {now.toString()}</p>
     <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App;

//Multiple components



const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}
export default App;

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' />
      <Hello name='Daisy' />
    </div>
  )
}
export default App;

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App;

const Hello = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      
    </>
  )
}
export default App;

const App = () =>{
  const friends = [
    { name:'Kiran', age: 22 },
    { name:'Peter', age: 22 }
  ]

  return(
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}
export default App;

EXERCISE 1.1 - 1.2
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App*/

// JAVASCRIPT VARIABLES
const x = 10;
let y  = 20;
console.log(x,y);

y += 10;
console.log(x , y);

y= 'sometext'
console.log(x ,y)

//x=4

// JAVASCRIPT ARRAYS
const a = [1,2,3,4]

a.push(5)

console.log(a.length)
console.log(a[1])

a.forEach(value => {
  console.log(value)
});

const s = [9 , 8 , 7 , 6]

const s2 = s.concat(5)

console.log(s)
console.log(s2)

const d =  [5 , 7 , 8 , 9]

const f1 = d.map(value => value * 2)
console.log(f1)

const f2 = d.map(value => '<li>' + value + '</li>')
console.log(f2)

const g = [11 , 2 , 34 ,5]

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second) 
console.log(rest)  


