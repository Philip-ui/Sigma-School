export default function Form({ theme }) {
  return (
    <Panel title="Welcome" theme={theme}>
      <Button theme={theme}>Sign Up</Button>
      <Button theme={theme}>Log in</Button>
    </Panel >
  );
}

function Panel({ title, children, theme}) {
  
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1> {title} </h1>
      {children}
    </section >
  );
}

function Button({ children, theme }) {
 
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button >
  );
}