import seo from './seo';
import pages from './pages';
import siteSettings from './siteSettings';

// ARRAY IMPORTS 
import blockContent from './arrays/blockContent';

//DOCUMENTS IMPORTS (PAGES)
import homepage from './documents/homepage';
import allShowrooms from './documents/allShowrooms';
import allOfferings from './documents/allOfferings';
import showroom from './documents/showroom';
import offering from './documents/offering';
import blogPost from './documents/blogPost';
import author from './documents/author';
import category from './documents/category';
import blogPageConfig from './documents/blogPageConfig';
import allRecipes from './documents/allRecipes';
import chefscorner from './documents/chefscorner';
import events from './documents/events';
import team from './documents/team';
import department from './documents/department';
import employee from './documents/employee';
import timeline from './documents/timeline';
import mldcares from './documents/mldcares';
import career from './documents/career';
import closeout from './documents/closeout';

//OBJECTS IMPORTS (COMPONENTS)
import showroomVideo from './objects/ShowroomVideoComponent';
import hoursComponent from './objects/hoursComponent';
import cartoonComponent from './objects/cartoonComponent';
import featuresComponent from './objects/featuresComponent';
import gridGallery from './objects/gridGallery';
import cards from './objects/cards';
import showroomInfo from './objects/showroomInfo';
import allBrands from './objects/allBrands';
import popularBrands from './objects/popularBrands';
import brand from './objects/brand';
import showroomSlider from './objects/showroomSlider';
import showroomSliderItem from './objects/showroomSliderItem';
import parallaxIntro from './objects/parallaxIntro';
import pillars from './objects/pillars';
import simpleIntro from './objects/simpleIntro'; 
import simpleintro2 from './objects/simpleintro2';
import textWrap from './objects/textWrap';
import textWrapReverse from './objects/textWrapReverse';
import blogWithGallery from './objects/blogWithGallery';
import blogImage from './objects/blogImage';
import filterComponent from './objects/filterComponent';
import recipeDetails from './objects/recipeDetails';
import recipe from './documents/recipe';
import ingredients from './objects/ingredients';
import instructions from './objects/instructions';
import blogTitle from './objects/blogTitle';
import splitGallery from './objects/splitGallery';
import bigTiles from './objects/bigTiles';
import video from './objects/video';
import review from './objects/review';
import blogParagraph from './objects/blogParagraph';
import splitSlider from './objects/splitSlider';
import title from './objects/title'
import flipCards from './objects/flipCards';
import videoIntro from './objects/video-intro';
import paragraph from './objects/paragraph';
import oldBlogContent from './objects/oldBlogContent';
import scrollToFormButton from './objects/scrollToFormButton';


export const schemaTypes = [

    // ARRAYS
    blockContent,
    
    //DOCUMENTS (PAGES)
    homepage,
    seo,
    allShowrooms,
    allOfferings,
    showroom,
    offering,
    blogPost,
    author,
    category,
    blogPageConfig,
    recipe,
    allRecipes,
    chefscorner,
    events,
    team,
    department,
    employee,
    timeline,
    mldcares,
    career,
    closeout,

    //OBJECTS (COMPONENTS)
    showroomVideo,
    showroomInfo,
    hoursComponent,
    cartoonComponent,
    featuresComponent,
    gridGallery,
    cards,
    parallaxIntro,
    allBrands,
    popularBrands,
    brand,
    showroomSlider,
    showroomSliderItem,
    pillars,
    simpleIntro, 
    simpleintro2,
    textWrap,
    textWrapReverse,
    blogWithGallery,
    blogImage,
    filterComponent,
    recipeDetails,
    ingredients,
    instructions,
    blogTitle,
    splitGallery,
    bigTiles,
    video,
    review,
    blogParagraph,
    splitSlider,
    title,
    flipCards,
    videoIntro,
    paragraph,
    oldBlogContent,
    scrollToFormButton,
]
