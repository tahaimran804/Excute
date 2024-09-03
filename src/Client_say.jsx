const Client_say = (props) => {
  return (
    <>
      <div className="Client_say">

        <div className="ParaGrapg">
          <p>{props.titel}</p>
        </div>
        <h1 >{props.name}<span>{props.Work}</span></h1>
      </div>
    </>
  )
}
export default Client_say
