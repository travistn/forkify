import { create } from 'zustand';

import { Bookmark } from './common/types';

interface AppState {
  search: string;
  bookmarks: Bookmark[];
  enterSearch: (search: string) => void;
  addBookmark: (bookmark: {}) => void;
  removeBookmark: (id: string) => void;
}

const useStore = create<AppState>()((set) => ({
  search: '',
  bookmarks: [],
  enterSearch: (search) => set((state) => ({ search: (state.search = search) })),
  addBookmark: (bookmark) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, { recipe: bookmark } as Bookmark],
    })),
  removeBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((recipe) => recipe.recipe.id !== id),
    })),
}));

export default useStore;
