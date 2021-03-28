import React from "react";
import close from "../../../img/close.svg";

const ratingFields = [
  {
    value: 20,
    id: 1
  },
  {
    value: 40,
    id: 2
  },
  {
    value: 60,
    id: 3  
  },
  {
    value: 80,
    id: 4  
  },
  {
    value: 100,
    id: 5  
  },
];

class ReviewModal extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <section className="modal">
          <div className="modal__overlay">
            <form className="modal__popup">
              <h2>Оставить отзыв </h2>
              <div className="modal__wrapper">
              <div className="modal__item modal__item--name modal__item--invalid">
                <input type="text" id="name" placeholder="* Имя"/>
                <label htmlFor="name"><span className="visually-hidden">Имя</span></label>
              </div>
              <div className="modal__item modal__item--advantages">
                <input type="text" id="advantages" placeholder="Достоинства"/>
                <label htmlFor="advantages"><span className="visually-hidden">Достоинства</span></label>
              </div>
              <div className="modal__item modal__item--disadvantages">
                <input type="text" id="disadvantages" placeholder="Недостатки"/>
                <label htmlFor="disadvantages"><span className="visually-hidden">Недостатки</span></label>
              </div>
              <div className="modal__rating">
                <span>Оцените товар:</span>
                {ratingFields.map((item) => {
                  return (
                    <div key={item.id} className="modal__star">
                      <input className="visually-hidden" type="radio" id={item.id} name="rating" value={item.value}/>
                      <label htmlFor={item.id}>
                        <svg width="28" height="27" viewBox="0 0 17 16">
                          <path d="M8.36875 0L10.2477 5.87336L16.3279 5.87336L11.4089 9.50329L13.2878 15.3766L8.36875 11.7467L3.44972 15.3766L5.32862 9.50329L0.409596 5.87336L6.48985 5.87336L8.36875 0Z"/>
                        </svg>
                      </label>
                    </div>
                  );
                })}
                
              </div>
              <div className="modal__item modal__item--comment">
                <textarea id="comment" placeholder="* Комментарий"/>
                <label htmlFor="comment"><span className="visually-hidden">Комментарий</span></label>
              </div>
              </div>
              <button type="submit" className="modal__submit button">Оставить отзыв</button>
              <button type="button" className="modal__close">
                <img src={close} alt="close"/>
              </button>
            </form>
          </div>
        </section>
      </React.Fragment>
    )
  }
}



export default ReviewModal;