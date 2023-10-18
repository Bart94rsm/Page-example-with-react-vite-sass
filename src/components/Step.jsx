// 1 modo con for

function Step({ steps }) {
  let JSXCode = [];

  if (steps.length === 0) {
    return <h3>Nessuno step da mostrare</h3>;
  }

  for (let i = 0; i < steps.length; i++) {
    const { num, title, text } = steps[i];
    JSXCode.push(
      <div key={i}>
        <h3>{num}</h3>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    );
  }
  return (
    <section className="mb">
      <h1 className="mb-small titolo">Step</h1>
      <div className="steps">{JSXCode}</div>
    </section>
  );
}
//devo rendere il div con JSXCode interno un grid container per posizionare elementi interni, do quindi una classe e do stile in scss
export default Step;

//2 modo con map, devo creare componente a parte (StepSection)
/*
import StepSection from "./StepSection";
function Step() {
  const steps = [
    { num: "1", title: "Step 1", text: "lorem ipsum" },
    { num: "2", title: "Step 2", text: "lorem ipsum" },
    { num: "3", title: "Step 3", text: "lorem ipsum" },
  ];
  return steps.map((step, index) => {
    return <StepSection key={index} {...step} />;
  });
}

export default Step;
*/
