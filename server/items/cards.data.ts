import { BaseCard, Card } from "./card.interface"
import { Cards } from "./cards.interface"

const imgUrl: string = 'https://ik.imagekit.io/wvlrlc0tr/tarot/'

export const cards: Cards = {
  0: {
    id: 0,
    name: 'The Fool',
    bio: 'The Fool is the start of any new adventure. You are about to embark on a new path that you are unfamiliar with. You have the utmost belief in the universe and trust the destination to reveal itself upon the journey.',
    image: `${imgUrl}0.jpg`
  },
  1: {
    id: 1,
    name: 'The Magician',
    bio: 'The Magician points to your capabilities and your full potential. Success derives from your qualities and tapping into the them, not by hiding and repressing them. The Magician shows you to not hold back qualities that need expressing as this will only hold yourself back further.',
    image: `${imgUrl}1.jpg`
  },
  2: {
    id: 2,
    name: 'The High Priestess',
    bio: 'The High Priestess symbolizes mystery and tranquility. This card serves as a sign to retreat into your subconscious to reflect on your current situation. Meditate on your innerself and let your instincts guide you.',
    image: `${imgUrl}2.jpg`
  },
  3: {
    id: 3,
    name: 'The Empress',
    bio: 'The Empress card serves as a sign of maternal power. The hope of a new family is reinforced by the presence of The Empress. This card represents creation, from family and romance to art and business.',
    image: `${imgUrl}3.jpg`
  },
  4: {
    id: 4,
    name: 'The Emperor',
    bio: 'This card is suggestive of stability and security in life. You are on top of things and everything in under your control. It is your hard work, discipline and self control that have bought you this far. It means that you are in charge of your life now setting up your own rules and boundaries.',
    image: `${imgUrl}4.jpg`
  },
  5: {
    id: 5,
    name: 'The Hierophant',
    bio: 'Hierophant stands for tradition and convention. It can represent marriage in an arranged setup. It can also mean a teacher or counsellor who will help in learning / education of the querent.',
    image: `${imgUrl}5.jpg`
  },
  6: {
    id: 6,
    name: 'The Lovers',
    bio: "The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the querent's life will have to be sacrificed; a bachelor(ette)'s lifestyle may be sacrificed and a relationship gained (or vice versa), or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting.",
    image: `${imgUrl}6.jpg`
  },
  7: {
    id: 7,
    name: 'The Chariot',
    bio: 'The Chariot is a card about overcoming conflicts and moving forward in a positive direction. One needs to keep going on and through sheer hard work and commitment he will be victorious.',
    image: `${imgUrl}7.jpg`
  },
  8: {
    id: 8,
    name: 'Strength',
    bio: 'Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury.',
    image: `${imgUrl}8.jpg`
  },
  9: {
    id: 9,
    name: 'The Hermit',
    bio: 'The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.',
    image: `${imgUrl}9.jpg`
  },
  10: {
    id: 10,
    name: "Wheel of Fortune",
    bio: "A common aspect to most interpretations of this card within a reading is to introduce an element of change in the querent's life, such change being in station, position or fortune: such as the rich becoming poor, or the poor becoming rich.",
    image: `${imgUrl}10.jpg`
  },
  11: {
    id: 11,
    name: 'Justice',
    bio: "The Justice card indicates that the fairest decision will be made. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.",
    image: `${imgUrl}11.jpg`,
  },
  12: {
    id: 12,
    name: "The Hanged Man",
    bio: "The Hanged Man is the card that suggests ultimate surrender, sacrifice, or being suspended in time.",
    image: `${imgUrl}12.jpg`,
  },
  13: {
    id: 13,
    name: "Death",
    bio: "Unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness.",
    image: `${imgUrl}13.jpg` ,
  },
  14: {
    id: 14,
    name: "Temperance",
    bio: "This card indicates that you should learn to bring about balance, patience and moderation in your life. You should take the middle road, avoiding extremes and maintain a sense of calm.",
    image: `${imgUrl}14.jpg`,
  },
  15: {
    id: 15,
    name: "The Devil",
    bio: "It represents being seduced by the material world and physical pleasures. Also living in fear, domination and bondage, being caged by an overabundance of luxury, discretion should be used in personal and business matters.",
    image: `${imgUrl}15.jpg`,
  },
  16: {
    id: 16,
    name: "The Tower",
    bio: "The Tower is commonly interpreted as meaning danger, crisis, destruction, and liberation. It is associated with sudden unforseen change",
    image: `${imgUrl}16.jpg`,
  },
  17: {
    id: 17,
    name: "The Star",
    bio: "When the Star card appears, you are likely to find yourself feeling inspired. It brings renewed hope and faith and a sense that you are truly blessed by the universe at this time.",
    image: `${imgUrl}17.jpg`,
  },
  18: {
    id: 18,
    name: "The Moon",
    bio: "The Moon is a card of illusion and deception, and therefore often suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself.",
    image: `${imgUrl}18.jpg`,
  },
  19: {
    id: 19,
    name: "The Sun",
    bio: "The card portends good fortune, happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.",
    image: `${imgUrl}19.jpg`,
  },
  20: {
    id: 20,
    name: "Judgement",
    bio: "This card is referred to as a time of resurrection and awakening, a time when a period of our life comes to an absolute end making way for dynamic new beginnings.",
    image: `${imgUrl}20.jpg`,
  },
  21: {
    id: 21,
    name: "The World",
    bio: "The World represents an ending to a cycle of life, a pause in life before the next big cycle beginning with the fool. It is an indicator of a major and inexorable change, of tectonic breadth.",
    image: `${imgUrl}21.jpg`,
  },
}