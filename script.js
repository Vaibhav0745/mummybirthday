* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
    background: linear-gradient(135deg, #FFE4E1 0%, #FFB6C1 25%, #E6E6FA 50%, #DDA0DD 75%, #F0E6FF 100%);
    background-size: 400% 400%;
    animation: gradientShift 20s ease infinite;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    position: relative;
    background-attachment: fixed;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

#confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
    max-width: 100%;
    max-height: 100%;
}

/* Music Control Button - Small Round */
.music-control-btn {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(233, 30, 99, 0.4);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
}

.music-control-btn:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 1);
    border-color: rgba(233, 30, 99, 0.6);
}

.music-control-btn:active {
    transform: scale(0.95);
}

.music-control-btn.muted {
    opacity: 0.6;
    background: rgba(200, 200, 200, 0.9);
}

.music-control-btn.muted .music-icon {
    opacity: 0.5;
}

.music-icon {
    font-size: 1.5rem;
    display: inline-block;
    transition: transform 0.3s ease;
    line-height: 1;
}

.music-control-btn:hover .music-icon {
    transform: rotate(15deg) scale(1.1);
}

.music-text {
    display: none;
}

@media (max-width: 480px) {
    .music-control-btn {
        top: 0.75rem;
        right: 0.75rem;
        width: 45px;
        height: 45px;
    }
    
    .music-icon {
        font-size: 1.3rem;
    }
}

/* Opening Section - Pastel Theme */
.opening-section {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    padding: 2.5rem 2rem;
    margin: 1.5rem auto;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(233, 30, 99, 0.15);
    text-align: center;
    max-width: 900px;
    width: calc(100% - 2rem);
    box-sizing: border-box;
    animation: slideDown 0.8s ease;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.opening-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #E91E63, #9C27B0, #BA68C8);
    border-radius: 25px 25px 0 0;
}

.opening-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    background: linear-gradient(45deg, #D81B60, #E91E63, #9C27B0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    text-shadow: none;
}

.opening-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    color: #880E4F;
    margin-bottom: 1.5rem;
    font-weight: 500;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
}

.date-display {
    display: inline-block;
    background: linear-gradient(45deg, #E91E63, #9C27B0);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 600;
    margin: 1rem 0;
    box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);
    position: relative;
    overflow: hidden;
}

.date-display::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

.opening-image {
    width: clamp(120px, 25vw, 150px);
    height: clamp(120px, 25vw, 150px);
    border-radius: 50%;
    margin: 1.5rem auto;
    border: 4px solid white;
    box-shadow: 0 8px 20px rgba(233, 30, 99, 0.3);
    overflow: hidden;
    position: relative;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
}

.opening-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.opening-message {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    color: #880E4F;
    margin: 1.5rem 0 0;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
}

.decorative-heart {
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.15;
    z-index: 0;
    pointer-events: none;
}

.decorative-heart::before,
.decorative-heart::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background: #E91E63;
    border-radius: 50%;
}

.decorative-heart::before {
    top: 0;
    left: 15px;
}

.decorative-heart::after {
    top: 15px;
    left: 0;
}

.decorative-heart:nth-child(1) { top: 15px; left: 15px; transform: rotate(30deg); }
.decorative-heart:nth-child(2) { top: 50px; right: 30px; transform: rotate(-15deg); }
.decorative-heart:nth-child(3) { bottom: 30px; left: 40px; transform: rotate(45deg); }
.decorative-heart:nth-child(4) { bottom: 50px; right: 60px; transform: rotate(-30deg); }


.container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    background: linear-gradient(135deg, rgba(255, 228, 225, 0.95) 0%, rgba(255, 182, 193, 0.95) 25%, rgba(230, 230, 250, 0.95) 50%, rgba(221, 160, 221, 0.95) 75%, rgba(240, 230, 255, 0.95) 100%),
                url('" width="60" height="60"><defs><pattern id="a" patternUnits="userSpaceOnUse" width="60" height="60"><circle cx="10" cy="10" r="2" fill="%23E91E63" opacity="0.1"/><circle cx="40" cy="25" r="1.5" fill="%239C27B0" opacity="0.1"/><circle cx="25" cy="45" r="2" fill="%23BA68C8" opacity="0.1"/><circle cx="50" cy="50" r="1" fill="%23DDA0DD" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23a)"/></svg>');
    background-size: cover, 60px 60px;
    background-position: center, 0 0;
    background-attachment: fixed, fixed;
}

.stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.8), transparent),
        radial-gradient(2px 2px at 60% 70%, rgba(255,255,255,0.8), transparent),
        radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.8), transparent),
        radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.8), transparent),
        radial-gradient(2px 2px at 90% 40%, rgba(255,255,255,0.8), transparent),
        radial-gradient(circle, rgba(233, 30, 99, 0.1) 1px, transparent 1px),
        radial-gradient(circle, rgba(156, 39, 176, 0.08) 2px, transparent 2px),
        radial-gradient(circle, rgba(186, 104, 200, 0.08) 1.5px, transparent 1.5px);
    background-size: 200% 200%, 80px 80px, 120px 120px, 150px 150px;
    animation: twinkle 3s ease-in-out infinite, float 8s ease-in-out infinite;
    opacity: 0.6;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

