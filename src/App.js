import { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Header';
import Form from './Components/Form';
import RepoList from './Components/ReposList';

class App extends Component{
  // O state funciona basicamente como uma memoria interna do nosso codigo
  // O state de uma classe não se comunica com a de outra classe
  state = {
        user: "",
        repositorio: [],
        error: "",
        loading: false,
  };
    //Recebo o nome do meu usuario que foi passado pelo input
    changeUser = user => {
    this.setState({user});
  }

  searchUser = async () => {

    const {user} = this.state;
    this.setState({loading: true})
    try {
         const {data : repositorio } = await
          axios
          .get(`https://api.github.com/users/${user}/repos`);
          console.log(repositorio)
          
          
          this.setState({ repositorio, erro:"" , loading:false })
    }catch (error){
      this.setState({
        error: 'Usuário não encontrado',
        repositorio:[],
        loading: false
      })
    }
   
  }
  
  render() {
    const {user, repositorio,error,loading} = this.state;
  return (
    <div className="App">      
     <Header></Header>
    <Form 
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
    ></Form>
       <RepoList repositorio={repositorio}>

       </RepoList>
    </div>
  );
}
}

export default App;
