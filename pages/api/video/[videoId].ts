import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { videoId } = req.query;

    if (typeof videoId !== 'string') {
      return res.status(400).json({ message: 'Invalid video ID' });
    }

    // TODO: Delete video from database and storage
    console.log('Deleting video:', videoId);

    res.status(200).json({ message: 'Video deleted successfully' });
  } catch (error) {
    console.error('Error deleting video:', error);
    res.status(500).json({ message: 'Failed to delete video' });
  }
}