.balloons {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.balloon {
    position: absolute;
    font-size: clamp(2rem, 5vw, 3rem);
    animation: float 6s ease-in-out infinite;
}

.balloon1 { top: 10%; left: 10%; animation-delay: 0s; }
.balloon2 { top: 20%; right: 15%; animation-delay: 1s; }
.balloon3 { top: 30%; left: 20%; animation-delay: 2s; }
.balloon4 { top: 15%; right: 25%; animation-delay: 1.5s; }
.balloon5 { top: 25%; left: 50%; animation-delay: 0.5s; }

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
}

@keyframes backgroundShift {
    0% {
        background-position: 0 0, 0 0, 0 0;
    }
    100% {
        background-position: 100px 0, 200px 0, 300px 0;
    }
}

.hero-content {
    text-align: center;
    z-index: 10;
    position: relative;
    width: 100%;
    max-width: 900px;
    padding: 1rem;
}

.birthday-title {
    font-size: clamp(50rem, 80vw, 900rem);
    font-weight: 800;
    color: #D81B60;
    text-shadow: 2px 2px 4px rgba(255,255,255,0.8);
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.2rem;
}

.letter {
    display: inline-block;
    animation: bounceIn 0.6s ease forwards;
    opacity: 0;
}

.letter:nth-child(1) { animation-delay: 0.1s; }
.letter:nth-child(2) { animation-delay: 0.2s; }
.letter:nth-child(3) { animation-delay: 0.3s; }
.letter:nth-child(4) { animation-delay: 0.4s; }
.letter:nth-child(5) { animation-delay: 0.5s; }
.letter:nth-child(6) { animation-delay: 0.6s; }
.letter:nth-child(7) { animation-delay: 0.7s; }
.letter:nth-child(8) { animation-delay: 0.8s; }
.letter:nth-child(9) { animation-delay: 0.9s; }
.letter:nth-child(10) { animation-delay: 1.0s; }
.letter:nth-child(11) { animation-delay: 1.1s; }
.letter:nth-child(12) { animation-delay: 1.2s; }
.letter:nth-child(13) { animation-delay: 1.3s; }

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3) translateY(-50px);
    }
    50% {
        transform: scale(1.05) translateY(0);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.space {
    width: 0.5rem;
}

.name-title {
    font-size: clamp(2.5rem, 9vw, 6rem);
    font-weight: 700;
    background: linear-gradient(45deg, #D81B60, #E91E63, #9C27B0, #BA68C8);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: nameGradient 3s ease infinite, namePulse 2s ease-in-out infinite;
    margin-bottom: 1rem;
}

@keyframes nameGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes namePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.subtitle {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: #880E4F;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
    font-weight: 500;
}

.cta-button {
    padding: 0.9rem 2rem;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 600;
    background: linear-gradient(45deg, #E91E63, #9C27B0);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    min-height: 44px;
}

.cta-button:hover {
    transform: translateY(-2px) scale(1.03);
    border-color: rgba(255, 255, 255, 0.5);
}

.cta-button:active {
    transform: translateY(-1px) scale(1.02);
}

.floating-hearts {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}

.floating-hearts span {
    position: absolute;
    font-size: clamp(1.5rem, 3vw, 2rem);
    animation: floatHeart 8s ease-in-out infinite;
    opacity: 0.6;
}

.floating-hearts span:nth-child(1) { left: 20%; animation-delay: 0s; }
.floating-hearts span:nth-child(2) { left: 40%; animation-delay: 2s; }
.floating-hearts span:nth-child(3) { left: 60%; animation-delay: 4s; }
.floating-hearts span:nth-child(4) { left: 80%; animation-delay: 1s; }
.floating-hearts span:nth-child(5) { left: 50%; animation-delay: 3s; }

@keyframes floatHeart {
    0% {
        bottom: -50px;
        opacity: 0;
        transform: translateX(0);
    }
    10% {
        opacity: 0.6;
    }
    90% {
        opacity: 0.6;
    }
    100% {
        bottom: 100%;
        opacity: 0;
        transform: translateX(50px);
    }
}

/* Section Styles */
section {
    padding: 3rem 1rem;
    position: relative;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    margin: 0;
    display: block;
}

.section-content {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.5rem;
    overflow-x: hidden;
    overflow-y: visible;
}

.section-title {
    font-size: clamp(1.8rem, 5vw, 3rem);
    text-align: center;
    color: #880E4F;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
    font-weight: 700;
    word-break: break-word;
}

/* Message Section */
.message-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    margin: 1rem auto 4rem auto;
    padding: 2rem 2rem 6rem 2rem;
    width: calc(100% - 2rem);
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
    overflow: visible;
    position: relative;
    min-height: auto;
}

.message-card {
    background: white;
    border-radius: 20px;
    padding: 2.5rem 2rem 8rem 2rem;
    border: 2px solid rgba(233, 30, 99, 0.1);
    animation: slideUp 1s ease;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: visible;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 1;
    min-height: auto;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.message-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    overflow: visible;
    min-height: auto;
}

.message-text {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.9;
    color: #4A148C;
    margin-bottom: 1.5rem;
    text-align: left;
    white-space: pre-line;
}

.message-text:first-of-type {
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: clamp(1.1rem, 2.8vw, 1.3rem);
}

.highlight-text {
    color: #D81B60 !important;
    background: rgba(233, 30, 99, 0.08);
    padding: 0.75rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: clamp(1.1rem, 2.8vw, 1.3rem);
    line-height: 1.8;
    border-left: 4px solid #E91E63;
    margin: 1rem 0;
    display: block;
}

.message-signature {
    text-align: right;
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    color: #D81B60;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    font-weight: 600;
    font-style: italic;
    position: relative;
    z-index: 10;
    display: block;
    visibility: visible;
    opacity: 1;
}

.signature-name {
    display: block;
    margin-top: 0.75rem;
    font-weight: 700;
}

/* Bond Section */
.bond-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    margin: 1rem auto;
    padding: 2rem;
    width: calc(100% - 2rem);
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
}

.bond-timeline {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

.bond-timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #E91E63, #9C27B0, #BA68C8, #CE93D8);
    transform: translateX(-50%);
    border-radius: 2px;
}

.timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;
    position: relative;
    animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
}

