import "./App.css";

function App() {
  return (
    <>
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one text-4xl">
            <span className="text-5xl">Level Select</span>
            <div className="flex flex-col gap-14">
              <a href="#lectura">Level 1</a>
              <a href="#infografia">Level 2</a>
              <a href="#video">Level 3</a>
              <a href="#cancion">Level 4</a>
            </div>
          </div>
          <div class="slide two" id="lectura">adios</div>
          <div class="slide three">adios</div>
          <div class="slide four" id="cuatro">adios</div>
        </div>
      </div>
    </>
  );
}

export default App;
