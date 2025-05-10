
export const isTextEmpty = (text: string, alertMessage: string) => {
    if (text.trim().length < 1) {
        alert(alertMessage)
        return true
    }
    return false
}