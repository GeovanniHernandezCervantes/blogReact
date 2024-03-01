/* IMPORTAMOS LIBRERIA DE VALIDACION DE FORMULARIOS [FORMIK]*/
import { Field, ErrorMessage } from 'formik'

const SelectB = (props) => {
    return (
        <>
            <div className={`${props.classNameDiv?? ''}`} id={`${props.idDiv?? ''}`} name={`${props.nameDiv?? ''}`}>
                {props.label&&<label htmlFor={`${props.idInput ?? ''}`} className={`form-label ${props.classNameLabel?? ''}`}>{props.label}</label>}
                <Field as='select' defaultValue={props.defaultValue} type={`${props.typeInput}`}  name={`${props.nameInput ?? ''}`} id={`${props.idInput ?? ''}`} placeholder={`${props.placeholderInput ?? ''}`} className={`${props.classNameInput?? ''}`} autoComplete={`${props.autoCompleteInput?? ''}`} disabled={props.disabledInput?? ''} minLength={props.minLengthInput?? ''} maxLength={props.maxLengthInput?? ''} innerRef={props.innerRef} onKeyUp={props.onKeyUpInput} onKeyDown={props.onKeyDownInput} onClick={props.onClickInput} onChange={props.onChange}>
                    {props.children}
                </Field>
                {props.ErrorMessage&&<ErrorMessage name={`${props.nameInput}`} component='div' className={`${props.classNameError?? ''}`}/>}
            </div>
        </>
    )
}

/*
[DIV]
    -idDiv => id del div
    -nameDiv => nombre del div
    -classNameDiv => className para las clases del DIV

[LABEL]
    -label =>texto deseado a mostrar
    -id => id asignado al input y a la etiqueta htmlFor del label para relacionarlos
    -classNameLabel => className para las clases del label

[FIELD]
    -typeInput => tipo de FIELD input
    -idInput => id del FIELD input
    -nameInput => nombre del FIELD input para usar ErrorMessage el name debe ser igual en FIELD y ERRORMESSAGE
    -placeholderInput => placeholder descripcion del campo
    -classNameInput => className para las clases del FIELD
    -autoCompleteInput => autoComplete del FIELD input para usuario se usa "current-username" y para contraseña "current-password"
    -disabledInput => disabled del FIELD input true / false activa o desactiva su edicion
    -minLengthInput => minLength FIELD input longitud minima
    -maxLengthInput => maxLength FIELD input longitud maxima

[ERRORMESSAGE]
    -ErrorMessage => true / false para activar o desactivar
    -name => nombre del input para usar ErrorMessage el name debe ser igual en FIELD y ERRORMESSAGE
    -classNameError => className para las clases del ERRORMESSAGE
*/
export { SelectB }
