import { type as getTypeMaterial } from "../actions/getTypeMaterial";
const initialState = [
  "Addendum",
  "An Analysis",
  "An Appraisal",
  "Article",
  "Banner",
  "Biography",
  "Birth Notice",
  "Blog",
  "Brief",
  "Caption",
  "Chronology",
  "Column",
  "Correction",
  "Economic Analysis",
  "Editorial",
  "Editorial Cartoon",
  "Editors Note",
  "First Chapter",
  "Front Page",
  "Glossary",
  "Interactive Feature",
  "Interactive Graphic",
  "Interview",
  "Letter",
  "List",
  "Marriage Announcement",
  "Military Analysis",
  "News",
  "News Analysis",
  "Newsletter",
  "Obituary",
  "Obituary (Obit)",
  "Op-Ed",
  "Paid Death Notice",
  "Postscript",
  "Premium",
  "Question",
  "Quote",
  "Recipe",
  "Review",
  "Schedule",
  "SectionFront",
  "Series",
  "Slideshow",
  "Special Report",
  "Statistics",
  "Summary",
  "Text",
  "Video",
  "Web Log"
];
function TypeMaterialReducer(state = initialState, { type, payload }) {
  switch (type) {
    case getTypeMaterial:
      return state;
    default:
      return state;
  }
}
export default TypeMaterialReducer;
