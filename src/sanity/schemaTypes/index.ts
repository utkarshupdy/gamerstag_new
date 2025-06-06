import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blog/blockContentType";
import { categoryType } from "./blog/categoryType";
import { postType } from "./blog/postType";
import { authorType } from "./blog/authorType";
import { commentType } from "./blog/commentType";
import { mentorsType } from "./team/mentorsType";
import { incubationType } from "./team/incubationType";
import { membersType } from "./team/membersType";
import { galleryType } from "./content/galleryType";
import { testimonialType } from "./team/testimonialType";
import { featuresType } from "./features/featuresType";
import { subFeaturesType } from "./features/subFeaturesType";
import { gamesType } from "./features/gamesType";
import { stakeHoldersType } from "./features/stakeHoldersType";
import { homeHighlightsType } from "./content/homeHighlightsType";
import { temporaryFeatureType } from "./features/temporaryFeature";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    commentType,
    mentorsType,
    membersType,
    galleryType,
    incubationType,
    testimonialType,
    featuresType,
    subFeaturesType,
    temporaryFeatureType,
    stakeHoldersType,
    gamesType,
    homeHighlightsType
  ],
};
