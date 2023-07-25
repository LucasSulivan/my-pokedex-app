import PropTypes from 'prop-types'
import { useState } from 'react'

function NavBar ({index, setIndex}) {
    const [prevVisible,setPrevVisible] = useState('none')
    const [nextVisible,setNextVisible] = useState('inline')

    const handlerClickNext=()=>{
        setPrevVisible('inline')

            if(index < 3){ 
                setIndex( index + 1)
            }
            if(index == 3) {
                setNextVisible('none')
            }
    }

    const handlerClickPrev=()=>{
        setNextVisible('inline')

        if( index < 2) {
            setPrevVisible('none')
        }
        if(index >= 1){
            setIndex( index - 1)
          }
    }

    return (
        <div>
            <button style={{display: prevVisible}} onClick={handlerClickPrev}>Prev</button>
            <button style={{display: nextVisible}} onClick={handlerClickNext}>Next</button>
        </div>
    )
}

NavBar.propTypes = {
    index: PropTypes.number.isRequired,
    setIndex: PropTypes.elementType,
}

export default NavBar