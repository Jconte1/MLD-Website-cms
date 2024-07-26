import seo from './seo';
import pages from './pages';
import siteSettings from './siteSettings'


//DOCUMENTS IMPORTS (PAGES)
import homepage from './documents/homepage';
import allShowrooms from './documents/allShowrooms';
import showroom from './documents/showroom';
import offering from './documents/offering';

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
import offeringsSlider from './objects/offeringsSlider';
import offeringsSliderItem from './objects/offeringsSliderItem';
import showroomSlider from './objects/showroomSlider';
import showroomSliderItem from './objects/showroomSliderItem';
import parallaxIntro from './objects/parallaxIntro';
import pillars from './objects/pillars';


export const schemaTypes = [
    //DOCUMENTS (PAGES)
    homepage,
    seo,
    allShowrooms,
    showroom,
    offering,

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
    offeringsSlider,
    offeringsSliderItem,
    showroomSlider,
    showroomSliderItem,
    pillars,
]