.timeline-item:nth-child(even) {
    flex-direction: row-reverse;
    animation: slideInRight 0.8s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.3s; }
.timeline-item:nth-child(3) { animation-delay: 0.5s; }
.timeline-item:nth-child(4) { animation-delay: 0.7s; }

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.timeline-icon {
    font-size: clamp(2rem, 4vw, 3rem);
    width: clamp(60px, 10vw, 80px);
    height: clamp(60px, 10vw, 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    border: 2px solid rgba(233, 30, 99, 0.2);
    position: relative;
    z-index: 2;
    animation: rotate 3s ease-in-out infinite;
}

.timeline-content {
    flex: 1;
    background: white;
    padding: 1.5rem;
    border-radius: 20px;
    border: 2px solid rgba(233, 30, 99, 0.1);
    margin: 0 1.5rem;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}

.timeline-content:hover {
    transform: translateY(-3px);
    border-color: rgba(233, 30, 99, 0.3);
}

.timeline-content h3 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    color: #D81B60;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.timeline-content p {
    color: #4A148C;
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.6;
}

/* Reasons Section */
.reasons-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    margin: 1rem auto;
    padding: 2rem;
    width: calc(100% - 2rem);
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
}

.reasons-container {
    text-align: center;
}

.reason-reveal-btn {
    padding: 1rem 2.5rem;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 600;
    background: linear-gradient(45deg, #9C27B0, #BA68C8);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 2rem;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    min-height: 44px;
}

.reason-reveal-btn:hover {
    transform: translateY(-2px) scale(1.03);
    border-color: rgba(255, 255, 255, 0.5);
}

.reason-reveal-btn:active {
    transform: scale(0.95);
}

.reasons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.reason-card {
    background: white;
    border-radius: 20px;
    padding: 1.5rem;
    border: 2px solid rgba(233, 30, 99, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}

.reason-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #E91E63, #9C27B0, #BA68C8);
}

.reason-card.hidden {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    display: none !important;
    height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    pointer-events: none;
    position: absolute;
    visibility: hidden;
}

.reason-card.revealed {
    animation: revealCard 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    display: block !important;
    height: auto !important;
    padding: 1.5rem !important;
    margin: auto !important;
    pointer-events: auto;
}

@keyframes revealCard {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.reason-card:hover {
    transform: translateY(-3px);
    border-color: rgba(233, 30, 99, 0.3);
}

.reason-number {
    width: clamp(40px, 8vw, 50px);
    height: clamp(40px, 8vw, 50px);
    background: linear-gradient(45deg, #E91E63, #9C27B0);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 700;
    margin: 0 auto 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.reason-card h3 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    color: #D81B60;
    margin-bottom: 1rem;
    font-weight: 600;
    text-align: center;
}

.reason-card p {
    color: #4A148C;
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.6;
    text-align: center;
}

/* Memories Section */
.memories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.memory-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 1.5rem;
    text-align: center;
    border: 2px solid rgba(233, 30, 99, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}

.memory-card:nth-child(1) { animation-delay: 0.1s; }
.memory-card:nth-child(2) { animation-delay: 0.2s; }
.memory-card:nth-child(3) { animation-delay: 0.3s; }
.memory-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.memory-card:hover {
    transform: translateY(-3px);
    border-color: rgba(233, 30, 99, 0.3);
}

.memory-icon {
    font-size: clamp(3rem, 6vw, 4rem);
    margin-bottom: 1rem;
    animation: rotate 3s ease-in-out infinite;
}

@keyframes rotate {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    75% { transform: rotate(-10deg); }
}

.memory-card h3 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    color: #D81B60;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.memory-card p {
    color: #4A148C;
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.6;
}

/* Cake Section */
.cake-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    margin: 1rem auto;
    padding: 2rem;
    width: calc(100% - 2rem);
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
}

.cake-container {
    text-align: center;
    padding: 1rem;
    position: relative;
}

.sparkles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1;
}

.sparkle {
    position: absolute;
    font-size: clamp(1.5rem, 3vw, 2rem);
    animation: sparkleFloat 3s ease-in-out infinite;
    opacity: 0.8;
}

