import propTypes from "prop-types";

CardWrapper.propTypes = {
    children: propTypes.node
}

function CardWrapper({ children }) {
  return (
    <div className="container d-flex flex-wrap justify-content-center mt-5">
      {children}
    </div>
  );
}

export default CardWrapper;
