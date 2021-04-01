import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import ReviewModal from "../modal/modal.jsx";
import PropTypes from 'prop-types';
import MainContent from "../main-content/main-content.jsx";
import {connect} from "react-redux";
import {getModalStatus} from "../../reducer/ui/selectors";

function App(props) {
  const {isModalOpened} = props;

  return (
    <div className="app">
      {isModalOpened ? <ReviewModal /> : ''}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

App.propTypes = {
  isModalOpened: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isModalOpened: getModalStatus(state),
});

export default connect(mapStateToProps, null)(App);
