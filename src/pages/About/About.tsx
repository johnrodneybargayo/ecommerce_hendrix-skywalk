// src/pages/About/About.tsx
import React from 'react';
import Header from '../../components/common/Header/Header';
import VideoCarousel from '../../components/common/VideoCarousel/VideoCarousel';
import Footer from '../../components/common/Footer/Footer';
import '../../styles/about.scss';

const About: React.FC = () => {
  const videos = [
    'https://www.youtube.com/embed/video1',
    'https://www.youtube.com/embed/video2',
    'https://www.youtube.com/embed/video3',
    'https://www.youtube.com/embed/video4',
    'https://www.youtube.com/embed/video5',
    'https://www.youtube.com/embed/video6',
    'https://www.youtube.com/embed/video7',
    'https://www.youtube.com/embed/video8',
    'https://www.youtube.com/embed/video9',
    'https://www.youtube.com/embed/video10',
    // Add more video URLs as needed
  ];

  return (
    <div>
      <Header />

      {/* Pictures and details */}
      <section className="about-section">
        <div className="frame-container">
          <div className="image-container">
            <img src="https://placekitten.com/200/200?image=" alt="image_placeholder" className="frame-1" />
          </div>
          <div className="text-content">
            <h2>Section 1 Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, elit sed finibus
              rhoncus, sem sem ultrices mauris.
            </p>
          </div>
        </div>

        <div className="frame-container">
          <div className="text-content">
            <h2>Section 2 Title</h2>
            <p>
              Integer ultricies bibendum leo, vel hendrerit est vulputate a. Vestibulum vel tortor vitae
              nisi bibendum ultrices.
            </p>
          </div>
          <div className="image-container">
            <img src="https://placekitten.com/200/200?image=" alt="image_placeholder2" className="frame-2" />
          </div>
        </div>
      </section>

      {/* Videos Showcase */}
      <section className="videolist-section">
        <h2>Video Showcase</h2>
        <VideoCarousel videos={videos} />
      </section>
      <Footer />
    </div>
  );
};

export default About;
