import SpaceCardItem from './components/SpaceCardItem';
import AddSpaceModal from './components/AddSpaceModal';
import EditSpaceModal from './components/EditSpaceModal';

// Re-export SpaceCardItem as SpaceCard for backward compatibility
export { SpaceCardItem as SpaceCard, SpaceCardItem, AddSpaceModal, EditSpaceModal };
export type { NewSpace } from './components/AddSpaceModal';
