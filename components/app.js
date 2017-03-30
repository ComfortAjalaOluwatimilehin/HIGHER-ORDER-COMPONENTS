import React, {Component} from "react"
import {connect} from "react-redux"
import Header from "./header"
import Home from "./home"
import Secret from "./secret"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import REQAUTH from "./require_authentication"


class App extends Component{

		render(){
				return (

										<Router>
										    <div>
										     <Header/>
										      <hr/>

										        <Route exact path="/" component={Home}/>
										        <Route path="/secret" component={REQAUTH(Secret)}/>
										    </div>
										  </Router>


					)
		}
}



function mapStateToProps(state){
		return {
			posts:state
		}
}

export default connect(mapStateToProps)(App)