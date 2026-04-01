'use client';

import React, { useEffect } from 'react';
import { useVideoStore } from '@/lib/videoStore';
import styles from '@/styles/VideoList.module.css';

export default function VideoList() {
  const { videos, removeVideo, updateVideo } = useVideoStore();

  useEffect(() => {
    // Poll for video status updates every 3 seconds
    const interval = setInterval(() => {
      videos.forEach((video) => {
        if (video.status === 'processing') {
          // Simulate status check - in real app, call API
          // For demo purposes, we'll complete after 8 seconds
          const elapsedSeconds =
            (new Date().getTime() - video.createdAt.getTime()) / 1000;
          if (elapsedSeconds > 8) {
            updateVideo(video.id, {
              status: 'completed',
              url: `https://via.placeholder.com/400x300?text=Demo+Video+${video.id.substr(6)}`,
            });
          }
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [videos, updateVideo]);

  if (videos.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>📹 No videos yet. Create one above!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Videos</h2>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.card}>
            <div className={styles.preview}>
              {video.status === 'completed' && video.url ? (
                <video className={styles.video} controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className={styles.placeholderPreview}>
                  {video.status === 'processing' ? (
                    <>
                      <div className={styles.spinner}></div>
                      <p>Processing...</p>
                    </>
                  ) : video.status === 'failed' ? (
                    <>
                      <span className={styles.icon}>❌</span>
                      <p>Failed to generate</p>
                    </>
                  ) : (
                    <>
                      <span className={styles.icon}>⏳</span>
                      <p>Pending</p>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className={styles.content}>
              <p className={styles.prompt}>{video.prompt}</p>
              <div className={styles.meta}>
                <span className={styles.status}>
                  {video.status === 'completed' && '✅'}
                  {video.status === 'processing' && '⏳'}
                  {video.status === 'failed' && '❌'}
                  {video.status === 'pending' && '⏳'}
                  {' ' + video.status.charAt(0).toUpperCase() + video.status.slice(1)}
                </span>
                {video.duration && (
                  <span className={styles.duration}>
                    ⏱️ {video.duration}s
                  </span>
                )}
              </div>

              {video.status === 'completed' && video.url && (
                <div className={styles.actions}>
                  <a href={video.url} download className={styles.downloadBtn}>
                    ⬇️ Download
                  </a>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeVideo(video.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              )}

              {video.status === 'failed' && (
                <div className={styles.errorMessage}>
                  {video.error || 'Generation failed. Please try again.'}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
