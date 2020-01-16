// @flow

import history from './history'

export default function navigateTo(path: string, state:object) {
    if(state) {
        history.push(path, state:state)
    }else{
        history.push(path)
    }
    
}