import type { NextApiRequest, NextApiResponse } from 'next';

interface VideoStatus {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress?: number;
  url?: string;
  error?: string;
}

// In-memory storage for demo (replace with database in production)
const videos: Map<string, VideoStatus> = new Map();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<VideoStatus | { message: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { videoId } = req.query;

    if (typeof videoId !== 'string') {
      return res.status(400).json({ message: 'Invalid video ID' });
    }

    // Check if video exists in memory or database
    let video = videos.get(videoId);

    if (!video) {
      // Return a mock video status for demo
      video = {
        id: videoId,
        status: 'processing',
        progress: 45,
      };
    }

    res.status(200).json(video);
  } catch (error) {
    console.error('Error fetching video status:', error);
    res.status(500).json({ message: 'Failed to fetch video status' });
  }
}
