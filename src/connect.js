import React, { useContext } from "react";
import StoreContext from "./StoreContext";

const connect = (mapStateToProps, mapDispatchToProps) => {
    const wrapComponent = (Component) => {

        return (props) => {
            const { state, dispatch } = useContext(StoreContext);

            const stateProps = mapStateToProps ? mapStateToProps(state) : {};
            const dispatchProps = mapDispatchToProps ? mapDispatchToProps(dispatch) : {};
            const newProps = { ...props, ...stateProps, ...dispatchProps };

            return (
                <Component {...newProps} />
            );
        }
    }

    return wrapComponent;
}

export default connect;