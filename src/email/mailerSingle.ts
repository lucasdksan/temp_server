export const mailerSingle = (text: string, name: string, email: string)=>{
    return`
        <p>Nome: ${name}</p>
        <p>E-mail: ${email}</p>
        <p>${text}</p>
    `;
}