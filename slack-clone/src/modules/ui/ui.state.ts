import { atom, useAtom } from "jotai";

const showCreateWorkspaceModalAtom = atom(false);
const showCreateChannelModalAtom = atom(false);

export const useUiStore = () => {
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useAtom(
    showCreateWorkspaceModalAtom
  );

  const [showCreateChannelModal, setShowCreateChannelModal] = useAtom(
    showCreateChannelModalAtom
  );

  return {
    showCreateWorkspaceModal,
    setShowCreateWorkspaceModal,
    showCreateChannelModal,
    setShowCreateChannelModal,
  };
};
