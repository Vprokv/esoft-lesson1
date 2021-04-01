import {useMemo, useState} from "react";

const validators = {
    minLength: (value, condition) => value.length < condition ? new Error(`Поле должно содержать минимум ${condition} символ(-a, -ов)`) : value,
    maxLength: (value, condition) => value.length > condition ? new Error(`Поле может содержать до ${condition} символ(-a, -ов)`) : value,
    isEmpty: (value) => value.length < 1 ? new Error("Поле не может быть пустым") : value,
    isEmail: value => !value.includes('@') ? new Error("Укажите email"): value,

}
const useValidation = (value, validations) => {
    const parsedValidations = useMemo(() => Object.entries(validations), [validations])

    const errors = useMemo(() => parsedValidations.reduce((acc, [key, condition]) => {
        const result = validators[key](value, condition)
        if (result instanceof Error) {
            acc.push(result.message)
        }
        return acc
    }, []), [value])


    return {
        inputValid: errors.length === 0,
        errors,
    }

}



export default  (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}