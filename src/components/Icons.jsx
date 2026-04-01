import React from 'react';

export const InstagramIcon = ({ size = 24, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const WhatsAppIcon = ({ size = 24, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 3.8.9L21 1.5l-1.5 5.5Z"></path>
    </svg>
);

export const PhoneEmojiIcon = ({ size = 28, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 48 48" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <linearGradient id="phoneGradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FB7185" />
                <stop offset="1" stopColor="#E11D48" />
            </linearGradient>
            <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
                <feOffset dx="1" dy="1" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <path 
            d="M36.3 30.2c-1.3 0-2.6-.2-3.8-.6-.4-.1-.8 0-1.1.3l-2.4 2.4c-3.1-1.6-5.6-4.1-7.2-7.2l2.4-2.4c.3-.3.4-.7.3-1.1-.4-1.2-.6-2.5-.6-3.8 0-.6-.5-1.1-1.1-1.1H19c-.6 0-1.1.5-1.1 1.1 0 10.2 8.3 18.5 18.5 18.5.6 0 1.1-.5 1.1-1.1v-3.8c-.1-.7-.6-1.2-1.2-1.2z" 
            fill="url(#phoneGradient)" 
            filter="url(#phoneShadow)"
        />
    </svg>
);
