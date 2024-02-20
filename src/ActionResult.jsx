import "./ActionResult.css"

function ActionResult({ candidate }) {
      return (
        <div className="result-container">
          {candidate && (
            <>
              <img src={candidate.image} alt={candidate.name} className="candidate-image"/>
              <div className="candidate-info">
                <h3>{candidate.name}</h3>
                {candidate.age && <p><b>Возраст:</b> {candidate.age}</p>}
                {candidate.party && <p><b>Партия:</b> {candidate.party}</p>}
                {<p><b>Описание:</b><br/> {candidate.description}</p>}
                {<p><b>Наш комментарий:</b><br/> {candidate.comment}</p>}
              </div>
          </>
          )}
        </div>
      );
  }
 
  export default ActionResult;