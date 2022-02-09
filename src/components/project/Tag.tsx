import React from 'react';

import './Tag.scss'
import IconREACT from '../../media/icons/iconREACT.png';
import IconCSS from '../../media/icons/iconCSS.png';
import IconJS from '../../media/icons/iconJS.png';
import IconHTML from '../../media/icons/iconHTML.png';
import IconVUE from '../../media/icons/iconVUE.png';
import IconBOOTSTRAP from '../../media/icons/iconBOOTSTRAP.png';
import IconMATERIALUI from '../../media/icons/iconMATERIALUI.png';
import IconGIT from '../../media/icons/iconGIT.png';
import IconTS from '../../media/icons/iconTS.png';
import IconREDUX from '../../media/icons/iconREDUX.png';
import IconSASS from '../../media/icons/iconSASS.png';
import IconFIGMA from '../../media/icons/iconFIGMA.png';
import IconXD from '../../media/icons/iconXD.png';
import IconPS from '../../media/icons/iconPS.png';

interface props{
  value: string;
  id?: string;
}

const Tag = function(props:props){

  const getIcon = (name: string) => {
    switch(name as any){
      case "REACT": return IconREACT;
      case "CSS": return IconCSS;
      case "JAVASCRIPT": return IconJS;
      case "HTML": return IconHTML;
      case "GIT": return IconGIT;
      case "VUE": return IconVUE;
      case "BOOTSTRAP": return IconBOOTSTRAP;
      case "MATERIAL UI": return IconMATERIALUI;
      case "TYPESCRIPT": return IconTS;
      case "REDUX": return IconREDUX;
      case "SASS": return IconSASS;
      case "FIGMA": return IconFIGMA;
      case "ADOBE XD": return IconXD;
      case "ADOBE PHOTOSHOP": return IconPS;
      default: return "";
    }
  }

  return(
    <h1 className='tag' id={props.id}>
      <img src={getIcon(props.value)} alt={props.value} />
      {props.value}
    </h1>
  )
}

export default Tag;