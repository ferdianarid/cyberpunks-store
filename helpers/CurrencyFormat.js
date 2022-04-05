const NumberFormatInt = (number) => {
    const afterFormat = new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(number)
    return afterFormat
}

export default NumberFormatInt