import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useUserMode } from '@/src/contexts';
import { ProviderHeader } from '@/src/components/layout';
import Modal from '@/src/components/ui/Modal/Modal';
import { ManagementActivityCard, DeleteActivityModal, AddActivityModal, EditActivityModal, TeamMemberCard, AddTeamMemberModal, EditTeamMemberModal, SpaceCard, AddSpaceModal, EditSpaceModal } from './components';
import type { NewTeamMember, NewSpace, NewActivity } from './components';
import { TeamMember, Space } from '@/src/mocks/management';
import { activities } from '@/src/mocks/activities';
import { Activity } from '@/src/mocks/activities';
import { teamMembers, spaces } from '@/src/mocks/management';
import { styles } from './Gestao.styles';
import { colors } from '@/src/theme';

type GestaoTab = 'activities' | 'team' | 'spaces';

export default function Gestao() {
  const { mode } = useUserMode();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<GestaoTab>('activities');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState<Activity | null>(null);
  const [addActivityModalVisible, setAddActivityModalVisible] = useState(false);
  const [editActivityModalVisible, setEditActivityModalVisible] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState<Activity | null>(null);
  const [addTeamMemberModalVisible, setAddTeamMemberModalVisible] = useState(false);
  const [editTeamMemberModalVisible, setEditTeamMemberModalVisible] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<TeamMember | null>(null);
  const [addSpaceModalVisible, setAddSpaceModalVisible] = useState(false);
  const [editSpaceModalVisible, setEditSpaceModalVisible] = useState(false);
  const [spaceToEdit, setSpaceToEdit] = useState<Space | null>(null);

  const handleViewActivity = (id: string) => {
    router.push(`/gestao/activity/${id}`);
  };

  const handleEditActivity = (id: string) => {
    const activity = activities.find(a => a.id === id);
    if (activity) {
      setActivityToEdit(activity);
      setEditActivityModalVisible(true);
    }
  };

  const handleSaveActivity = (updatedActivity: Activity) => {
    console.log('Atividade atualizada:', updatedActivity);
    // TODO: Implementar atualização de atividade
    setEditActivityModalVisible(false);
    setActivityToEdit(null);
  };

  const handleAddActivity = (newActivity: NewActivity) => {
    console.log('Nova atividade:', newActivity);
    // TODO: Implementar adição de atividade
    setAddActivityModalVisible(false);
  };

  const handleDeleteActivity = (id: string) => {
    const activity = activities.find(a => a.id === id);
    if (activity) {
      setActivityToDelete(activity);
      setDeleteModalVisible(true);
    }
  };

  const confirmDeleteActivity = () => {
    if (activityToDelete) {
      console.log('Atividade deletada:', activityToDelete.id);
      // TODO: Implementar lógica de deleção
      setDeleteModalVisible(false);
      setActivityToDelete(null);
    }
  };

  const cancelDeleteActivity = () => {
    setDeleteModalVisible(false);
    setActivityToDelete(null);
  };

  const handleEditTeamMember = (id: string) => {
    const member = teamMembers.find(m => m.id === id);
    if (member) {
      setMemberToEdit(member);
      setEditTeamMemberModalVisible(true);
    }
  };

  const handleSaveTeamMember = (updatedMember: TeamMember) => {
    console.log('Membro atualizado:', updatedMember);
    // TODO: Implementar atualização de membro
    setEditTeamMemberModalVisible(false);
    setMemberToEdit(null);
  };

  const handleDeleteTeamMember = (id: string) => {
    console.log('Deletar membro:', id);
    // TODO: Implementar deleção de membro
  };

  const handleAddTeamMember = (newMember: NewTeamMember) => {
    console.log('Novo membro:', newMember);
    // TODO: Implementar adição de membro
    setAddTeamMemberModalVisible(false);
  };

  const handleEditSpace = (id: string) => {
    const space = spaces.find(s => s.id === id);
    if (space) {
      setSpaceToEdit(space);
      setEditSpaceModalVisible(true);
    }
  };

  const handleSaveSpace = (updatedSpace: Space) => {
    console.log('Espaço atualizado:', updatedSpace);
    // TODO: Implementar atualização de espaço
    setEditSpaceModalVisible(false);
    setSpaceToEdit(null);
  };

  const handleAddSpace = (newSpace: NewSpace) => {
    console.log('Novo espaço:', newSpace);
    // TODO: Implementar adição de espaço
    setAddSpaceModalVisible(false);
  };

  const handleDeleteSpace = (id: string) => {
    console.log('Deletar espaço:', id);
    // TODO: Implementar deleção de espaço
  };

  return (
    <View style={styles.container}>
      {/* Header com nome do Provider */}
      <ProviderHeader />

      {/* Tabs Header */}
      <View style={styles.tabsHeader}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'activities' && styles.activeTab]}
          onPress={() => setActiveTab('activities')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'activities' && styles.activeTabText]}>
            Atividades
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'team' && styles.activeTab]}
          onPress={() => setActiveTab('team')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'team' && styles.activeTabText]}>
            Equipe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'spaces' && styles.activeTab]}
          onPress={() => setActiveTab('spaces')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'spaces' && styles.activeTabText]}>
            Espaços
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Tab Atividades */}
        {activeTab === 'activities' && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>Minhas Atividades</Text>
                <Text style={styles.sectionCount}>{activities.slice(0, 4).length}</Text>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setAddActivityModalVisible(true)}
                activeOpacity={0.7}
              >
                <FontAwesome5 name="plus" size={12} color={colors.white} />
                <Text style={styles.addButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            {activities.slice(0, 4).map((activity, index) => (
              <ManagementActivityCard
                key={activity.id}
                activity={activity}
                spaceName={['Quadra 1', 'Sala 2', 'Piscina Olímpica', 'Quadra 1'][index]}
                onPress={() => handleViewActivity(activity.id)}
                onEdit={() => handleEditActivity(activity.id)}
                onDelete={() => handleDeleteActivity(activity.id)}
              />
            ))}
          </View>
        )}

        {/* Tab Equipe */}
        {activeTab === 'team' && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>Minha Equipe</Text>
                <Text style={styles.sectionCount}>{teamMembers.length}</Text>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setAddTeamMemberModalVisible(true)}
                activeOpacity={0.7}
              >
                <FontAwesome5 name="user-plus" size={12} color={colors.white} />
                <Text style={styles.addButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onEdit={() => handleEditTeamMember(member.id)}
                onDelete={() => handleDeleteTeamMember(member.id)}
              />
            ))}
          </View>
        )}

        {/* Tab Espaços */}
        {activeTab === 'spaces' && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>Meus Espaços</Text>
                <Text style={styles.sectionCount}>{spaces.length}</Text>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setAddSpaceModalVisible(true)}
                activeOpacity={0.7}
              >
                <FontAwesome5 name="plus" size={12} color={colors.white} />
                <Text style={styles.addButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            {spaces.map((space) => (
              <SpaceCard
                key={space.id}
                space={space}
                onEdit={() => handleEditSpace(space.id)}
                onDelete={() => handleDeleteSpace(space.id)}
              />
            ))}
          </View>
        )}
      </ScrollView>

      {/* Modal de confirmação de exclusão */}
      {activityToDelete && (
        <Modal
          visible={deleteModalVisible}
          onClose={cancelDeleteActivity}
        >
          <DeleteActivityModal
            activity={activityToDelete}
            onConfirm={confirmDeleteActivity}
            onCancel={cancelDeleteActivity}
          />
        </Modal>
      )}

      {/* Modal para adicionar atividade */}
      <AddActivityModal
        visible={addActivityModalVisible}
        onClose={() => setAddActivityModalVisible(false)}
        onSave={handleAddActivity}
      />

      {/* Modal para editar atividade */}
      <EditActivityModal
        visible={editActivityModalVisible}
        activity={activityToEdit}
        onClose={() => {
          setEditActivityModalVisible(false);
          setActivityToEdit(null);
        }}
        onSave={handleSaveActivity}
      />

      {/* Modal para adicionar membro da equipe */}
      <AddTeamMemberModal
        visible={addTeamMemberModalVisible}
        onClose={() => setAddTeamMemberModalVisible(false)}
        onSave={handleAddTeamMember}
      />

      {/* Modal para editar membro da equipe */}
      <EditTeamMemberModal
        visible={editTeamMemberModalVisible}
        member={memberToEdit}
        onClose={() => {
          setEditTeamMemberModalVisible(false);
          setMemberToEdit(null);
        }}
        onSave={handleSaveTeamMember}
      />

      {/* Modal para adicionar espaço */}
      <AddSpaceModal
        visible={addSpaceModalVisible}
        onClose={() => setAddSpaceModalVisible(false)}
        onSave={handleAddSpace}
      />

      {/* Modal para editar espaço */}
      <EditSpaceModal
        visible={editSpaceModalVisible}
        space={spaceToEdit}
        onClose={() => {
          setEditSpaceModalVisible(false);
          setSpaceToEdit(null);
        }}
        onSave={handleSaveSpace}
      />
    </View>
  );
}
