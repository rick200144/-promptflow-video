import { create } from 'zustand';

export interface Video {
  id: string;
  prompt: string;
  url?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  duration?: number;
  error?: string;
}

interface VideoStore {
  videos: Video[];
  addVideo: (video: Video) => void;
  updateVideo: (id: string, updates: Partial<Video>) => void;
  removeVideo: (id: string) => void;
  clearVideos: () => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  videos: [],
  addVideo: (video) =>
    set((state) => ({
      videos: [video, ...state.videos],
    })),
  updateVideo: (id, updates) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === id ? { ...video, ...updates } : video
      ),
    })),
  removeVideo: (id) =>
    set((state) => ({
      videos: state.videos.filter((video) => video.id !== id),
    })),
  clearVideos: () => set({ videos: [] }),
}));
