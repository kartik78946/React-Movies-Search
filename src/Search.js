import React,{Component} from 'react';

class Search extends Component {

  submitForm(event){
  event.preventDefault();
  let value = this.refs.Title.value;
  this.props.searchProfile(value);
  this.refs.Title.value = '';

}

  render(){
    return(
      <div className="search-box">
      <form onSubmit={this.submitForm.bind(this)}>
      <label><input type="search" ref="Title" placeholder="Type Movie Name"/></label>
        </form>
      </div>
    );
  }
}

export default Search;
