import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import ReviewModal from "../modal/modal.jsx";
import MainContent from "../main-content/main-content.jsx";
import {connect} from "react-redux";
import {getModalStatus} from "../../reducer/ui/selectors";

function App(props) {
  const {isModalOpened} = props;

  return (
    <div className="App">
      {isModalOpened ? <ReviewModal /> : ''}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isModalOpened: getModalStatus(state),
});

export default connect(mapStateToProps, null)(App);
