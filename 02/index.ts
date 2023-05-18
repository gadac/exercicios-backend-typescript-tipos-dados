const usuarios: { nome:string, idade:number, status:boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const procurandoPessoas = (lista: { nome:string, idade:number, status:boolean }[]):
{ nome:string, idade:number, status:boolean }[] => {
    let pessoas: { nome: string; idade: number; status: boolean }[];
    pessoas = lista.filter(usuario => usuario.nome.startsWith('Jo'))

    return pessoas
}

console.log(procurandoPessoas(usuarios));
