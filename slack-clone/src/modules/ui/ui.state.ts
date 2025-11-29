import { atom, useAtom } from "jotai";

export const showCreateWorkspaceModalAtom = atom(false);

export const useUiStore = () => {
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useAtom(
    showCreateWorkspaceModalAtom
  );
  return { showCreateWorkspaceModal, setShowCreateWorkspaceModal };
};
