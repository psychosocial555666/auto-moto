/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import stars from "../../../img/stars.svg";
import starsActive from "../../../img/stars-active.svg";


function Reviews(props) {
  const {reviews} = props;
  return (
    <React.Fragment>
      <div className="tabs__reviews reviews">
        <button className="reviews__button button">оставить отзыв</button>
        {reviews.map((item) => {
          return (
            <article key={item.id} className="reviews__item">
              <h2 className="reviews__name">{item.author}</h2>
              <div className="reviews__block reviews__block--advantages">
                <h3>Достоинства</h3>
                <p>{item.advantages}</p>
              </div>
              <div className="reviews__block reviews__block--disadvantages">
                <h3>Недостатки</h3>
                <p>{item.disadvantages}</p>
              </div>
              <div className="reviews__block reviews__block--comment">
                <h3>Комментарий</h3>
                <p>{item.comment}</p>
              </div>
              <div className="reviews__rating">
                <img src={stars} className="reviews__stars" alt=""/>
                <span className="reviews__stars reviews__stars--active" style={{width: `${item.rating}%`}}>
                  <img src={starsActive} alt=""/>
                </span>
              </div>
              <div className="reviews__wrapper">
                <p className="reviews__date">{item.date}</p>
                <a href="#" className="reviews__reply">Ответить</a>
              </div>
            </article>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default Reviews;