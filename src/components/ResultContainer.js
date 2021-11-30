const ResultContainer = ({suggNames}) =>{
  return(
    <div>
        <p>Results:</p>
        {
          suggNames.map((items)=>{
            return(
              <p>
                {items}
              </p>
            )
          })
        }
    </div>

  )
}

export default ResultContainer;