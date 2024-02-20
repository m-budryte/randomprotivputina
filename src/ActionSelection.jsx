function ActionSelection({ onActionSelected }) {
  return (
    <div className="button-container">
      <button className="button-style" onClick={() => onActionSelected('randomCandidate')}>Случайно выбрать кандидата</button>
    </div>
  );
}


export default ActionSelection;
