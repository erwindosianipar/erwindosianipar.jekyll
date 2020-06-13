---
layout: page
title: Contact
permalink: /contact/
---

Hi, if you want to contact me, just send me message from this form, I will receive your message via email and I will reach as soon as possible 📭😉

<div class="uk-child-width-expand@m" uk-grid>
    <div>
        <div class="uk-margin">
            <div class="uk-text-bold">Name</div>
            <input class="uk-input" placeholder="name@domain.com" id="email">
        </div>
        <div class="uk-margin">
            <div class="uk-text-bold">Message</div>
            <textarea class="uk-textarea uk-height-small" placeholder="Insert your message" id="message"></textarea>
        </div>
        <div class="uk-margin">
            <button class="uk-button uk-button-primary" id="button" onclick="sendMessage()">Send</button>
        </div>
    </div>
</div>

#### <span class="pretty">Let’s make something great together!</span> 🤩

Or you can find all my social media account at sidebar of this website. I will be happy to listen to you 😉

If you have a something trouble to find me at internet, you can call my name three times btw hahahaha, feel free to contact me.

<script>
    function sendMessage() {
        var postEmail = document.getElementById("email").value;
        var postMessage = document.getElementById("message").value;

        if (!(validateEmail(postEmail))) {
            UIkit.modal.alert("Please insert a valid email address 😉");
            return;
        } else if (postMessage == "") {
            UIkit.modal.alert("Please insert your message 😉");
            return;
        }

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        $.ajax({
            url: "https://formspree.io/maypjpvv",
            method: "POST",
            data: {
                email: postEmail,
                message: postMessage,
            },
            dataType: "json",
            success: function(response) {
                UIkit.modal.dialog("<p class=\"uk-modal-body\">Your message has been sent, thank you for contact me 🥰</p>");
                document.getElementById("button").innerHTML = "Sent <span uk-icon=\"check\"></span>";
            },
            error: function(error) {
                UIkit.modal.dialog("<p class=\"uk-modal-body\">Oops. Something went wrong. Please try again later 🧐</p>");
                document.getElementById("button").innerHTML = "Fail <span uk-icon=\"close\"></span>";
            }
        })
    }
</script>