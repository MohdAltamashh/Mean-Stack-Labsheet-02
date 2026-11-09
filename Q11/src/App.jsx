function Header(){return <header className="card"><h1>Student Cards</h1></header>}
function Footer(){return <footer className="card">React JS Practical</footer>}
function Card({name,course,marks}){return <article className="card"><h2>{name}</h2><p>Course: {course}</p><p>Marks: {marks}</p></article>}
const students=[{id:1,name:"Aarav",course:"MCA",marks:82},{id:2,name:"Sara",course:"BCA",marks:91},{id:3,name:"Rohan",course:"MCA",marks:68}];
export default function App(){return <main><Header/>{students.map(s=><Card key={s.id} name={s.name} course={s.course} marks={s.marks}/>)}<Footer/></main>}