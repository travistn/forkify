import { create } from 'zustand';

import { Bookmark } from './common/types';

interface AppState {
  search: string;
  bookmarks: Bookmark[];
  enterSearch: (search: string) => void;
  addBookmark: (bookmark: {}) => void;
}

const useStore = create<AppState>()((set) => ({
  search: '',
  bookmarks: [],
  enterSearch: (search) => set((state) => ({ search: (state.search = search) })),
  addBookmark: (bookmark) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, { recipe: bookmark } as Bookmark],
    })),
}));

export default useStore;
