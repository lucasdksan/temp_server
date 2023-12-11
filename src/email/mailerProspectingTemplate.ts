export const mailerProspectingTemplate = (name: string, city: string, uf: string, company: string, type: string)=>{
    return`
        <p>${company}</p>
        <p>${city}/${uf}</p>

        <p>${type} do(a) Sr.(a) ${name}</p>
        <p>Ref. apresentação comercial de empresa especializadas em projetos.</p>

        <p>Prezado(a),</p>

        <p>É com satisfação que nos apresentamos como uma empresa especializada em projetos de combate a incêndio, dedicada a garantir a segurança e a proteção de seus clientes. Com expertise consolidada, oferecemos soluções personalizadas e inovadoras para prevenção e combate a incêndios.</p>

        <p>Nossa equipe altamente qualificada e comprometida é capaz de elaborar projetos detalhados e eficientes, alinhados às normas e regulamentos vigentes, visando à segurança e ao bem-estar de todos os envolvidos. Atuamos com tecnologia de ponta e metodologias atualizadas, garantindo excelência em cada etapa do processo.</p>

        <p>Além disso, nos orgulhamos da nossa capacidade de oferecer serviços de consultoria e assessoria, assegurando que nossos clientes tenham total suporte desde o planejamento até a implementação e manutenção dos sistemas de prevenção e combate a incêndio.</p>

        <p>Estamos à disposição para discutir detalhes específicos e apresentar soluções que atendam às necessidades exclusivas de sua organização.</p>

        <p>Podendo realizar contato através desta correspondência ou através do telefone/WhatsApp: (84)4042-0858</p>

        <p>Atenciosamente,</p>
        <p>Bruno Lima</p>
        <p>@slparqt</p>
        <p>Telefone: (84) 4042-0858</p>
        <p>Email: comercial@slparticipacoes.com</p>
    `;
};
