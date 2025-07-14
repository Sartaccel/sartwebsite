(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

}(jQuery));

// Chat-Bot
function toggleChatContainer() {
    const chatContainer = document.getElementById("Chat-Container");
    chatContainer.style.display = chatContainer.style.display === "none" ? "flex" : "none";
}

function closeChatContainer() {
    document.getElementById("Chat-Container").style.display = "none";// Hide chatbot on close
}
const responses = {
    "hello": {
        keywords: ["hello", "hi", "hey", "greetings"],
        responses: [
            "Hello! How can I assist you today?",
            "Hi there! What can I help you with?",
            "Greetings! Feel free to ask me anything about our services.",
            "Hey! I'm here to help with any questions you may have."
        ]
    },
    "about": {
        keywords: ["about", "about us", "who are you", "who is sart", "what is sart"],
        responses: [
            "SART Accelerator is here to help startups succeed with marketing and sales acceleration.",
            "We’re a company dedicated to supporting early-stage startups through structured frameworks and investment.",
            "Our mission at SART is to enable startups to break through growth barriers with tailored solutions.",
            "SART provides expertise, resources, and guidance to help startups succeed in competitive markets."
        ]
    },
    "goal": {
        keywords: ["goal", "mission", "purpose", "objectives"],
        responses: [
            "Our goal at SART is to empower startups to thrive in the market.",
            "We aim to fuel startup success through innovative business solutions.",
            "Our mission is to support startups with growth strategies tailored to their needs.",
            "SART’s purpose is to help startups overcome challenges and achieve long-term success."
        ]
    },
    "services": {
        keywords: ["services", "what do you offer", "offerings", "solutions"],
        responses: [
            "We offer services like marketing strategies, sales optimization, and lead acquisition.",
            "Our services cover digital marketing, business consultancy, market analysis, and financial projections.",
            "From lead generation to market analysis, we provide comprehensive business support.",
            "Our solutions are designed to accelerate growth and optimize business operations for startups."
        ]
    },
    "contact": {
        keywords: ["contact", "get in touch", "reach you", "contact us"],
        responses: [
            "You can reach us on WhatsApp here: <a href='https://wa.me/918190016665' target='_blank'>Contact Us on WhatsApp</a>.",
            "<a href='https://wa.me/918190016665' target='_blank'>Feel free to contact us on WhatsApp if you need more information.</a>.",
            "We're available on WhatsApp for any questions you have. Reach out here: <a href='https://wa.me/918190016665' target='_blank'>Message us on WhatsApp</a>.",
            "Connect with us on WhatsApp anytime for quick support! <a href='https://wa.me/918190016665' target='_blank'>Click here to chat with us</a>."
        ]
    },
    "why choose us": {
        keywords: ["why choose", "why us", "benefits", "advantages"],
        responses: [
            "Our end-to-end support and strategic seed funding make us a valuable partner.",
            "We work collaboratively with startups to ensure long-term success and scalability.",
            "SART offers a team of experts dedicated to helping startups grow in competitive markets.",
            "Our tailored approach provides startups with a strong foundation to achieve their business goals."
        ]
    },
    "vision": {
        keywords: ["vision", "future goals", "long term goals", "aspirations"],
        responses: [
            "By 2034, we aim to empower 1,000 CEOs and create 100,000 jobs.",
            "Our vision includes raising $100 million in capital and reaching a $2 billion valuation.",
            "We’re committed to fostering sustainable growth and impactful change for startups.",
            "Our long-term goals reflect our dedication to supporting the next generation of entrepreneurs."
        ]
    },
    "careers": {
        keywords: ["team", "jobs", "careers", "join"],
        responses: [
            "Join our team through TalentTurbo, our recruitment platform for innovative talent. Explore opportunities here: <a href='https://www.talentturbo.us/' target='_blank'>TalentTurbo</a>.",
            "Explore job opportunities and apply via TalentTurbo: <a href='https://www.talentturbo.us/' target='_blank'>Join to get a Job</a>.",
            "We welcome passionate individuals to join our growing team through TalentTurbo. Visit <a href='https://www.talentturbo.us/' target='_blank'>TalentTurbo</a> to learn more.",
            "TalentTurbo streamlines our recruitment process, making it easy to find a role that fits you. Start your journey with us here: <a href='https://www.talentturbo.us/' target='_blank'>TalentTurbo</a>.",
            "Ready to make an impact? Join our dynamic team through TalentTurbo. Start your application here: <a href='https://www.talentturbo.us/' target='_blank'>Apply on TalentTurbo</a>.",
            "Passionate about startups? We’re looking for dedicated professionals to join us! Explore open positions and apply through TalentTurbo: <a href='https://www.talentturbo.us/' target='_blank'>Join to get a Job</a>.",
            "Our team is growing, and we want you to be part of it! Check out TalentTurbo for career opportunities tailored for innovative thinkers: <a href='https://www.talentturbo.us/' target='_blank'>TalentTurbo</a>.",
        ]
    },
    "investment": {
        keywords: ["investment", "funding", "capital", "financing"],
        responses: [
            "Our seed funding provides startups the financial boost they need for growth.",
            "We offer strategic investment along with active support in your growth journey.",
            "SART's funding goes beyond capital; we become partners in your success.",
            "Looking for funding? We provide strategic support and investment for startups."
        ]
    },
    "support": {
        keywords: ["support", "help", "assistance", "guidance"],
        responses: [
            "Our team is here to guide you through every stage of growth and challenges.",
            "Need help with business strategy? We offer personalized support for startups.",
            "We provide assistance with market strategy, financial advice, and much more.",
            "At SART, our support extends through every phase of your startup journey."
        ]
    }
};



function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userMessage = inputField.value.trim();
    if (userMessage === "") return;

    addMessage(userMessage, "user-message");
    showTypingIndicator();
    inputField.value = "";
}

function addMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElem = document.createElement("div");
    messageElem.className = `message ${className}`;
    messageElem.innerHTML = message;
    chatBox.appendChild(messageElem);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    const chatBox = document.getElementById("chat-box");
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "message bot-message typing-indicator";
    typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        typingIndicator.remove();
        getResponse();
    }, 2000);
}

function getResponse() {
    const userMessage = document.querySelector(".user-message:last-of-type").textContent.toLowerCase();
    let response = "I'm here to help! Try asking about our 'services', 'contact', 'support', or 'careers'.";

    Object.values(responses).forEach(entry => {
        // Add both singular and plural variations of keywords
        const allKeywords = entry.keywords.flatMap(keyword => [
            keyword,
            keyword.endsWith('s') ? keyword.slice(0, -1) : keyword + 's'
        ]);

        // Check if any keyword in the entry matches part of the user message
        allKeywords.some(keyword => {
            if (userMessage.includes(keyword)) {
                const possibleResponses = entry.responses;
                response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
                return true; // Break the loop once a match is found
            }
        });
    });

    addMessage(response, "bot-message");
}