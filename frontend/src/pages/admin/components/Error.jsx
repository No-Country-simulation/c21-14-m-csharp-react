const Error = ({ text }) => {
  return (
    <div className="border-2 border-red-600 text-red-600 flex gap-2 items-center px-2 py-2 rounded-md my-2">
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>{text}</p>
    </div>
  )
}

export default Error
