
export default (value) => {
    return new Intl.NumberFormat(undefined, { 
        notation: "compact",
        compactDisplay: "long"
    }).format(value);
}