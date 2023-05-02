import { create } from 'zustand';

interface Bookmark {
  recipe: string;
}

interface AppState {
  search: string;
  bookmarks: Bookmark[];
  enterSearch: (search: string) => void;
  addBookmark: (bookmark: string) => void;
}

const useStore = create<AppState>()((set) => ({
  search: '',
  bookmarks: [],
  enterSearch: (search) => set((state) => ({ search: (state.search = search) })),
  addBookmark: (bookmark) =>
    set((state) => ({ bookmarks: [...state.bookmarks, { recipe: bookmark }] })),
}));

export default useStore;
