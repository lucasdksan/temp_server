export default function validationDoc(doc: string){
    const docRegex = doc.replace(/[\/\.\-\:]/g, '');
    
    return doc.includes("/") ? { docRegex:docRegex.trim(), isError: true } :  { docRegex:docRegex.trim(), isError: false };
}