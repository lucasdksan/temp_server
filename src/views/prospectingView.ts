function prospectingView(prospecting: any){
    return {
        interested: prospecting.nome,
        fantasy_name: prospecting.fantasia,
        size_company: prospecting.porte,
        legal_nature: prospecting.natureza_juridica,
        public_place: prospecting.logradouro,
        number: prospecting.numero,
        complement: prospecting.complemento,
        neighborhood: prospecting.bairro,
        city: prospecting.municipio,
        uf: prospecting.uf,
        cep: prospecting.cep,
        tel: prospecting.telefone,
        email: prospecting.email,
        contact_name: prospecting.qsa.length > 0 ? prospecting.qsa[0].nome : "",
        opening: prospecting.abertura,
        in_activity: prospecting.situacao,
        type_company: prospecting.tipo,
        status_company: prospecting.status,
        date_situation: prospecting.data_situacao,
        last_update: prospecting.ultima_atualizacao,
        efr: prospecting.efr,
        reason_situation: prospecting.motivo_situacao,
        special_situation: prospecting.situacao_especial,
        special_situation_date: prospecting.data_situacao_especial,
        share_capital: prospecting.capital_social
    }
}