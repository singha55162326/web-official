// lib/store.ts
import create from 'zustand';

interface News {
  Title: string;
  description: string;
}

interface Store {
  news: News[];
  setNews: (data: News[]) => void;
}

const useStore = create<Store>((set) => ({
  news: [],
  setNews: (data) => set({ news: data }),
}));

export default useStore;
