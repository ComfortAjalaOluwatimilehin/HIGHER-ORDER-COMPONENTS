
import * as TYPES from "../actions/types"


export default function(state=false, action){

			switch(action.type){
					case TYPES.CHANGE_AUTH:
						return action.payload;
						break;
						default:
						return state;
			}
}