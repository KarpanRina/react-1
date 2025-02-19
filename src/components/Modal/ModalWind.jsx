import "./ModalWind.css";

export default function ModalWind({ call, onDestroy }) {
  if (!call) return null;

  return (
    <div onClick={onDestroy} className={`modal ${call ? '' : 'none'}`}>
       <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <i className="close" onClick={() => onDestroy()}>
          X
        </i>
        <h1>Видалити запис</h1>
        <div className="btns">
          <button className="accept">Так, видалити</button>
          <button className="reject" onClick={onDestroy}>
            Ні, залишити
          </button>
        </div>
      </div>
    </div>
  );
}
