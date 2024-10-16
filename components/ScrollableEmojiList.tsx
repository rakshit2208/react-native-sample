import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface EmojiNameProps {
  emoji: string;
  name: string;
  meaning: string;
}

const EmojiName: React.FC<EmojiNameProps> = ({ emoji, name }) => (
  <View style={styles.emojiNameContainer}>
    <Text style={styles.emoji}>{emoji}</Text>
    <Text style={styles.name}>{name}</Text>
    
  </View>
);

const emojiData: EmojiNameProps[] = [
    { emoji: '💼', name: 'Briefcase', meaning: 'Business, work, job' },
    { emoji: '📊', name: 'Bar Chart', meaning: 'Statistics, analytics, growth' },
    { emoji: '🤝', name: 'Handshake', meaning: 'Agreement, partnership, collaboration' },
    { emoji: '💡', name: 'Light Bulb', meaning: 'Idea, innovation, creativity' },
    { emoji: '📅', name: 'Calendar', meaning: 'Schedule, planning, deadlines' },
    { emoji: '📈', name: 'Chart Increasing', meaning: 'Growth, success, upward trend' },
    { emoji: '🏆', name: 'Trophy', meaning: 'Achievement, success, award' },
    { emoji: '🎯', name: 'Bullseye', meaning: 'Goal, target, objective' },
    { emoji: '📱', name: 'Mobile Phone', meaning: 'Communication, technology, connectivity' },
    { emoji: '💻', name: 'Laptop', meaning: 'Work, technology, remote work' },
    { emoji: '🔍', name: 'Magnifying Glass', meaning: 'Research, investigation, analysis' },
    { emoji: '🗂️', name: 'Card Index Dividers', meaning: 'Organization, filing, data management' },
    { emoji: '📢', name: 'Loudspeaker', meaning: 'Announcement, marketing, promotion' },
    { emoji: '🔑', name: 'Key', meaning: 'Solution, access, security' },
    { emoji: '⏱️', name: 'Stopwatch', meaning: 'Time management, efficiency, deadlines' },
    { emoji: '🌐', name: 'Globe', meaning: 'Global business, international, worldwide' },
    { emoji: '📞', name: 'Telephone', meaning: 'Communication, customer service, networking' },
    { emoji: '📝', name: 'Memo', meaning: 'Problem-solving, contemplation, decision-making' },
    
];

const ScrollableEmojiList: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {emojiData.map((item, index) => (
          <EmojiName key={index} emoji={item.emoji} name={item.name} meaning={item.meaning} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374744',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  emojiNameContainer: {
    alignItems: 'center',
    margin: 10,
    width: 85,
    backgroundColor: 'white',
    borderRadius: 10,
   
  },
  emoji: {
    fontSize: 40,
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default ScrollableEmojiList;