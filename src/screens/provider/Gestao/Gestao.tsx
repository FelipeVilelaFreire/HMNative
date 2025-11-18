import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useUserMode } from '@/src/contexts';
import { ProviderHeader } from '@/src/components/layout';
import Modal from '@/src/components/ui/Modal/Modal';
import { ManagementActivityCard, TeamMemberCard, SpaceCard } from './components';
import { DeleteActivityModal } from './components/DeleteActivityModal';
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

  const handleViewActivity = (id: string) => {
    router.push(`/gestao/activity/${id}`);
  };

  const handleEditActivity = (id: string) => {
    router.push(`/gestao/activity/${id}?edit=true`);
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
    console.log('Editar membro:', id);
    // TODO: Implementar edição de membro
  };

  const handleDeleteTeamMember = (id: string) => {
    console.log('Deletar membro:', id);
    // TODO: Implementar deleção de membro
  };

  const handleEditSpace = (id: string) => {
    console.log('Editar espaço:', id);
    // TODO: Implementar edição de espaço
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
              <Text style={styles.sectionTitle}>Minha Equipe</Text>
              <Text style={styles.sectionCount}>{teamMembers.length}</Text>
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
              <Text style={styles.sectionTitle}>Meus Espaços</Text>
              <Text style={styles.sectionCount}>{spaces.length}</Text>
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
    </View>
  );
}
