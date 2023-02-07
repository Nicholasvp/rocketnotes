import {FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

export function NoteItem({isNew, value, onClik, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input 
            type="text" 
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <button
            type="button"
            onClick={onClik}            
            > 
            { isNew ? <FiPlus /> : <FiX />}           
            </button>
        </Container>

    )
}