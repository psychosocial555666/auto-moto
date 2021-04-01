import React from "react";
import close from "../../../img/close.svg";
import {connect} from "react-redux";
import {extend} from "../../utils/utils.js" 
import {getCar} from "./../../reducer/data/selectors.js";
import {getNameStatus} from "./../../reducer/ui/selectors.js";
import {getCommentStatus} from "./../../reducer/ui/selectors.js";
import {ActionCreator as ActionCreatorUI} from "../../reducer/ui/ui.js";
import {ActionCreator as ActionCreatorDATA} from "../../reducer/data/data.js"
import {ESC_KEY} from "../../const";
import {ratingFields} from "./../../const.js"
import { carType } from "../../types";
import PropTypes from 'prop-types';

class ReviewModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.ratingRef = React.createRef();
    this.advantagesRef = React.createRef();
    this.disadvantagesRef = React.createRef();
    this.commentRef = React.createRef();

    this.rating = "0";
    this.myStorage = window.localStorage;

    this._closeButtonClickHandler = this._closeButtonClickHandler.bind(this);
    this._overlayClickHandler = this._overlayClickHandler.bind(this);
    this._isEscKeyPressed = this._isEscKeyPressed.bind(this);
    this._onModalFormSubmit = this._onModalFormSubmit.bind(this);
    this._isFormValid = this._isFormValid.bind(this);
  }

  _closeButtonClickHandler () {
    this.props.popupClose(false);
  }

  _overlayClickHandler (evt) {
    if (evt.target.matches('.modal__overlay')) {
      this.props.popupClose(false);
    }
  }

  _isEscKeyPressed (evt) {
    if (evt.keyCode === ESC_KEY) {
      this.props.popupClose(false);
    }
  }

  _isFormValid (name, comment) {
    if(!name) {
      this.props.validateName(false);
      return false;
    } else {
      this.props.validateName(true);
    }

    if(!comment) {
      this.props.validateComment(false);
      return false;
    } else {
      this.props.validateComment(true);
    }

    this.props.validateName(true);
    this.props.validateComment(true);
    return true;
  }

  _onModalFormSubmit (evt) {
    evt.preventDefault();

    let name = this.nameRef.current.value;
    let advantages = this.advantagesRef.current.value;
    let rating = this.rating;
    let disadvantages = this.disadvantagesRef.current.value;
    let comment = this.commentRef.current.value;

    if(this._isFormValid(name, comment)) {
      this.myStorage.setItem('author', name);
      this.myStorage.setItem('advantages', advantages);
      this.myStorage.setItem('disadvantages', disadvantages);
      this.myStorage.setItem('comment', comment);

      let newReviews = this.props.car.reviews.slice(0, this.props.car.reviews.lenght).concat({
        id: this.props.car.reviews.length + 1,
        author: name,
        advantages: advantages,
        disadvantages: disadvantages,
        date: new Date(),
        rating: rating,
        comment: comment,
      });
      this.props.car.reviews = newReviews;
      let newState = extend(this.props.car, {})
      this.props.addReview(newState);
      this.props.popupClose(false);
    };
  };

  componentDidMount () {
    window.addEventListener("keydown", this._isEscKeyPressed);
    let name = this.nameRef.current;
    let advantages = this.advantagesRef.current;
    let disadvantages = this.disadvantagesRef.current;
    let comment = this.commentRef.current;

    name.focus();

    if(this.myStorage.author) {
      name.value = this.myStorage.author;
    };

    
    if(this.myStorage.advantages) {
      advantages.value = this.myStorage.advantages;
    };

    
    if(this.myStorage.disadvantages) {
      disadvantages.value = this.myStorage.disadvantages;
    };

    
    if(this.myStorage.comment) {
      comment.value = this.myStorage.comment;
    };
  }

  componentWillUnmount () {
    window.removeEventListener("keydown", this._isEscKeyPressed)
  };

  render() {
    return(
      <React.Fragment>
        <section className="modal">
          <div className="modal__overlay" onClick={this._overlayClickHandler}>
            <form className="modal__popup" onSubmit={this._onModalFormSubmit}>
              <h2>Оставить отзыв </h2>
              <div className="modal__wrapper">
              <div className={this.props.isNameValid ? "modal__item modal__item--name" : "modal__item modal__item--name modal__item--invalid"}>
                <input ref={this.nameRef} type="text" id="name" placeholder="Имя"/>
                <label htmlFor="name"><span className="visually-hidden">Имя</span></label>
              </div>
              <div className="modal__item modal__item--advantages">
                <input ref={this.advantagesRef}  type="text" id="advantages" placeholder="Достоинства"/>
                <label htmlFor="advantages"><span className="visually-hidden">Достоинства</span></label>
              </div>
              <div className="modal__item modal__item--disadvantages">
                <input ref={this.disadvantagesRef}  type="text" id="disadvantages" placeholder="Недостатки"/>
                <label htmlFor="disadvantages"><span className="visually-hidden">Недостатки</span></label>
              </div>
              <div className="modal__rating">
                <span>Оцените товар:</span>
                {ratingFields.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <input ref={this.ratingRef} onChange={(evt) => {this.rating = evt.target.value}} className="visually-hidden" type="radio" id={item.id} name="rating" value={item.value}/>
                      <label htmlFor={item.id}>
                        <svg width="28" height="27" viewBox="0 0 17 16">
                          <path d="M8.36875 0L10.2477 5.87336L16.3279 5.87336L11.4089 9.50329L13.2878 15.3766L8.36875 11.7467L3.44972 15.3766L5.32862 9.50329L0.409596 5.87336L6.48985 5.87336L8.36875 0Z"/>
                        </svg>
                      </label>
                    </React.Fragment>
                  );
                })}
                
              </div>
              <div className={this.props.isCommentValid ? "modal__item modal__item--comment" : "modal__item modal__item--comment modal__item--invalid"}>
                <textarea ref={this.commentRef}  id="comment" placeholder="Комментарий"/>
                <label htmlFor="comment"><span className="visually-hidden">Комментарий</span></label>
              </div>
              </div>
              <button type="submit" className="modal__submit button">Оставить отзыв</button>
              <button type="button" className="modal__close" onClick={this._closeButtonClickHandler}>
                <img src={close} alt="close"/>
              </button>
            </form>
          </div>
        </section>
      </React.Fragment>
    )
  };
};

ReviewModal.propTypes = {
  car: carType,
  isNameValid: PropTypes.bool,
  isCommentValid: PropTypes.bool,
  popupClose: PropTypes.func,
  validateName: PropTypes.func,
  validateComment: PropTypes.func,
  addReview: PropTypes.func,
};

const mapStateToProps = (state) => ({
  car: getCar(state),
  isNameValid: getNameStatus(state),
  isCommentValid: getCommentStatus(state),
});


const mapDispatchToProps = (dispatch) => ({
  popupClose(status) {
    dispatch(ActionCreatorUI.changeModalStatus(status));
    document.querySelector("body").classList.remove("modal-opened");
  },

  validateName(status) {
    dispatch(ActionCreatorUI.changeNameValidity(status));
  },

  validateComment(status) {
    dispatch(ActionCreatorUI.changeCommentValidity(status));
  },

  addReview(review) {
    dispatch(ActionCreatorDATA.addNewReview(review));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal);