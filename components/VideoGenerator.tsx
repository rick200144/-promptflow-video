'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { generateVideo } from '../lib/api';
import { useVideoStore, type Video } from '../lib/videoStore';
import styles from '../styles/VideoGenerator.module.css';

const VIDEO_STYLES = [
  { id: 'cinematic', label: 'Cinematic' },
  { id: 'cartoon', label: 'Cartoon' },
  { id: 'realistic', label: 'Realistic' },
  { id: 'anime', label: 'Anime' },
  { id: 'abstract', label: 'Abstract' },
];

const DURATIONS = [
  { id: '15', label: '15 seconds' },
  { id: '30', label: '30 seconds' },
  { id: '60', label: '1 minute' },
];

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('cinematic');
  const [duration, setDuration] = useState('30');
  const [loading, setLoading] = useState(false);
  const addVideo = useVideoStore((state) => state.addVideo);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error('Please enter a video description');
      return;
    }

    setLoading(true);

    try {
      const videoId = `video_${Date.now()}`;

      // Add pending video to store
      const newVideo: Video = {
        id: videoId,
        prompt,
        status: 'processing',
        createdAt: new Date(),
        duration: parseInt(duration),
      };

      addVideo(newVideo);

      // Call the API
      const response = await generateVideo({
        prompt,
        duration: parseInt(duration),
        style,
      });

      toast.success('Video generation started! Check your video list.');
      setPrompt('');

      console.log('Generation response:', response);
    } catch (error) {
      console.error('Error generating video:', error);
      toast.error('Failed to generate video. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.generator}>
      <div className={styles.container}>
        <h2 className={styles.title}>Create Your AI Video</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="prompt" className={styles.label}>
              Describe your video
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., A serene mountain landscape with clouds floating by, sunset, birds flying..."
              className={styles.textarea}
              disabled={loading}
            />
            <p className={styles.hint}>
              Be descriptive! The more details, the better the result.
            </p>
          </div>

          <div className={styles.gridOptions}>
            <div className={styles.formGroup}>
              <label htmlFor="style" className={styles.label}>
                Video Style
              </label>
              <select
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className={styles.select}
                disabled={loading}
              >
                {VIDEO_STYLES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="duration" className={styles.label}>
                Duration
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className={styles.select}
                disabled={loading}
              >
                {DURATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className={`${styles.button} ${loading ? styles.loading : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Generating...
              </>
            ) : (
              '✨ Generate Video'
            )}
          </button>
        </form>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>⚡</span>
            <p>
              <strong>Fast:</strong> Generate videos in seconds
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>💰</span>
            <p>
              <strong>Free:</strong> No watermarks, no hidden fees
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>🎨</span>
            <p>
              <strong>Creative:</strong> Multiple styles to choose from
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
