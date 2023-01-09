function Pessoa() {
    this.idade = 0 

    const vm = this
    setInterval(function() {
        vm.idade++
        console.log(vm.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa
