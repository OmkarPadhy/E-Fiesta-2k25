import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './home.css';
import welcomeVideo from './assets/videoplayback.mp4';
import 'remixicon/fonts/remixicon.css';
import Developer from './pages/developer';

const Main = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const mainRef = useRef(null);
    const homeRef = useRef(null);
    const videoRef = useRef(null);
    const eventsRef = useRef(null);  // Add this ref

    const scrollToEvents = () => {
        eventsRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            // block: 'start'
        });
    };

    useEffect(() => {
        // Handle scroll to section when navigating from other pages
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // Clear the state to prevent scrolling on subsequent renders
            window.history.replaceState({}, document.title);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    useEffect(() => {
        // Reset scroll position when component mounts
        if (!location.state?.scrollTo) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    useEffect(() => {
        // Countdown timer logic
        const countdownElement = document.querySelector('.countdown');
const eventDate = Date.UTC(2025, 9, 11, 2, 30, 0);




        const countdown = setInterval(function () {
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div>${days}<span>Days</span></div>
                <div>${hours}<span>Hours</span></div>
                <div>${minutes}<span>Minutes</span></div>
                <div>${seconds}<span>Seconds</span></div>
            `;

            if (distance < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = '<div class="expired">The fest has started!</div>';
            }
        }, 1000);

        // Cleanup function
        return () => {
            clearInterval(countdown);
        };
    }, []);

    useEffect(() => {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('section, .gallery-item, .events-card');
        elements.forEach(el => {
            observer.observe(el);
        });

        // Cleanup function
        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    useEffect(() => {
        // Debug logging for home section
        const homeSection = document.getElementById('home');
        if (homeSection) {
            console.log('Home section found:', {
                offsetTop: homeSection.offsetTop,
                offsetHeight: homeSection.offsetHeight,
                clientHeight: homeSection.clientHeight,
                scrollTop: window.scrollY,
                windowHeight: window.innerHeight,
                isVisible: homeSection.getBoundingClientRect().top < window.innerHeight
            });
        } else {
            console.log('Home section not found');
        }
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('loadeddata', () => {
                console.log('Welcome video loaded successfully');
            });
            videoRef.current.addEventListener('error', (e) => {
                console.error('Error loading welcome video:', e);
            });
        }
    }, []);

    useEffect(() => {
        const eventsGrid = document.querySelector('.events-grid');
        const eventsWrapper = document.querySelector('.events-wrapper');

        const updateScrollIndicators = () => {
            if (eventsGrid && eventsWrapper && window.innerWidth > 768) {
                const canScroll = eventsGrid.scrollWidth > eventsGrid.clientWidth;
                const isStart = eventsGrid.scrollLeft <= 10;
                const isEnd = eventsGrid.scrollLeft >= eventsGrid.scrollWidth - eventsGrid.clientWidth - 10;

                eventsWrapper.classList.toggle('no-scroll', !canScroll);
                eventsWrapper.classList.toggle('start', isStart);
                eventsWrapper.classList.toggle('end', isEnd);
            }
        };

        // Only add touch scroll handling for desktop
        if (window.innerWidth > 768) {
            let isDown = false;
            let startX;
            let scrollLeft;

            eventsGrid?.addEventListener('mousedown', (e) => {
                isDown = true;
                eventsGrid.style.cursor = 'grabbing';
                startX = e.pageX - eventsGrid.offsetLeft;
                scrollLeft = eventsGrid.scrollLeft;
            });

            eventsGrid?.addEventListener('mouseleave', () => {
                isDown = false;
                eventsGrid.style.cursor = 'grab';
            });

            eventsGrid?.addEventListener('mouseup', () => {
                isDown = false;
                eventsGrid.style.cursor = 'grab';
            });

            eventsGrid?.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - eventsGrid.offsetLeft;
                const walk = (x - startX) * 2;
                eventsGrid.scrollLeft = scrollLeft - walk;
            });
        }

        eventsGrid?.addEventListener('scroll', updateScrollIndicators);
        window.addEventListener('resize', updateScrollIndicators);
        updateScrollIndicators();

        return () => {
            eventsGrid?.removeEventListener('scroll', updateScrollIndicators);
            window.removeEventListener('resize', updateScrollIndicators);
        };
    }, []);

    return (
        <div className="main-container">
            <Navbar />
            
            {/* Welcome Section */}
            <section id="home" className="welcome-section" ref={homeRef}>
                <video 
                    ref={videoRef}
                    autoPlay 
                    muted  
                    loop 
                    playsInline 
                    className="section-video"
                >
                    <source src={welcomeVideo} type="video/mp4" />
                </video>
                <div className="section-overlay"></div>
                <div className="welcome-content">
                    <h1 className="welcome-title">
                        <span className="highlight">E-fiesta</span>
                        <span className="highlight-year"> 2k25</span>
</h1>

                    <p className="welcome-text">
                        💜 जिना ECE का नाम है 🩷
                    </p>
                    <div className="countdown">
                        <div><span id="days">00</span><span>Days</span></div>
                        <div><span id="hours">00</span><span>Hours</span></div>
                        <div><span id="minutes">00</span><span>Minutes</span></div>
                        <div><span id="seconds">00</span><span>Seconds</span></div>
                    </div>
                    <div className="welcome-buttons">
                        <button onClick={scrollToEvents} className="btn primary-btn">Explore Events</button>
                        
                    </div>
                </div>
            </section>
            
            {/* Events Section */}
            <div id="events" className="events-wrapper" ref={eventsRef}>
                <div className="events-container">
                    <div className="section-title-container">
                        <h2>Events</h2>
                        <p className="section-description">Discover our exciting lineup of activities</p>
                    </div>
                    <div className="events-grid">
                        <div className="events-card" onClick={() => navigate('/events/technical')}>
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Tech events" />
                            <h3>Technical</h3>
                            <p>Dive into the core of tech. From circuit design to coding challenges.</p>
                        </div>
                        <div className="events-card" onClick={() => navigate('/events/nontech')}>
                            <img src="https://images.unsplash.com/photo-1557461762-e08315322e3d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Non-tech events" />
                            <h3>Non-Technical</h3>
                            <p>Step beyond the screen. Unleash your creativity and capture moments.</p>
                        </div>
                        <div className="events-card" onClick={() => navigate('/events/cultural')}>
                            <img src="https://images.unsplash.com/photo-1619734089700-842e56497353" alt="Cultural events" />
                            <h3>Cultural</h3>
                            <p>Express your soul. From rhythm to artistry, immerse in culture.</p>
                        </div>
                        <div className="events-card" onClick={() => navigate('/events/sports')}>
                            <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211" alt="Sports events" />
                            <h3>Sports</h3>
                            <p>Unleash your competitive spirit. Experience thrill and teamwork.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About/Explore Section */}
            <div id="about" className="about-wrapper">
                <div className="about-container">
                    <h2>Explore</h2>
                    <p className="section-description">Get official merchandise and exclusive content</p>
                    <div className="events-grid">
                        <div className="events-card" onClick={() => navigate('/gallery')}>
                            <img src="https://images.unsplash.com/photo-1522836924445-4478bdeb860c?q=80&w=2069&auto=format&fit=crop" alt="Album Cover" />
                            <h3>Gallery</h3>
                            <p>Explore our event memories through a collection of high-quality photos from previous events.</p>
                        </div>
                        <div className="events-card" onClick={() => navigate('/t-shirt')}>
                            <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop" alt="T-shirt Design" />
                            <h3>T-Shirt</h3>
                            <p>Get your hands on our limited edition merchandise. Stylish and comfortable t-shirts with unique Future Fest designs.</p>
                        </div>
                        {/* <div className="events-card" onClick={() => navigate('/Developer')}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team" />
                            <h3>Our Team</h3>
                            <p>Meet the passionate individuals behind Future Fest. A diverse team of creators, innovators, and dreamers.</p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-wrapper">
                <div className="footer-content">
                    <div className="footer-logo-section">
                        <div className="footer-logo">
                            <img src="https://i.postimg.cc/8c3pC47H/logo.jpg" alt="Fest Logo" />
                        </div>
                        <div className="social-links">
                            {/* <a href="#" className="social-icon" target="_blank"><i class="ri-facebook-circle-fill"></i></a> */}
                            {/* <a href="#" className="social-icon" target="_blank"><i class="ri-twitter-x-line"></i></a> */}
                            <a href="https://www.instagram.com/efiesta1/" className="social-icon" target="_blank"><i class="ri-instagram-fill"></i></a>
                            {/* <a href="#" className="social-icon" target="_blank"><i class="ri-linkedin-fill"></i></a> */}
                        </div>
                    </div>
                    <div className="contact-grid">
                        {/* <div className="contact-column">
                            <h4>Department Contact</h4>
                            <p>HOD ECE: +91 8594949898</p>
                        </div> */}
                        <div className="contact-column">
                            <h4>Registration Support</h4>
                            <p>Phone: +91 8480776011</p>
                            <p>Phone: +91 8260584377</p>
                            <p>Email: efiesta23@gmail.com</p>
                        </div>
                        <div className="contact-column">
                            <h4>Event Related Queries</h4>
                            <p>Phone: +91 9876543213</p>
                            <p>Phone: +91 9876543214</p>
                        </div>
                        <div className="contact-column">
                            <h4>Website Support</h4>
                            <p>Phone: +91 7846878972</p>
                            <p>Phone: +91 9438502122</p>
                            <p>Email: efiesta23@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2025 E.fiesta. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};


export default Main;
