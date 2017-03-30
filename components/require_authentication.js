import React, {Component} from "react"
import {connect} from "react-redux"

export default function(ComposedComponent){

	class Authentication extends Component{
			componentWillMount(){
			
				if(!this.props.isAuth)
					this.context.router.history.push("/")
			}
			componentWillUpate(nextProps){
				if(!this.props.isAuth)
					this.context.router.history.push("/")
			}
			render(){
			
				return <ComposedComponent {...this.props} />
					
			}
	}

	Authentication.contextTypes =  {router:React.PropTypes.object}
	const mapStateToProps =(state)=>{
		return {isAuth:state.authenticated}
	}


	return connect(mapStateToProps)(Authentication)
}