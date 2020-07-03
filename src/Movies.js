import React,{Component} from 'react';
import Profile from './Profile';
import Search from './Search';

const api = 'https://api.themoviedb.org/3/search/movie?api_key=f4700e551e48ac2adadbf291b392dea6'

class Movies extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      result: [],
      notFound: '',
    };
  }

  getProfile(title){
      let finalURL = `${api}&query=${title}`;
      fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          title:title,
          result:data.results,
          notFound:data.total_results,
  });
})
.catch((error) => console.log('There is a problem'));
}


  render(){
    return(
      <div>
      <section id="card">
        <Search searchProfile ={this.getProfile.bind(this)} />
        <Profile userData = {this.state}/>
        </section>
      </div>
    );
  }
}

export default Movies;
