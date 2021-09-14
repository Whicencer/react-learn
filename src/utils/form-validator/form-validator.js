export const requiredField = value => {
    return value ? undefined : 'Field is required'
}
export const minLength = min => value => {
    return value && value.length < min ? `Please, type ${min} or more symbols` : undefined
}