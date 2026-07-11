


export default function Button(props: { label: string }) {
  return (
    <button
    className="btn btn-primary"
    >
      {props.label}
    </button>
  )
}
