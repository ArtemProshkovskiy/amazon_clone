import React, {useEffect} from 'react';

function BackToTop(props) {
    // Function to handle smooth scrolling
    const smoothScroll = (e) => {
        e.preventDefault();

        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        // Attach click event listeners to anchor links for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScroll);
        });

        // Clean up event listeners when the component unmounts
        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', smoothScroll);
            });
        };
    }, []); // Empty dependency array to run this effect only once

    return (
        <a href="#header" className="text-center text-white text-2xl mt-auto">
            <div className="bg-light_blue text-center pt-2 pb-2 hover:bg-light_blue_hover transition-all delay-300">
                Back to top
            </div>
        </a>
    );
}

export default BackToTop;
