import React, { } from 'react'; 
import { ShowFilePdf } from '../../components';

function ScreenPdf({naviagtion, route}){
    return <ShowFilePdf uri={route.params.uri}/>
}

export default ScreenPdf;