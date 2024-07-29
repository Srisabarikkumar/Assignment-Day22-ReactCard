/* eslint-disable react/prop-types */

function CardWrapper(props) {
    return <div className="container d-flex flex-wrap justify-content-center mt-5">
        {props.children}
    </div>
}

export default CardWrapper;