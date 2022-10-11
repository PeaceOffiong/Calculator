import './App.css';
import Numbers from "./components/Numbers";
import DisplayUnit from "./components/DisplayUnit";
import Header from "./components/Header";

export default function App() {
  return (
    <section>
      <Header />
      <main>
        <section>
          <div className="container">
            <DisplayUnit />
            <Numbers />
          </div>
        </section>
      </main>
    </section>
  )
}
