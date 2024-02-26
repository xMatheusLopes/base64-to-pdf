
window.onload = function() {
    alertEl = document.getElementById('msg-error');
}

function dataURItoBlob(dataURI) {
    try {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'application/pdf'});
        return blob;
    } catch {
        alertEl.classList.remove('hidden')
    }
}

function convert() {
    alertEl.classList.add('hidden')

    try {
        const text = document.getElementById('base64').value;
        const data = text.match(/"content":.+/)[0].replace('"content":', '').substring(2).slice(0, -1);
    
        const blob = this.dataURItoBlob(data);
        const url = URL.createObjectURL(blob);
    
        window.open(url, '_blank');
    
        document.getElementById('base64').value = '';
    } catch {
        alertEl.classList.remove('hidden')
    }
}