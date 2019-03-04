import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import * as actionTypes from "../../store/actions";

class Github extends Component {

  componentDidMount() {
    if(!this.props.issues.length) {
      this.props.onSetLoading(true);
      axios.get(axios.defaults.baseURL)
        .then((response) => {
          this.props.onSetIssues(response.data)
        }).catch((error) => {
        this.props.onSetError(error)
      }).finally(() => {
        this.props.onSetLoading(false)
      });
    }
  }

  render() {
    return (
      <>
        <Wrapper title="A github repo's listed issues">
          {this.props.error ? <h2 className="alert-warning">Something went wrong!</h2> :
            <ul className="list-group">
              {this.props.issues.map((issue) => {
                return <li className="list-group-item text-left"
                           key={issue.id}>{issue.url}</li>
              })}
            </ul>}
        </Wrapper>
        {this.props.loading ? <Loader/> : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    issues: state.github.issues,
    loading: state.github.loading,
    error: state.github.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSetLoading: (loading) => dispatch({type: actionTypes.SET_LOADING, value: loading}),
    onSetIssues: (issues) => dispatch({type: actionTypes.SET_ISSUES, value: issues}),
    onSetError: (error) => dispatch({type: actionTypes.SET_ERROR, value: error})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Github);
