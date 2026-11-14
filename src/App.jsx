const start = [
  { name: "badge", done: false },
  { name: "laptop", done: false },
  { name: "keys", done: false },
];

function Job({ name, done, onDone }) {
  return (
    <button type="button" className="card" onClick={onDone}>
      {name} — {done ? "Done" : "Not yet"}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <header className="place" style={{ background: "olive", color: "white" }}>
        <h1>Bus office</h1>
      </header>

      {start.map(function (job) {
        return <Job key={job.name} name={job.name} done={job.done} />;
      })}

      <p>Ready 0 of 3</p>
      <p></p>

      <footer>247215</footer>
    </div>
  );
}