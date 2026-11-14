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
      <Job name="badge" done={false} />
      <footer>247215</footer>
    </div>
  );
}