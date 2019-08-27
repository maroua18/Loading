import React from 'react';
import './loading.css';
const IsLoading = (Component) => {
return class Spinner extends React.Component {
    state = {
      loading: true,
    }

    componentDidMount() {
     setTimeout(  
      () => this.setState({ loading: false })
      ,1000)   
    }
  

    render() {
    return this.state.loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        :<Component {...this.props} />
        }
      }
    }
  export default IsLoading ;