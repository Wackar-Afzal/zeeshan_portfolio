import { create } from 'zustand'

export const useCursorStore = create((set) => ({
  isHovered: false,
  isMenu: false,
  isScrollToExplore:{status:false,positions:{x:"",y:""}},
  isStudio:false,
  isProject:false,
  setHoverTrue: () => set((state) => ({ isHovered: true })),
  setHoverFalse: () => set((state) => ({ isHovered: false })),
  setMenuHoverTrue: () => set((state) => ({ isMenu: true })),
  setMenuHoverFalse: () => set((state) => ({ isMenu: false })),
  setIsScrollToExploreHoverTrue: (position) => set((state) => ({
    isScrollToExplore: { status: true, positions: position }
  })),
  
  setIsScrollToExploreHoverFalse: () => set((state) => ({
    isScrollToExplore: { status: false, positions: { top: "" ,left:""} }
  })),
  setIsStudioHoverTrue: () => set((state) => ({ isStudio: true })),
  setIsStudioHoverFalse: () => set((state) => ({ isStudio: false })),
  setIsProjectHoverTrue: () => set((state) => ({ isProject: true })),
  setIsProjectHoverFalse: () => set((state) => ({ isProject: false })),
}))