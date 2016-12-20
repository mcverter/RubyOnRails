import React from "react";
import AltContainer from 'alt-container';
import alt from '../../libs/alt';
import setup from './setup';
import chromeDebug from 'alt-utils/lib/chromeDebug';


setup(alt);
chromeDebug(alt);

ReactPerf=require('react-addons-perf')

export default ({children}=>
<AltContainer flux={alt}>
    {container}
</AltContainer>
)