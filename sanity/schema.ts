import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import hashTag from './schemas/hashTag'
import post from './schemas/post'
import author from './schemas/author'
import coachSkill from './schemas/coachSkill'
import coachExperience from './schemas/coachExperience'
import coachLicense from './schemas/coachLicense'
import coachPrize from './schemas/coachPrize'
import video from './schemas/video'
import videoHashTag from './schemas/videoHashTag'
import videoCategory from './schemas/videoCategory'
import videoDir from './schemas/videoDir'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category,hashTag,coachSkill,coachExperience,coachLicense,coachPrize,video,videoHashTag,videoCategory,videoDir,blockContent],
}