.sparkle1 { top: 10%; left: 10%; animation-delay: 0s; }
.sparkle2 { top: 20%; right: 15%; animation-delay: 0.5s; }
.sparkle3 { top: 30%; left: 20%; animation-delay: 1s; }
.sparkle4 { top: 15%; right: 25%; animation-delay: 1.5s; }
.sparkle5 { top: 25%; left: 50%; animation-delay: 0.3s; }
.sparkle6 { bottom: 20%; right: 20%; animation-delay: 0.8s; }

@keyframes sparkleFloat {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.8;
    }
    50% {
        transform: translateY(-20px) scale(1.2);
        opacity: 1;
    }
}

.cake-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    z-index: 2;
}

.cake {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    filter: drop-shadow(0 10px 30px rgba(233, 30, 99, 0.3));
}

.candle {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 55px;
    background: linear-gradient(to bottom, #FFD700, #FFED4E, #FFD700);
    border-radius: 5px;
    z-index: 10;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.flame {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 22px;
    background: linear-gradient(to top, #FF6B00, #FFD700, #FFF);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    animation: flicker 0.4s ease-in-out infinite alternate;
    box-shadow: 0 0 15px #FF6B00, 0 0 25px rgba(255, 107, 0, 0.5);
}

.smoke {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 15px;
    background: rgba(200, 200, 200, 0.6);
    border-radius: 50%;
    opacity: 0;
    animation: smokeRise 2s ease-in-out infinite;
}

@keyframes smokeRise {
    0% {
        opacity: 0;
        transform: translateX(-50%) translateY(0) scale(1);
    }
    50% {
        opacity: 0.6;
        transform: translateX(-50%) translateY(-10px) scale(1.2);
    }
    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px) scale(1.5);
    }
}

.candle.blown .smoke {
    animation: smokeBlow 1s ease-out forwards;
}

@keyframes smokeBlow {
    0% {
        opacity: 0.8;
        transform: translateX(-50%) translateY(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(-30px) scale(2);
    }
}

@keyframes flicker {
    0% {
        transform: translateX(-50%) scale(1) rotate(-2deg);
    }
    100% {
        transform: translateX(-50%) scale(1.1) rotate(2deg);
    }
}

.candle.blown .flame {
    animation: blowOut 0.5s ease forwards;
}

@keyframes blowOut {
    0% {
        opacity: 1;
        transform: translateX(-50%) scale(1);
    }
    100% {
        opacity: 0;
        transform: translateX(-50%) scale(0);
    }
}

.frosting {
    width: clamp(150px, 30vw, 200px);
    height: 35px;
    background: linear-gradient(to bottom, #FFB6C1, #FFC0CB, #FFB6C1);
    border-radius: 100px 100px 0 0;
    position: relative;
    z-index: 3;
    box-shadow: 0 5px 15px rgba(255, 182, 193, 0.4);
}

.frosting::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 0;
    width: 100%;
    height: 25px;
    background: linear-gradient(to bottom, #FFB6C1, #FFC0CB);
    border-radius: 50%;
    box-shadow: 0 3px 10px rgba(255, 182, 193, 0.3);
}

.cherry {
    position: absolute;
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    animation: cherryBounce 2s ease-in-out infinite;
    z-index: 4;
}

.cherry1 {
    top: -5px;
    left: 15%;
    animation-delay: 0s;
}

.cherry2 {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0.3s;
}

.cherry3 {
    top: -5px;
    right: 15%;
    animation-delay: 0.6s;
}

@keyframes cherryBounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

.cake-body {
    position: relative;
    top: -5px;
}

.cake-layer {
    width: clamp(150px, 30vw, 200px);
    height: 55px;
    border-radius: 0 0 25px 25px;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 5px 15px rgba(233, 30, 99, 0.2);
}

.layer1 {
    background: linear-gradient(to bottom, #FF69B4, #FFB6C1, #FF69B4);
    width: clamp(170px, 33vw, 220px);
}

.layer2 {
    background: linear-gradient(to bottom, #FFB6C1, #FFC0CB, #FFB6C1);
    width: clamp(190px, 36vw, 240px);
}

.layer3 {
    background: linear-gradient(to bottom, #FFC0CB, #FFE4E1, #FFC0CB);
    width: clamp(210px, 39vw, 260px);
}

.decoration {
    position: absolute;
    font-size: clamp(1rem, 2vw, 1.3rem);
    animation: decorationTwinkle 2s ease-in-out infinite;
    z-index: 5;
}

.decoration1 {
    top: 15px;
    left: 20%;
    animation-delay: 0s;
}

.decoration2 {
    top: 15px;
    right: 20%;
    animation-delay: 0.5s;
}

.decoration3 {
    top: 15px;
    left: 25%;
    animation-delay: 1s;
}

.decoration4 {
    top: 15px;
    right: 25%;
    animation-delay: 1.5s;
}

.decoration5 {
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0.3s;
}

@keyframes decorationTwinkle {
    0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 0.8;
    }
    50% {
        transform: scale(1.2) rotate(10deg);
        opacity: 1;
    }
}

.wish-instructions {
    margin: 1.5rem 0;
}

.instruction-text {
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
    color: #880E4F;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
    margin-bottom: 1rem;
}

.blow-button {
    padding: 1rem 2.5rem;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 600;
    background: linear-gradient(45deg, #E91E63, #9C27B0);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    min-height: 44px;
}

.blow-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.blow-button:hover::before {
    width: 300px;
    height: 300px;
}

.blow-button:hover {
    transform: translateY(-2px) scale(1.03);
    border-color: rgba(255, 255, 255, 0.5);
}

.blow-button:active {
    transform: translateY(-1px) scale(1.02);
}

.wish-message {
    font-size: clamp(1.1rem, 3vw, 1.4rem);
    margin-top: 1.5rem;
    font-weight: 600;
    color: #880E4F;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.9);
    min-height: 2.5rem;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    border: 2px solid rgba(233, 30, 99, 0.15);
    letter-spacing: 0.3px;
    line-height: 1.5;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: 'Poppins', sans-serif;
    opacity: 0;
    visibility: hidden;
    height: 0;
    margin-top: 0;
    padding: 0;
    overflow: hidden;
}

.wish-message.show {
    opacity: 1;
    visibility: visible;
    height: auto;
    margin-top: 1.5rem;
    padding: 0.75rem 1rem;
    animation: fadeInUp 0.8s ease;
}

/* Enhanced Gallery Section - Vertical Layout */
.photo-gallery {
    padding: 2rem 1rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 240, 243, 0.95));
    border-radius: 25px;
    border: 2px solid rgba(233, 30, 99, 0.15);
    margin: 1.5rem auto;
    width: calc(100% - 2rem);
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
}

.gallery-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
    padding: 0.5rem;
    width: 100%;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    border: 2px solid rgba(233, 30, 99, 0.15);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    transform: translateY(0);
    width: 100%;
    max-width: 100%;
    animation: galleryFadeIn 0.6s ease forwards;
    opacity: 0;
    background: white;
}

.gallery-item:nth-child(1) { animation-delay: 0.1s; }
.gallery-item:nth-child(2) { animation-delay: 0.2s; }
.gallery-item:nth-child(3) { animation-delay: 0.3s; }
.gallery-item:nth-child(4) { animation-delay: 0.4s; }
.gallery-item:nth-child(5) { animation-delay: 0.5s; }
.gallery-item:nth-child(6) { animation-delay: 0.6s; }

@keyframes galleryFadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover img {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(136, 14, 79, 0.95), transparent);
    color: white;
    padding: 1.5rem 1rem;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    opacity: 0;
    pointer-events: none;
}

.overlay-caption {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    font-weight: 600;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.gallery-item.active .overlay {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
}

.gallery-item:active {
    transform: scale(0.98);
}

/* Final Section */
.final-section {
    padding: 3rem 1rem;
    text-align: center;
}

.final-message {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    padding: 3rem 2rem;
    margin: 1rem auto;
    width: calc(100% - 2rem);
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
}

.big-birthday {
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 800;
    color: #D81B60;
    text-shadow: 2px 2px 4px rgba(255,255,255,0.8);
    margin-bottom: 2rem;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.final-text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: #880E4F;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
}

.celebration-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.celebration-icons span {
    font-size: clamp(2rem, 5vw, 3rem);
    animation: bounce 1s ease-in-out infinite;
}

.celebration-icons span:nth-child(1) { animation-delay: 0s; }
.celebration-icons span:nth-child(2) { animation-delay: 0.2s; }
.celebration-icons span:nth-child(3) { animation-delay: 0.4s; }
.celebration-icons span:nth-child(4) { animation-delay: 0.6s; }
.celebration-icons span:nth-child(5) { animation-delay: 0.8s; }

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Responsive Design - Mobile First */
@media (max-width: 768px) {
    * {
        max-width: 100%;
    }
    
    html, body {
        width: 100%;
        overflow-x: hidden;
        position: relative;
    }
    
    body {
        font-size: 16px;
    }
    
    .hero {
        padding: 0.5rem;
        min-height: 85vh;
        width: 100%;
        max-width: 100%;
    }
    
    .hero-content {
        padding: 0.5rem;
        width: 100%;
        max-width: 100%;
    }
    
    section {
        padding: 1rem 0.5rem;
        width: 100%;
        max-width: 100%;
        margin: 0;
    }
    
    .section-content {
        padding: 0 0.5rem;
        width: 100%;
        max-width: 100%;
    }
    
    /* Opening Section Mobile */
    .opening-section {
        padding: 1.5rem 1rem;
        margin: 1rem auto;
        width: calc(100% - 1rem);
        max-width: calc(100% - 1rem);
    }
    
    .opening-title {
        font-size: clamp(1.75rem, 6vw, 2.5rem);
        margin-bottom: 0.75rem;
    }
    
    .opening-subtitle {
        font-size: clamp(0.95rem, 3vw, 1.1rem);
        margin-bottom: 1rem;
    }
    
    .date-display {
        font-size: clamp(0.9rem, 3vw, 1rem);
        padding: 0.6rem 1.5rem;
        margin: 0.75rem 0;
    }
    
    .opening-image {
        width: clamp(100px, 30vw, 130px);
        height: clamp(100px, 30vw, 130px);
        margin: 1rem auto;
        border-width: 3px;
    }
    
    .opening-message {
        font-size: clamp(1rem, 3vw, 1.2rem);
        margin: 1rem 0 0;
        padding: 0 0.5rem;
    }
    
    .decorative-heart {
        width: 20px;
        height: 20px;
    }
    
    .decorative-heart::before,
    .decorative-heart::after {
        width: 20px;
        height: 20px;
    }
    
    .message-section,
    .bond-section,
    .reasons-section,
    .cake-section,
    .gallery-section,
    .final-section {
        margin: 0.75rem 0;
        padding: 1.25rem;
        width: calc(100% - 0rem);
        max-width: calc(100% - 0rem);
        box-sizing: border-box;
    }
    
    /* Gallery Mobile */
    .photo-gallery {
        padding: 1.5rem 0.75rem;
        margin: 1rem auto;
    }
    
    .gallery-container {
        gap: 1.25rem;
        padding: 0.25rem;
    }
    
    .gallery-item {
        width: 100%;
    }
    
    .overlay {
        padding: 1.25rem 0.75rem;
    }
    
    .overlay-caption {
        font-size: clamp(0.95rem, 3vw, 1.1rem);
    }
    
    .gallery-overlay {
        padding: 1rem;
    }
    
    .gallery-icon {
        font-size: 1.8rem;
    }
    
    .gallery-caption {
        font-size: 0.95rem;
    }
    
    .gallery-note {
        font-size: 0.85rem;
        padding: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .message-card {
        padding: 1.25rem;
        border-radius: 15px;
    }
    
    .message-text {
        font-size: 0.95rem;
        text-align: left;
        line-height: 1.7;
        margin-bottom: 0.75rem;
    }
    
    .highlight-text {
        font-size: 1rem;
    }
    
    .message-signature {
        font-size: 1rem;
        margin-top: 1rem;
    }
    
    .memories-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
        margin-top: 1rem;
    }
    
    .memory-card {
        padding: 1.25rem;
    }
    
    .memory-icon {
        font-size: 2.5rem;
        margin-bottom: 0.75rem;
    }
    
    .memory-card h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
    
    .memory-card p {
        font-size: 0.9rem;
    }
    
    /* Timeline Mobile */
    .bond-timeline {
        padding: 0;
    }
    
    .bond-timeline::before {
        left: 25px;
        width: 3px;
    }
    
    .timeline-item {
        flex-direction: row !important;
        padding-left: 60px;
        margin-bottom: 1rem;
    }
    
    .timeline-icon {
        position: absolute;
        left: 0;
        width: 45px;
        height: 45px;
        font-size: 1.3rem;
        box-shadow: 0 4px 12px rgba(233, 30, 99, 0.25);
    }
    
    .timeline-content {
        margin: 0;
        padding: 1rem;
        border-radius: 15px;
    }
    
    .timeline-content h3 {
        font-size: 1rem;
        margin-bottom: 0.4rem;
    }
    
    .timeline-content p {
        font-size: 0.85rem;
        line-height: 1.5;
    }
    
    /* Reasons Mobile */
    .reasons-container {
        padding: 0;
    }
    
    .reasons-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
        margin-top: 1rem;
    }
    
    .reason-card {
        padding: 1.25rem;
        border-radius: 15px;
    }
    
    .reason-number {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
        margin-bottom: 0.75rem;
    }
    
    .reason-card h3 {
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }
    
    .reason-card p {
        font-size: 0.85rem;
        line-height: 1.5;
    }
    
    /* Buttons Mobile */
    .cta-button,
    .reason-reveal-btn,
    .blow-button {
        font-size: 0.95rem;
        padding: 0.9rem 1.75rem;
        width: 100%;
        max-width: 100%;
        min-height: 48px;
        touch-action: manipulation;
    }
    
    .cta-button {
        margin-top: 1rem;
    }
    
    /* Cake Section Mobile */
    .cake-container {
        padding: 0.5rem;
    }
    
    .cake-wrapper {
        transform: scale(0.75);
        margin-bottom: 1rem;
    }
    
    .sparkles {
        display: none;
    }
    
    .sparkle {
        font-size: 1rem;
    }
    
    .cherry {
        font-size: 0.9rem;
    }
    
    .decoration {
        font-size: 0.8rem;
    }
    
    .wish-instructions {
        margin: 0.75rem 0;
    }
    
    .instruction-text {
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
    }
    
    .wish-message {
        font-size: clamp(1rem, 3vw, 1.2rem);
        margin-top: 1rem;
        min-height: 2rem;
        padding: 0.6rem 0.75rem;
        line-height: 1.4;
    }
    
    /* Final Section Mobile */
    .final-message {
        padding: 1.5rem 1rem;
        margin: 0.75rem 0;
    }
    
    .big-birthday {
        font-size: 1.8rem;
        margin-bottom: 1.25rem;
        line-height: 1.3;
    }
    
    .final-text {
        font-size: 1rem;
        margin-bottom: 1.25rem;
        line-height: 1.6;
    }
    
    .celebration-icons {
        gap: 0.75rem;
    }
    
    .celebration-icons span {
        font-size: 2rem;
    }
    
    /* Section Titles Mobile */
    .section-title {
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
    
    /* Balloons Mobile */
    .balloon {
        font-size: 1.8rem;
    }
    
    .floating-hearts span {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    * {
        max-width: 100%;
    }
    
    html, body {
        width: 100%;
        overflow-x: hidden;
        position: relative;
    }
    
    /* Opening Section Small Mobile */
    .opening-section {
        padding: 1.25rem 0.85rem;
        margin: 0.85rem auto;
    }
    
    .opening-title {
        font-size: clamp(1.5rem, 7vw, 2rem);
    }
    
    .opening-subtitle {
        font-size: clamp(0.9rem, 3.5vw, 1rem);
    }
    
    .date-display {
        font-size: clamp(0.85rem, 3.5vw, 0.95rem);
        padding: 0.55rem 1.35rem;
    }
    
    .opening-image {
        width: clamp(90px, 28vw, 115px);
        height: clamp(90px, 28vw, 115px);
    }
    
    .opening-message {
        font-size: clamp(0.95rem, 3.5vw, 1.1rem);
    }
    
    .hero {
        min-height: 80vh;
        padding: 0.75rem;
        margin: 0;
        width: 100%;
    }
    
    .birthday-title {
        font-size: 1.3rem;
        gap: 0.05rem;
        word-break: break-word;
        margin-bottom: 0.75rem;
    }
    
    .name-title {
        font-size: 1.8rem;
        margin-bottom: 0.75rem;
        word-break: break-word;
    }
    
    .subtitle {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        padding: 0 0.5rem;
    }
    
    .section-title {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        word-break: break-word;
        padding: 0 0.5rem;
    }
    
    section {
        padding: 1.5rem 0.5rem;
        width: 100%;
        margin: 0 auto;
    }
    
    .section-content {
        padding: 0 0.25rem;
        width: 100%;
        margin: 0 auto;
    }
    
    .message-section,
    .bond-section,
    .reasons-section,
    .cake-section,
    .gallery-section {
        margin: 0.75rem auto;
        padding: 1.25rem;
        width: calc(100% - 2.5rem);
        max-width: calc(100% - 2.5rem);
        box-sizing: border-box;
        border-radius: 15px;
    }
    
    .message-card {
        padding: 1rem;
        border-radius: 15px;
    }
    
    .message-text {
        font-size: 0.9rem;
        text-align: left;
        line-height: 1.6;
        margin-bottom: 0.8rem;
    }
    
    .highlight-text {
        font-size: 1rem;
    }
    
    .message-signature {
        font-size: 1rem;
        margin-top: 1rem;
    }
    
    /* Timeline Mobile */
    .bond-timeline::before {
        left: 20px;
        width: 2px;
    }
    
    .timeline-item {
        flex-direction: row !important;
        padding-left: 50px;
        margin-bottom: 1rem;
    }
    
    .timeline-icon {
        position: absolute;
        left: 0;
        width: 38px;
        height: 38px;
        font-size: 1.2rem;
        box-shadow: 0 3px 10px rgba(233, 30, 99, 0.2);
    }
    
    .timeline-content {
        margin: 0;
        padding: 0.9rem;
        border-radius: 12px;
    }
    
    .timeline-content h3 {
        font-size: 1rem;
        margin-bottom: 0.4rem;
    }
    
    .timeline-content p {
        font-size: 0.8rem;
        line-height: 1.4;
    }
    
    /* Reasons Grid Mobile */
    .reasons-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.75rem;
        margin-top: 1rem;
    }
    
    .reason-card {
        padding: 1rem;
        border-radius: 12px;
    }
    
    .reason-card.hidden {
        display: none !important;
        height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    
    .reason-number {
        width: 36px;
        height: 36px;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    
    .reason-card h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    
    .reason-card p {
        font-size: 0.8rem;
        line-height: 1.4;
    }
    
    /* Memories Grid Mobile */
    .memories-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
        margin-top: 1rem;
    }
    
    .memory-card {
        padding: 1rem;
    }
    
    .memory-icon {
        font-size: 2.2rem;
        margin-bottom: 0.5rem;
    }
    
    .memory-card h3 {
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }
    
    .memory-card p {
        font-size: 0.8rem;
    }
    
    /* Cake Mobile */
    .cake-container {
        padding: 0.5rem;
    }
    
    .cake-wrapper {
        transform: scale(0.7);
        margin-bottom: 1rem;
    }
    
    .sparkles {
        display: none;
    }
    
    .wish-instructions {
        margin: 0.75rem 0;
    }
    
    .instruction-text {
        font-size: 0.85rem;
        margin-bottom: 0.75rem;
    }
    
    .blow-button {
        font-size: 0.95rem;
        padding: 0.85rem 1.5rem;
        width: 100%;
        min-height: 44px;
    }
    
    .wish-message {
        font-size: clamp(0.95rem, 3vw, 1.1rem);
        margin-top: 1rem;
        min-height: 2rem;
        padding: 0.5rem 0.65rem;
        line-height: 1.4;
    }
    
    /* Gallery Small Mobile */
    .photo-gallery {
        padding: 1.25rem 0.5rem;
        margin: 0.75rem auto;
    }
    
    .gallery-container {
        gap: 1rem !important;
        padding: 0.25rem !important;
    }
    
    .gallery-item {
        width: 100% !important;
    }
    
    .overlay {
        padding: 1rem 0.5rem !important;
    }
    
    .overlay-caption {
        font-size: clamp(0.85rem, 3vw, 1rem) !important;
    }
    
    /* Final Section Mobile */
    .final-section {
        padding: 1.5rem 0.5rem;
    }
    
    .final-message {
        padding: 1.5rem 1rem;
        margin: 0.75rem auto;
        width: calc(100% - 2rem);
        max-width: calc(100% - 2rem);
        box-sizing: border-box;
    }
    
    .big-birthday {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        line-height: 1.3;
    }
    
    .final-text {
        font-size: 0.95rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    
    .celebration-icons {
        gap: 0.75rem;
    }
    
    .celebration-icons span {
        font-size: 1.4rem;
    }
    
    .cta-button,
    .reason-reveal-btn {
        font-size: 0.95rem;
        padding: 0.85rem 1.5rem;
        width: 100%;
        min-height: 48px;
        margin-top: 0.75rem;
    }
    
    .balloon {
        font-size: 1.6rem;
    }
    
    .floating-hearts span {
        font-size: 1.4rem;
    }
}

/* Extra Small Devices */
@media (max-width: 360px) {
    html, body {
        width: 100%;
        overflow-x: hidden;
    }
    
    /* Opening Section Extra Small */
    .opening-section {
        padding: 1.25rem 0.75rem;
        margin: 0.75rem auto;
    }
    
    .opening-title {
        font-size: 1.5rem;
    }
    
    .opening-subtitle {
        font-size: 0.9rem;
    }
    
    .date-display {
        font-size: 0.85rem;
        padding: 0.5rem 1.25rem;
    }
    
    .opening-image {
        width: 90px;
        height: 90px;
    }
    
    .opening-message {
        font-size: 0.95rem;
    }
    
    .hero {
        min-height: 75vh;
        padding: 0.5rem;
    }
    
    .birthday-title {
        font-size: 1.2rem;
        gap: 0.05rem;
    }
    
    .name-title {
        font-size: 1.5rem;
    }
    
    .section-title {
        font-size: 1.2rem;
    }
    
    section {
        padding: 1rem 0.5rem;
    }
    
    .message-section,
    .bond-section,
    .reasons-section,
    .cake-section,
    .gallery-section {
        padding: 1rem;
        margin: 0.5rem auto;
        width: calc(100% - 2rem);
        max-width: calc(100% - 2rem);
        box-sizing: border-box;
    }
    
    .cake-wrapper {
        transform: scale(0.65);
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
        gap: 0.6rem;
    }
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}

/* =========================================
   Mom Theme Palette Overrides (teal + gold)
   ========================================= */
:root {
    --primary: #0ea5e9;
    --secondary: #14b8a6;
    --accent: #f4a261;
    --deep: #0f172a;
    --text: #0b3c5d;
    --soft: #e0f7f9;
}

body {
    background: linear-gradient(135deg, #e6fffb 0%, #c7f9f4 25%, #b5e8ff 50%, #d7f5ff 75%, #f2fbff 100%);
}

.opening-section {
    border: 2px solid rgba(20, 184, 166, 0.18);
}

.opening-section::before {
    background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent));
}

.opening-title {
    background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent));
}

.opening-subtitle,
.opening-message,
.section-title,
.instruction-text,
.final-text,
.wish-message {
    color: var(--text);
}

.date-display {
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    box-shadow: 0 5px 15px rgba(20, 184, 166, 0.35);
}

.opening-image {
    box-shadow: 0 8px 20px rgba(14, 165, 233, 0.35);
}

.cta-button,
.reason-reveal-btn,
.blow-button {
    background: linear-gradient(45deg, var(--primary), var(--secondary));
}

.message-card,
.bond-section,
.reasons-section,
.cake-section,
.photo-gallery {
    border: 2px solid rgba(14, 165, 233, 0.12);
}

.message-text,
.timeline-content p,
.reason-card p,
.memory-card p {
    color: var(--deep);
}

.highlight-text {
    color: #D81B60 !important;
    background: rgba(233, 30, 99, 0.08);
    font-weight: 700;
    border-left: 4px solid #E91E63;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    display: block;
}

.timeline-icon,
.reason-number {
    border: 2px solid rgba(14, 165, 233, 0.25);
    background: white;
    color: var(--primary);
}

.timeline-content h3,
.reason-card h3,
.memory-card h3,
.big-birthday {
    color: var(--primary);
}

/* Ensure main hero text stays readable on the new palette */
.opening-title,
.big-birthday {
    background: none;
    color: #0f172a;
    -webkit-text-fill-color: #0f172a;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
}

.opening-subtitle {
    color: #0b3c5d;
}

.timeline-content:hover,
.reason-card:hover,
.memory-card:hover {
    border-color: rgba(20, 184, 166, 0.35);
}

.reason-card::before {
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
}

.blow-button::before {
    background: rgba(255, 255, 255, 0.35);
}

.wish-message {
    border: 2px solid rgba(14, 165, 233, 0.2);
}
