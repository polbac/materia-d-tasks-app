module.exports = (detail) => {
    return {
        code: 404,
        text: "Route not Found",
        detail,
    }
}