        // Navbar Active State Logic
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".sidebar .nav-link");

        window.onscroll = () => {
            var current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.getAttribute("href").includes(current)) {
                    li.classList.add("active");
                }
            });
        };

        // Simple Portfolio Filter
        const filterButtons = document.querySelectorAll('#portfolio-filters button');
        const items = document.querySelectorAll('.project-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                items.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Contact Form to Email or WhatsApp
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('input[type="text"]').value;
            const message = document.querySelector('textarea').value;
            const sendMethod = document.querySelector('input[name="sendMethod"]:checked').value;
            
            if (sendMethod === 'email') {
                const subject = 'Message from Portfolio Contact Form';
                const body = `Name: ${name}%0A%0AMessage: ${message}`;
                const url = `mailto:muhammadnaufal1192@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = url;
            } else if (sendMethod === 'whatsapp') {
                const waNumber = '6285158789460';
                const text = `Name: ${name}%0AMessage: ${message}`;
                const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
                window.open(url, '_blank');
            }
        });