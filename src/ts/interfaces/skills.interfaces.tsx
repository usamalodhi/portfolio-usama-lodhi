import SkillCategory from '../enums/skills.enums';

// About Page
interface SkillsData {
  id: number;
  name: string;
  imgPath: string;
  imgAlt: string;
  category: SkillCategory;
}

export default SkillsData;
