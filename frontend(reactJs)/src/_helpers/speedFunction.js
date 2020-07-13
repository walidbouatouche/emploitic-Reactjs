function onlyNmbrAlph(text) {
    // function for remove bad letter 
    return text.replace(/[^A-Za-z-1-2 _]/ig, '')
}


function dowloadPdfBlob(data,title) {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', title + '.pdf');
    document.body.appendChild(link);
    link.click();
}

export {
    onlyNmbrAlph,
    dowloadPdfBlob
}