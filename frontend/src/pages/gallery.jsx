import React from 'react';
import Navbar from '../Navbar';
import './gallery.css';

const GalleryPage = () => {
  const batches = [
  
  {
      year: 2024,
      images: [
        'https://i.postimg.cc/J0P568vg/Whats-App-Image-2025-09-16-at-23-07-41-c9c56480.jpg',
        'https://i.postimg.cc/XqVgkqHd/Whats-App-Image-2025-09-16-at-23-07-42-15b68b72.jpg',
        'https://i.postimg.cc/wv5VNLV9/Whats-App-Image-2025-09-16-at-23-07-42-547a2e45.jpg',
        ],
    },
    {
      year: 2023,
      images: [
        'https://i.postimg.cc/9M02yj4L/Whats-App-Image-2025-02-04-at-22-12-57-d557a895.jpg',
        'https://i.postimg.cc/5tn1HttH/Whats-App-Image-2025-09-01-at-17-16-49-8164041e.jpg',
        'https://i.postimg.cc/YSpMqFtK/Whats-App-Image-2025-09-02-at-01-13-42-d79cfb82.jpg',
        'https://i.postimg.cc/CxCwg7Ts/Whats-App-Image-2025-09-02-at-01-13-43-d9e0d618.jpg',
        'https://i.postimg.cc/65v9HwMS/Whats-App-Image-2025-09-05-at-21-37-59-43c08a08.jpg',
        'https://i.postimg.cc/44MfbnQV/Whats-App-Image-2025-09-05-at-21-38-04-d200cedf.jpg',
        'https://i.postimg.cc/XY6nmhhv/Whats-App-Image-2025-09-05-at-21-38-10-0090779f.jpg',
        'https://i.postimg.cc/kGk7nhgf/Whats-App-Image-2025-09-16-at-23-23-18-6f4baac4.jpg',
        'https://i.postimg.cc/3Rx89vqC/Whats-App-Image-2025-09-16-at-23-24-18-68349f84.jpg',
        'https://i.postimg.cc/BvgZxgmn/Whats-App-Image-2025-09-16-at-23-24-32-7a0034b3.jpg',
        'https://i.postimg.cc/Pqhrpcz7/Whats-App-Image-2025-09-16-at-23-24-47-8db02d87.jpg',
        'https://i.postimg.cc/3x2xw7pp/Whats-App-Image-2025-09-17-at-08-53-08-6a155c99.jpg',
        'https://i.postimg.cc/d37qcKwh/Whats-App-Image-2025-09-17-at-12-43-31-ca43a8b4.jpg',
        'https://i.postimg.cc/zB2JQfZm/Whats-App-Image-2025-09-17-at-12-43-32-e4eed653.jpg',
      ],
    },
    {
      year: 2022,
      images: [
        'https://i.postimg.cc/BQ2mLY1Y/20241u.jpg',
        'https://i.postimg.cc/fLkHVMxm/2024-6.jpg',
        'https://i.postimg.cc/cCnXcTkJ/2024-9.jpg',
        'https://i.postimg.cc/DwdpDjvJ/2024-4.jpg',
        'https://i.postimg.cc/XJhsFt8h/2024-5.jpg',
        'https://i.postimg.cc/ZR9cTVSL/113.jpg',
        'https://i.postimg.cc/d0sNK23W/2024-3.jpg',
        'https://i.postimg.cc/1RnCP5RZ/2024-10.jpg',
        'https://i.postimg.cc/G3WMpw9T/2024-11.jpg',
        'https://i.postimg.cc/VNKGsJbz/2024-2.jpg',
      ],
    }
  ];

  return (
    <div className="gallery-container">
      <Navbar />
      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-grid">
        {batches.map((batch, index) => (
          <div key={batch.year} className="batch-container">
            <h2 className="batch-title">Batch {batch.year}</h2>
            <div className="image-train-wrapper">
              <div className={`image-train ${index % 2 === 0 ? "move-ltr" : "move-rtl"}`}>
                {[...batch.images, ...batch.images].map((src, imgIndex) => (
                  <div key={imgIndex} className="image-card">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Batch ${batch.year} - ${(imgIndex % batch.images.length) + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;