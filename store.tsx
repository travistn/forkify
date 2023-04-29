import { create } from 'zustand';

interface AppState {
  search: string;
  enterSearch: (search: string) => void;
}

const useStore = create<AppState>()((set) => ({
  search: '',
  enterSearch: (search: string) => set((state) => ({ search: (state.search = search) })),
}));

export default useStore;
