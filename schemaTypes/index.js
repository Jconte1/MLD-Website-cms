import seo from './seo';
import pages from './pages';
import siteSettings from './siteSettings'


//DOCUMENTS (PAGES)
import homepage from './documents/homepage';
import allShowrooms from './documents/allShowrooms';
import slcShowroom from './documents/slcShowroom';
import provoShowroom from './documents/provoShowroom';
import boiseShowroom from './documents/boiseShowroom';
import jacksonShowroom from './documents/jacksonShowroom';
import ketchumShowroom from './documents/ketchumShowroom';

//OBJECTS (COMPONENTS)
import showroomVideo from './objects/ShowroomVideoComponent';
import hoursComponent from './objects/hoursComponent';
import cartoonComponent from './objects/cartoonComponent';
import featuresComponent from './objects/featuresComponent';
import gridGallery from './objects/gridGallery';
import cards from './objects/cards';
import showroomInfo from './objects/showroom';

export const schemaTypes = [
    //DOCUMENTS (PAGES)
    homepage,
    seo,
    allShowrooms,
    slcShowroom,
    provoShowroom,
    boiseShowroom,
    jacksonShowroom,
    ketchumShowroom,
    
    //OBJECTS (COMPONENTS)
    showroomVideo,
    showroomInfo,
    hoursComponent,
    cartoonComponent,
    featuresComponent,
    gridGallery,
    cards,

]
