function Argomento({ lezioni }) {
  //l 'iterazione con map la faccio dentro le graffe (codice JSx) dentro l'elemento section dove mi interessa
  return (
    <section>
      <h1 className="titolo mb-small">Argomenti</h1>
      <div>
        {lezioni.map((lezione, index) => {
          return (
            <div key={index} className="argomento">
              <p>{lezione}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
//itero un div e un p interno ogni volta

export default Argomento;
