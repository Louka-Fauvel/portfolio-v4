
export const sendContactForm = async (data) => {
    
    let URL = process.env.URL;

    if(!process.env.URL) {
        URL = null;
    }

    await fetch(URL+'/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
}