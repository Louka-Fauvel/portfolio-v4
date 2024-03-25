'use client'

import { sendContactForm } from "./lib/api";

export async function handleSubmit(event, CAPTCHAID) {
    event.preventDefault();
    const formData = {
        prenom: event.target.prenom.value,
        nom: event.target.nom.value,
        email: event.target.email.value,
        message: event.target.message.value
    }
    if (formData.prenom != "" && formData.nom != "" && formData.email != "" && formData.message != "") {
        await captchaGeeTest(formData, event, CAPTCHAID);
    }
}

export const handleCaptchaRandom = () => {
    let randomNumbers = "";
    for (let i = 0; i < 4; i++) {
        let min = 0;
        let max = 9;
        let random = Math.floor(Math.random() *(max - min)) + min;
        randomNumbers = randomNumbers + random;
    }
    document.getElementById("zoneCaptcha").classList.remove("hidden");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,100,30);

    ctx.font = "30px Rubik Glitch";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(randomNumbers, canvas.width/2, canvas.height/2);
    document.cookie = "captcha=" + randomNumbers + "; path=/contact; domain=localhost; max-age=360; samesite=strict";
}

export const captchaVerify = () => {
    let input = document.getElementById("captcha").value;

    if("captcha=" + input === document.cookie) {
        document.getElementById("zoneCaptcha").classList.add("hidden");
        document.getElementById("contactForm").disabled = false;
        document.getElementById("captcha").value = "";
    } else {
        document.getElementById("captcha").value = "";
        handleCaptchaRandom();
    }
}

export const captchaGeeTest = async (formData, event, CAPTCHAID) => {

    initGeetest4(
        {

            // Omit required configuration parameters
            product: "bind",
            language: "fra",
            captchaId: CAPTCHAID,

        },
        function (captchaObj) {
            captchaObj
                .onReady(function () {
                    // please call the showCaptcha method to show the CAPTCHA when it is ready
                    //console.log("Test1");
                    captchaObj.showCaptcha();
                })
                .onSuccess(async function () {
                    // your code, please reset the CAPTCHA based on you business
                    //document.getElementById("contactForm").disabled = false;
                    await sendContactForm(formData);
                    event.target.reset();
                })
                .onError(function () {
                    //your code
                    console.log("Erreur");
                });
      
            //press the button to submit event
      
            /*button.click = function () {
                // some code
      
                // check if the CAPTCHA is ready, and if onReady is executed
      
                captchaObj.showCaptcha(); //show the CAPTCHA
      
                // some code
            };*/
        }
    );
}