import React from 'react';

function AtlasGoogleMap() {
    return (
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8918851175775!2d71.41004707638941!3d51.14494237172883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA4JzQxLjgiTiA3McKwMjQnNDQuMCJF!5e0!3m2!1sen!2sus!4v1615293800516!5m2!1sen!2sus"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Google Map"
        ></iframe>
    );
}

export default AtlasGoogleMap;