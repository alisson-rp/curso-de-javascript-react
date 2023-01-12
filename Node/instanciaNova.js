// uma factory retorna um novo object
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}