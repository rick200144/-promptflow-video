import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface GenerateVideoRequest {
  prompt: string;
  duration?: number;
  style?: string;
}

export interface GenerateVideoResponse {
  id: string;
  status: string;
  message: string;
  videoUrl?: string;
}

export const generateVideo = async (
  request: GenerateVideoRequest
): Promise<GenerateVideoResponse> => {
  const response = await apiClient.post('/api/generate-video', request);
  return response.data;
};

export const getVideoStatus = async (videoId: string) => {
  const response = await apiClient.get(`/api/video-status/${videoId}`);
  return response.data;
};

export const listVideos = async () => {
  const response = await apiClient.get('/api/videos');
  return response.data;
};

export const deleteVideo = async (videoId: string) => {
  const response = await apiClient.delete(`/api/video/${videoId}`);
  return response.data;
};

export default apiClient;
