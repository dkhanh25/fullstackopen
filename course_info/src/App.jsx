const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part num={content.part1} exercise={content.exercises1}/>
      <Part num={content.part2} exercise={content.exercises2}/>
      <Part num={content.part3} exercise={content.exercises3}/>
    </div>
  )
}

const Part = (part) => {
  return (
    <p>
      {part.num} {part.exercise}
    </p>
  )
}

const Total = (total) => {
  return (
    <p>
      Number of exercises {total.num}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  var total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3 ={exercises3}/>
      <Total num={exercises1} />
      <Total num={total} />
    </div>
  )
}

export default App