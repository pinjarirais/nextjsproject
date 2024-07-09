import Link from "next/link";


const StudentList = () => {
  return (
    <div className="p-4">
        <h1>Student List</h1>
        <ul className="text-blue-700 pt-5">
            <li><Link href="/studentlist/Rais">Rais</Link></li>
            <li><Link href="/studentlist/Ada">Ada</Link></li>
            <li><Link href="/studentlist/Taufiq">Taufiq</Link></li>
            <li><Link href="/studentlist/Pinjari">Pinjari</Link></li>
        </ul>
    </div>
  )
}

export default StudentList;
