import { useState } from "react";

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
  const [jobs, setJobs] = useState(start);

  const readyCount = jobs.reduce(function (sum, job) {
    return job.done ? sum + 1 : sum;
  }, 0);

  function markDone(name) {
    setJobs(function (jobs) {
      return jobs.map(function (job) {
        if (job.name !== name || job.done) return job;
        return { ...job, done: true };
      });
    });
  }

  return (
    <div>
      <header className="place" style={{ background: "olive", color: "white" }}>
        <h1>Bus office</h1>
      </header>

      {jobs.map(function (job) {
        return (
          <Job
            key={job.name}
            name={job.name}
            done={job.done}
            onDone={function () {
              markDone(job.name);
            }}
          />
        );
      })}

      <p>Ready {readyCount} of 3</p>
      <p>{readyCount === 3 ? "Ready" : ""}</p>

      <footer>247215</footer>
    </div>
  );
}