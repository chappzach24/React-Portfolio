export default function Delete(props) {
  return (
    <>
      <h1>{props.mops}</h1>
      <button
        onClick={() => {
          props.clicked(!props.toggle);
        }}
      >
        Clickem
      </button>
    </>
  );
}
