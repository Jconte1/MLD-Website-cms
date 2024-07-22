import seo from './seo';
import pages from './pages';
import siteSettings from './siteSettings'


//DOCUMENTS (PAGES)
import homepage from './documents/homepage';
import allShowrooms from './documents/allShowrooms';
import showroom from './documents/showroom';

//OBJECTS (COMPONENTS)
import showroomVideo from './objects/ShowroomVideoComponent';
import hoursComponent from './objects/hoursComponent';
import cartoonComponent from './objects/cartoonComponent';
import featuresComponent from './objects/featuresComponent';
import gridGallery from './objects/gridGallery';
import cards from './objects/cards';
import showroomInfo from './objects/showroomInfo';

export const schemaTypes = [
    //DOCUMENTS (PAGES)
    homepage,
    seo,
    allShowrooms,
    showroom,
    
    //OBJECTS (COMPONENTS)
    showroomVideo,
    showroomInfo,
    hoursComponent,
    cartoonComponent,
    featuresComponent,
    gridGallery,
    cards,

]
