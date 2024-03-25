
export const sendContactForm = async (data) => {
    
    const URL = process.env.URL;

    await fetch(URL+'/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
}