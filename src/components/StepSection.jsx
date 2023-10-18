function StepSection({ num, title, text }) {
  return (
    <section className="mb">
      <h1 className="mb-small">Step</h1>
      <div>
        <h3>{num}</h3>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default StepSection;
