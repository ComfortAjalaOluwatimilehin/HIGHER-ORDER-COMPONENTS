import React, {Component} from "react"
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import * as ACTIONS from "../actions/index"

class Header extends Component{

	authButton(){

			if (this.props.isAuth)
				return <button onClick={()=> this.props.authenticate(false)} >Sign Out </button>
			
				return <button onClick={()=> this.props.authenticate(true)}>Sign In </button>
	}

	render(){

		return (

						<nav>
								<ul>
									<li>
										<Link to="/"> Home </Link>
										<Link to="/secret"> Secret </Link>
										{this.authButton()}
									</li>
									
									
								</ul>
						</nav>
			


			)
	}
}


const mapStateToProps =(state)=>{
	return {
		isAuth:state.authenticated
	}
}



export default connect(mapStateToProps, ACTIONS)(Header)