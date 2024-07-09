"use client"
const Lecture = ({params}) => {
    console.log(params);
  return (
    <div>
      <h1>Lecture: {params.lecture[0]}</h1>
      <h2>Lecture: {params.lecture[1]}</h2>
    </div>
  )
}

export default Lecture;
