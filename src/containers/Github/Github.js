import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';
import Wrapper from '../../components/UI/Wrapper/Wrapper';

class Github extends Component {
  state = {
    issues: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.setState({loading: true});
    axios.get(axios.defaults.baseURL)
      .then((response) => {
        this.setState({
          issues: response.data
        })
      }).catch((error) => {
      this.setState(
        {error: error})
    }).finally(() => {
      this.setState(
        {loading: false})
    });
  }

  render() {
    return (
      <>
        <Wrapper title="A github repo issues listed">
          {this.state.error ? <h2 className="alert-warning">Something went wrong!</h2> :
            <ul className="list-group">
              {this.state.issues.map((issue) => {
                return <li className="list-group-item text-left"
                           key={issue.id}>{issue.url}</li>
              })}
            </ul>}
        </Wrapper>
        {this.state.loading ? <Loader/> : null}
      </>
    );
  }
}

export default Github;
